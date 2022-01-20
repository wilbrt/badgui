(ns badgui.views
  (:require
   [re-frame.core :as re-frame]
   [badgui.events :as events]
   [badgui.subs :as subs]))

(defn hoverbox [info]
  [:div.box.right
   [:h3 (str (:name info) "'s statitistics")]
   [:p (str "Total matches played: " (:gamesplayed info))]
   [:p (str "Winrate: " (:winrate info))]
   [:p (str "Most played: " (str (:mostplayed info)))]])

(defn display-results [result]
  (let [a (:playerA result)
        b (:playerB result)
        box (re-frame/subscribe [::subs/box])]
    [:div.b {:key (gensym "on-going") :align "center"}
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name a)])} (str (:name a))]
           [:p (str (:played a))]]
     [:td.versus (str " VS ")]
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name b)])} (str (:name b))]
           [:p (str (:played b))]]]))

(defn display-history [result]
  (let [keyded (cljs.reader/read-string result)]
  [:div.b2 {:key (gensym "history") :align "center"}
   [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:namea keyded)])} (str (:namea keyded))]
         [:p (str (:playa keyded))]]
   [:td.versus (str " VS ")]
   [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:nameb keyded)])} (str (:nameb keyded))]
         [:p (str (:playb keyded))]]]))

(defn history-list [num]
 (let [history (re-frame/subscribe [::subs/history])]
  (map display-history (nth (partition 5 @history) num))))

(defn search-field []
  (let [value (re-frame/subscribe [::subs/searchf])]
    [:div.versus
      [:input {:value @value
              :on-change #(re-frame/dispatch [::events/update-search (-> % .-target .-value)])
              :type "text" :placeholder "Playername"}]
      [:button {:on-click #(re-frame/dispatch [::events/boxit @value])}"search"]]))

(defn buttons []
  (let [num (re-frame/subscribe [::subs/pagenum])]
    [:div (when (> (:now @num) 0)
      [:button.marg
        {:on-click #(re-frame/dispatch [::events/pagenumber -1])} "<<"])
    (when (< (:now @num) (inc (:max @num)))
      [:button.marg
        {:on-click #(re-frame/dispatch [::events/pagenumber 1])} ">>"])]))

(defn main-panel []
  (let [loading (re-frame/subscribe [::subs/loading])
        results (re-frame/subscribe [::subs/results])
        ongoing (re-frame/subscribe [::subs/ongoing])
        box (re-frame/subscribe [::subs/box])
        history (re-frame/subscribe [::subs/history])
        num (re-frame/subscribe [::subs/pagenum])]
    [:body
     [:div.left
     [:h1 {:align "center"} "Bad game viewer"]
        [:h3 {:align "center"} "Ongoing Games"]
         [:div {:align "center"}
          [:th "Player A"]
              [:th.versus " "]
              [:th.padleft "Player B"]]
     (doall (map #(display-results (second %)) @ongoing))]
     [:div.right
      [:h3.left {:align "center"} "Search for game history"
        (search-field)
        (when @num (buttons))]
      [:p {:align "center"} (when @box  (hoverbox @box))]
      (when @num (history-list (:now @num)))]]))
