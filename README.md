# BadGUI

A [re-frame](https://github.com/day8/re-frame) application designed to view ongoing games, game history and aggregate data from the Bad API

## Getting Started

### Environment Setup

1. Install [JDK 8 or later](https://openjdk.java.net/install/) (Java Development Kit)
2. Install [Node.js](https://nodejs.org/) (JavaScript runtime environment) which should include
   [NPM](https://docs.npmjs.com/cli/npm) or if your Node.js installation does not include NPM also install it.
3. Install [Leiningen](https://leiningen.org/#install)
4. Install [Postgresql](https://www.postgresql.org/download/)  
5. Clone this repo and open a terminal in the `badgui` project root directory
6. Run `npm install` and `npx shadow-cljs release app`, this will create `resources/public/js/compiled` directory, containing the compiled `app.js` and `manifest.edn` files.
7. Then run `initdb pg` and `createdb badgui` to setup the database.
8. Now you can do `lein run`, if this is your first time running the process, put "First" as your first argument. If you don't use a second argument the program will try to copy all pages from the Bad API history. This might take several hours. If you want to copy only a certain amount of pages you can use an integer as the second argument. This will specify the number of pages to copy.
9. After running the program you should be able to find the app in localhost://8080. The server might take a couple of minutes to start so please be patient.
