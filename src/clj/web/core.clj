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

(defroutes resources-routes
    (route/resources "/"))

(defroutes node_modules
  (route/files "/" {:root "node_modules"}))

 (defroutes routess
   (GET "/" [] (index-handler "asd"))
   (GET "/history" [] (str "jaahas"))
   (GET "/box/:name" [name] (str (database/box name)))
   (POST "/wsdata" req (database/destruct (parse-string (slurp (:body req)) true)))
   (route/not-found "<h1>Page not found</h1>"))

 (def app
   (routes
       node_modules
       resources-routes
       routess))

(mount/defstate server
  :start (http/start-server #'app {:port (Integer. (or (System/getenv "PORT") "8080"))})
  :stop (.close server))

(defn -main [& _]
  (mount/start)
  (database/scrape))
