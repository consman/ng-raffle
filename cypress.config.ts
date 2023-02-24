import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'myxx15',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://127.0.0.1:4200",
    projectId:"myxx15"
  },
});
