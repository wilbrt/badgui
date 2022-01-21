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
6. Run `npx shadow-cljs release app`, this will create `resources/public/js/compiled` directory, containing the compiled `app.js` and `manifest.edn` files.
7. 
