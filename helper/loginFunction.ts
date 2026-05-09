import {expect, Page} from "@playwright/test";
import {getEnv} from "./env";
import poManager from "../pages/poManager";

export default async function loginFunction(poManager: poManager) {
    await Promise.all([
        poManager.loginPage.page.waitForURL(/dashboard/),
        poManager.loginPage.login(getEnv("VALID_USERNAME"), getEnv("VALID_PASSWORD"))
    ]);
    await expect(poManager.page).toHaveURL(getEnv("DASHBOARD_URL"));
}