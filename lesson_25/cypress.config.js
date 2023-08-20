const { defineConfig } = require('cypress');

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1280,
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/**/*.spec.{js,jsx,ts,tsx}',

    },
})