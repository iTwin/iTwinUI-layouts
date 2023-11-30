const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000/#/',
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    video: false,
    defaultCommandTimeout: 20000,
    requestTimeout: 20000,
    viewportWidth: 3840,
    viewportHeight: 2160,
    retries: 3,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
