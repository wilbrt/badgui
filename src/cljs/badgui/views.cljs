(ns badgui.views
  (:require
   [re-frame.core :as re-frame]
   [badgui.events :as events]
   [badgui.subs :as subs]))



(defn display-results [result]
  (let [a (:playerA result)
        b (:playerB result)]
    [:div.b {:key (gensym "on-going")}
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name a)])} (str (:name a))]
           [:p (str (:played a))]]
     [:td.versus (str " VS ")]
     [:td [:h3 {:on-click #(re-frame/dispatch [::events/boxit (:name b)])} (str (:name b))]
           [:p (str (:played b))]]]))

(defn hoverbox [info]
  [:div
   [:h3 (str (:name info) "'s statitistics")]
   [:p (str "Total matches played: " (:gamesplayed info))]
   [:p (str "Winrate: " (:winrate info))]
   [:p (str "Most played: " (str (:mostplayed info)))]])


(defn main-panel []
  (let [loading (re-frame/subscribe [::subs/loading])
        results (re-frame/subscribe [::subs/results])
        cursor (re-frame/subscribe [::subs/cursor])
        ongoing (re-frame/subscribe [::subs/ongoing])
        box (re-frame/subscribe [::subs/box])]
    [:div {:align "center"}
     [:h1 {:align "center"}
      "Game viewer"]
    [:p (when @box  (hoverbox @box))]
        [:td.head
        [:h3 {:align "center"} "Ongoing Games"]
         [:div [:th "Player A"]
              [:th.versus " "]
              [:th "Player B"]]
     (map #(display-results (second %)) @ongoing)
        [:td.box
         [:p {:align "center"}]]
     [:td.listr (when @loading "Loading...")]]]))
