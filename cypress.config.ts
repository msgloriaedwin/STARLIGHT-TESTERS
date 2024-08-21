import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'test/e2e/**.{js,jsx,ts,tsx}', 
    supportFile: 'test/support/e2e.ts',
    fixturesFolder: 'test/fixtures',
    baseUrl: 'https://staging.remote.bingo',
    reporter: 'cypress-mochawesome-reporter',  // Add the reporter
    reporterOptions: {
      reportDir: 'cypress/reports',            // Directory to save the reports
      overwrite: false,
      html: true,
      json: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
