(ns web.database
  (:require   [clojure.java.jdbc :as sql]
              [clj-http.client :as client]
              [cheshire.core :refer :all]))

(def spec (or (System/getenv "DATABASE_URL")
              "postgresql://localhost:5432/badgui"))


(defn winner [a b]
 (let [j (compare (:played a) (:played b))]
  (if (= j 0) "DRAW")
            (if (.contains [-2 -1 3] j)
              (:name a)
              (:name b))))

(defn destruct [row]
 (if
   (= () (sql/query spec ["select * from pelit where gameid = ?" (:gameId row)]))
      (sql/insert! spec
               :pelit {:gameid (:gameId row)
                       :t (:t row)
                       :nameA (:name (:playerA row))
                       :nameB (:name (:playerB row))
                       :playA (:played (:playerA row))
                       :playB (:played (:playerB row))
                       :winner (winner (:playerA row) (:playerB row))})))

(defn create-table []
   (sql/db-do-commands
    spec
      (sql/create-table-ddl :pelit [[:gameId :text :primary :key] [:t :text]
                                    [:nameA :text] [:nameB :text]
                                    [:playA :text] [:playB :text]
                                    [:winner :text] [:cursor :text]])))

(defn scrapepage [cursor]
  (parse-string
             (:body (client/get (str "https://bad-api-assignment.reaktor.com" cursor)
                                {:accept :json})) true))

(defn scrape []
  (loop [eka (scrapepage "/rps/history")]
    (do
      (doall (map destruct (:data eka)))
      (if (or (not (= () (sql/query spec ["select * from pelit where cursor = ?" (:cursor eka)])))
              (= (:cursor eka) "/rps/history?cursor=-sz1vUtyeKGl"))
          "Up to date"
          (do (sql/insert! spec :pelit {:cursor (:cursor eka) :gameId (str (gensym "cursor"))})
              (recur (scrapepage (:cursor eka))))))))

(defn gamesPlayed [name]
  (+ (count (sql/query spec ["select * from pelit where namea = ?" name]))
     (count (sql/query spec ["select * from pelit where nameb = ?" name]))))

(defn getWinrate [name]
     (/ (count (sql/query spec ["select * from pelit where winner = ?"  name]))
     (gamesPlayed name)))

(defn xsplayed [name x]
  (count (sql/query spec
                                ["select * from pelit where (namea = ? and playa = ?) or (nameb = ? and playb = ?) "
                                 name x name x])))

(defn mostPlayed [name]
  (apply max-key val {"ROCK" (xsplayed name "ROCK")
                      "PAPER" (xsplayed name "PAPER")
                      "SCISSORS" (xsplayed name "SCISSORS")}))

(defn update-db [req]
  (destruct (:data req)))

(defn box [name]
  {:name name
   :gamesplayed (str (gamesPlayed name))
   :winrate (str (* 0.01 (Math/round (* 10000.0 (getWinrate name)))) "%")
   :mostplayed (first (mostPlayed name))})
