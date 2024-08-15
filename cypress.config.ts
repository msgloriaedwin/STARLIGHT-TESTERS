import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "test/e2e/signup.{js,jsx,ts,tsx}",
    supportFile: "test/support/e2e.ts", 
    fixturesFolder: "test/fixtures",
    baseUrl:'https://staging.remote.bingo',

    setupNodeEvents(on, config) {
    },


  },
});


// https://github.com/hngprojects/hng_boilerplate_nextjs.git