(ns web.core
   (:require
            [compojure.core :refer :all]
            [compojure.route :as route]
            [muuntaja.core :as m]
            [clojure.java.jdbc :as sql]
            [clj-http.client :as client]
            [cheshire.core :refer :all]
            [aleph.http :as http]
            [mount.core :as mount]
            [clojure.java.io :as io]
            [web.database :as database]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.util.response :refer [response]])
  (:gen-class))

(defn index-handler [_]
  {:body
    (slurp (io/resource "public/index.html"))})

(defn update-handle []
  (do (future (database/scrape -1))
      "Message received"))

(defroutes resources-routes
    (route/resources "/"))

 (defroutes routess
   (GET "/" [] (index-handler "asd"))
   (GET "/box/:name" [name] (str (database/box name)))
   (GET "/update" [] (update-handle))
   (POST "/wsdata" req (database/destruct (parse-string (slurp (:body req)) true)))
   (route/not-found "<h1>Page not found</h1>"))

 (def app
   (routes
       resources-routes
       routess))

(mount/defstate server
  :start (http/start-server #'app {:port 8080})
  :stop (.close server))

(defn -main [& args]
  (mount/start)
  (if (= "First" (first args))
    (database/create-table))
  (future (database/scrape (if (second args)
                        (Integer/parseInt (second args))
                        -1))))
