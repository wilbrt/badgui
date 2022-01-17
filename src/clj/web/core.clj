(ns web.core
   (:require
            [compojure.core :refer :all]
            [compojure.route :as route]
            [muuntaja.core :as m]
            [clj-http.client :as client]
            [cheshire.core :refer :all]
            [aleph.http :as http]
            [mount.core :as mount]
            [clojure.java.io :as io])
  (:gen-class))

(defn index-handler [_]
  {:body
    (slurp (io/resource "public/index.html"))})

#_(defn scrape []
 (let [initial (parse-string
                (:body (client/get "https://bad-api-assignment.reaktor.com/rps/history"
                                   {:accept :json}))
                true)]
  (loop [cursor (:cursor initial) data (:data initial) times 0]
      (if (= cursor "/rps/history?cursor=-sz1vUtyeKGl")
        times
        (let [new (parse-string
                   (:body (client/get (str "https://bad-api-assignment.reaktor.com" cursor)
                                      {:accept :json}))
                   true)]
            (recur (:cursor new) (conj data (:data new)) (inc times)))))))

(defroutes resources-routes
    (route/resources "/"))

 (defroutes routess
   (GET "/" [] (index-handler "asd"))
   (route/not-found "<h1>Page not found</h1>"))

 (def app
   (routes
       resources-routes
       routess))

(mount/defstate server
  :start (http/start-server #'app {:port 8080})
  :stop (.close server))

(defn -main [& _]
  (mount/start))
