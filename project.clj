(defproject badup "0.1.0-SNAPSHOT"
  :source-paths ["src" "src/clj"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring/ring-devel "1.6.3"]]
  :min-lein-version "2.0.0"
  :ring {:handler web.core/handler}
  :plugins [[lein-ring "0.12.5"]
            [lein-cljsbuild "1.1.3"]])
