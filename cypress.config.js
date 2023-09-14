const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fnt1qi",

  e2e: {
    setupNodeEvents(on, config) {
    
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    
    },
  },
});
