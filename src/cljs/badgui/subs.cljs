(ns badgui.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::loading
 (fn [db]
   (:loading db)))

(re-frame/reg-sub
 ::results
 (fn [db]
   (:results  db)))

(re-frame/reg-sub
 ::cursor
 (fn [db]
   (:cursor db)))

(re-frame/reg-sub
 ::ongoing
 (fn [db]
   (:ongoing db)))

(re-frame/reg-sub
 ::box
 (fn [db]
   (:box db)))
