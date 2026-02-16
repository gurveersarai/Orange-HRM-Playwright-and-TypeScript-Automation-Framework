import {test as base, Page} from "@playwright/test";
import poManager from "../pages/poManager";

type MyFixtures = {
    poManager: poManager;
};

export const test = base.extend<MyFixtures> ({
    poManager: async ({page}, use) => {
        await use(new poManager(page));
        console.log("Fixture Completed")
    }
})