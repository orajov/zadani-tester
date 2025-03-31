const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'e2e/support/e2e.js',
    specPattern: 'e2e/spec/**/*.cy.js',
    fixturesFolder: 'e2e/data/*.json',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'e2e/report/screenshots',
    video: true,
    videosFolder: 'e2e/report/videos',
    downloadsFolder: 'e2e/report/downloads',
    defaultCommandTimeout: 4000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      CYPRESS_RESOLUTION: process.env.CYPRESS_RESOLUTION,
      CYPRESS_LANGUAGE: process.env.CYPRESS_LANGUAGE,
      CYPRESS_URL: process.env.CYPRESS_URL
    }
  },
});
