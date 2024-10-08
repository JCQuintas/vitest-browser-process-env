import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vitest.config.ts",
    test: {
      name: "jsdom",
      environment: "jsdom",
    },
  },
  {
    extends: "vitest.config.ts",
    test: {
      name: "browser",
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        // https://playwright.dev
        providerOptions: {},
        headless: true,
        screenshotFailures: false,
      },
    },
  },
]);
