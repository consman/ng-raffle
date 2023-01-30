import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'myxx15',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://localhost:4200",
    projectId:"myxx15"
  },
});
