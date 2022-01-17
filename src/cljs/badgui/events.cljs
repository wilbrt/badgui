(ns badgui.events
  (:require
   [re-frame.core :as re-frame]
   [badgui.db :as db]
   [day8.re-frame.http-fx]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [ajax.core :as ajax]
   ))

(defn websocket-effect
  [{:as request
    :keys [uri on-message on-error on-success on-failure existing-websocket]}]
  (if existing-websocket
    (re-frame/dispatch (conj on-success existing-websocket))
    (let [websocket (js/WebSocket. uri)]
      (set! (.-onmessage websocket) #(re-frame/dispatch (conj on-message %)))
      (set! (.-onerror websocket) #(re-frame/dispatch (conj on-failure %)))
      (set! (.-onopen websocket) (fn on-open []
                                   (set! (.-onerror websocket) #(re-frame/dispatch (conj on-error %)))
                                   (re-frame/dispatch (conj on-success websocket)))))))

(def temp {:type nil
           :gameId nil
           :t nil
           :playerA {:name nil
                     :played nil}
           :playerB {:name nil
                     :played nil}})

(defn parselive [input]
  (as-> input s
        (rest (.split s "\""))
        (take-nth 2 s)
        ))

(defn xsplayed [data name sym]
  (count
    (filter #(or (and (= (:played (:playerA %)) sym)
                      (= (:name (:playerA %)) name))
                 (and (= (:played (:playerA %)) sym)
                      (= (:name (:playerA %)) name)))
         data)))


(defn filltemp [data]
      (-> temp
          (assoc :type (second data)
                 :gameId (nth data 3))
          (assoc-in [:playerA :name] (nth data 6))
          (assoc-in [:playerB :name] (nth data 9))))

(defn relevantdata [data name]
  (filter #(or (= name (:name (:playerA %)))
               (= name (:name (:playerB %))))
          data))


(re-frame/reg-fx :websocket websocket-effect)

(re-frame/reg-event-fx
 ::connect-websocket
 (fn [_ _]
   {:websocket {:method :get
                :uri "ws://bad-api-assignment.reaktor.com/rps/live"
                :on-message [::msg-handler]
                :on-success [:websocket-success]
                :on-failure [:websocket-failure]}}))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   (-> db/default-db
       (assoc :connecting true))))

(re-frame/reg-event-db
  ::update-name
    (fn [db [_ val]]
      (assoc db :name val)))

(re-frame/reg-event-fx                             ;; note the trailing -fx
  ::fetch-results                      ;; usage:  (dispatch [:handler-with-http])
  (fn [{:keys [db]} _]                    ;; the first param will be "world"
    {:db   (assoc db :loading true)   ;; causes the twirly-waiting-dialog to show??
     :http-xhrio {:method          :get
                  :uri             "http://localhost:8080/history"
                  :timeout         8000                                           ;; optional see API docs
                  :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                  :on-success      [::fetch-results-success]
                  :on-failure      [::fetch-results-failure]}}))

(re-frame/reg-event-db
 ::fetch-results-success
 (fn [db [_ data]]
   (let [d (js->clj (.parse js/JSON (:result data)) :keywordize-keys true)]
     (-> db
       (assoc :loading false)
       (assoc :results (:data d))
       (assoc :cursor  (second (.split (str (:cursor d)) "=")))))))

(re-frame/reg-event-db
 ::fetch-results-failure
 (fn [db [_ data]]
   (-> db
      (assoc :loading false)
      (assoc :name data))))

(re-frame/reg-event-fx                             ;; note the trailing -fx
  ::fetch-next                      ;; usage:  (dispatch [:handler-with-http])
  (fn [_ [_ val]]                    ;; the first param will be "world"
    {:http-xhrio {:method          :get
                  :uri             (str "http://localhost:8080/history/" val)
                  :timeout         8000                                           ;; optional see API docs
                  :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                  :on-success      [::fetch-results-success]
                  :on-failure      [::fetch-results-failure]}}))



(re-frame/reg-event-fx
 ::msg-handler
 (fn [_ [_ message]]
      (let [msg (parselive (.parse js/JSON (.-data message)))]
            (if (= (second msg) "GAME_BEGIN")
                (re-frame/dispatch [::add-ongoing msg])
                (re-frame/dispatch [::update-handler msg])))))

(re-frame/reg-event-fx
 ::update-handler
 (fn [_ [_ msg]]
   {:fx [[:dispatch [::change-ongoing msg]]
         [:dispatch-later {:ms 3000 :dispatch [::del-ongoing msg]}]]}))

(re-frame/reg-event-db
 ::add-ongoing
    (fn [db [_ data]]
      (assoc-in db [:ongoing (keyword (nth data 3))]  (filltemp data))))

(re-frame/reg-event-db
 ::change-ongoing
 (fn [db [_ data]]
  (if-not (not (get-in db [:ongoing (keyword (nth data 3))]))
      (-> db
          (assoc-in [:ongoing (keyword (nth data 3)) :type] (nth data 1))
          (assoc-in [:ongoing (keyword (nth data 3)) :t] (nth data 5))
          (assoc-in [:ongoing (keyword (nth data 3)) :playerA :played] (nth data 9))
          (assoc-in [:ongoing (keyword (nth data 3)) :playerB :played] (nth data 14))))))

(re-frame/reg-event-db
 ::del-ongoing
 (fn [db [_ data]]
      (-> db
        (update-in [:ongoing] dissoc (keyword (nth data 3))))))

(re-frame/reg-event-fx
 ::boxit
 (fn [{:keys [db]} [_ name]]
   {:db (assoc db :loading true)
    :fx [[:dispatch [::box-calc name]]]}))

(re-frame/reg-event-db
 ::box-calc

 (fn [db [_ name]]
  (let [rd (relevantdata (:results db) name)
        numof {"Rock" (xsplayed rd name "ROCK")
                "Paper" (xsplayed rd name "PAPER")
                "Scissors" (xsplayed rd name "SCISSORS")}]
   (-> db
       (assoc-in [:box :total] (count rd))
       (assoc-in [:box :name] name)
       (assoc-in [:box :most-played]  (key (apply max-key val numof)))
       (assoc :loading false)))))
