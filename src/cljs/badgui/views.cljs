(ns badgui.views
  (:require
   [re-frame.core :as re-frame]
   [badgui.events :as events]
   [badgui.subs :as subs]))



(defn display-results [result]
  (let [a (:playerA result)
        b (:playerB result)]
    [:tr.b {:key (int (:t result))}
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name a)])} (str (:name a))]
           [:p (str (:played a))]]
     [:td.versus (str " VS ")]
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name b)])} (str (:name b))]
           [:p (str (:played b))]]]))

(defn hoverbox [info]
  [:div
   [:h3 (str (:name info) "'s statitistics")]
   [:p (str "Total matches played: " (:total info))]
   [:p (str "Most played: " (str (:most-played info)))]])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        loading (re-frame/subscribe [::subs/loading])
        results (re-frame/subscribe [::subs/results])
        cursor (re-frame/subscribe [::subs/cursor])
        ongoing (re-frame/subscribe [::subs/ongoing])
        box (re-frame/subscribe [::subs/box])]
    [:div {:align "center"}
     [:h1
      "Game viewer"]
      [:button {:on-click #(re-frame/dispatch [::events/fetch-results])} "Boom"]
      [:button {:on-click #(re-frame/dispatch [::events/fetch-next @cursor])} "Get Next Page"]
    [:tr
        [:td.listl
        [:h3 {:align "center"} "Ongoing Games"]
         [:tr [:th "Player A"]
              [:th.versus " "]
              [:th "Player B"]]
     (map #(display-results (second %)) @ongoing)]
        [:td.box
         [:p {:align "center"} (when @box  (hoverbox @box))]]
     [:td.listr (when @loading "Loading...")]
     [:h3 {:align "center"} "Game History"]
     [:tr [:th "Player A"]
          [:th.versus " "]
          [:th "Player B"]]
    (map display-results @results)]]))
