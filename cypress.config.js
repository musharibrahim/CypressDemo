const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    video: false,
    defaultCommandTimeout:5000,
    pageLoadTimeout: 15000,
    setupNodeEvents(on, config) {
      // on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
    // specPattern: "cypress/e2e/*.feature",
  },
});
