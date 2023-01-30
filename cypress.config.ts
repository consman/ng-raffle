import { defineConfig } from "cypress";

module.exports = {
  projectId: "ng-raffle",
  // The rest of the Cypress config options go here...
}
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
