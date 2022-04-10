# Basic NodeJs React App

This is a basic application used for starting fullstack NodeJs applications. 

Stack built using React, Express and Webpack. 

The app currently displays the top ten stories on https://news.ycombinator.com/ (aka Hacker News) to give an example of rendering dynamic content. 


## Requirements
 - Node JS: v16.14.0 (use node version manager (NVM) https://github.com/nvm-sh/nvm )
 - NPM: 8.3.1 


## Installation
From the root directory where the package.json file is located run the following command to install project dependencies. 

```bash
npm install
```

## Running The App (Prodution mode)
Running the following command will bundle the client side code into static files using webpack. This is then served by Express from the ```dist``` folder.

```bash
npm run start
```

## Running The App (Dev mode)
Running the app in dev mode enables webpack hot reloading. Dev mode serves the frontend react app on port 8081 and the api separately on port 8080 for easier debugging.

```bash
npm run dev
```

