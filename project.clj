(defproject badup "0.1.0-SNAPSHOT"
  :source-paths ["src" "src/clj" "src/clj/web"]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring "1.9.5"]
                 [metosin/muuntaja "0.6.8"]
                 [compojure "1.6.2"]
                 [day8.re-frame/http-fx "0.2.3"]
                 [clj-http "3.12.3"]
                 [cheshire "5.10.1"]
                 [aleph "0.4.6"]
                 [proto-repl "0.3.1"]
                 [mount "0.1.16"]]

  :min-lein-version "2.0.0"
  :ring {:handler web.core/-main}
  :plugins [[lein-ring "0.12.6"]
            [lein-cljsbuild "1.1.3"]])
