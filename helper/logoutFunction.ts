import { expect, Page } from "@playwright/test";
import { getEnv } from "./env";
import poManager from "../pages/poManager";


export default async function logoutFunction(poManager: poManager, page: Page) {
    await page.waitForURL(getEnv("DASHBOARD_URL"));
    await poManager.commonElements.userDropdown.click();
        await expect(poManager.commonElements.logoutButton).toBeVisible();
        await Promise.all([
            page.waitForURL(getEnv("BASE_URL")),
            poManager.commonElements.logoutButton.click()
        ])
        await expect(page).toHaveURL(getEnv("BASE_URL"));
    }