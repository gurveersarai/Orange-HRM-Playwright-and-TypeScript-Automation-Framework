import {test as base, Page} from "@playwright/test";
import poManager from "../pages/poManager";
import path from "path";

type MyFixtures = {
    poManager: poManager;
};

export const test = base.extend<MyFixtures> ({
    poManager: async ({page}, use) => {
        await use(new poManager(page));
        console.log("Fixture Completed")
    }
});
export const authenticatedTest = test.extend({
  storageState: async ({ browserName }, use) => {
    const authFile = browserName === 'webkit'
      ? path.join(__dirname, '../.auth/webkit.json')
      : path.join(__dirname, '../.auth/chromium.json');
    await use(authFile);
  }
});