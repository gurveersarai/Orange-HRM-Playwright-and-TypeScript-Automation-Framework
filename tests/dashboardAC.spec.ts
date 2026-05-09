import { expect, Page } from '@playwright/test';
import { test } from '../fixture/site';
import {getEnv} from '../helper/env';
import dotenv from 'dotenv';
import loginFunction from '../helper/loginFunction';
import poManager from '../pages/poManager';
dotenv.config();

test.beforeEach(async ({ page, poManager}) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await loginFunction(poManager);
});

test('dashboard displays 7 widgets', async ({ page, poManager }) => {
    await poManager.dashboardPage.dashboardWidgets.first().waitFor({ state: 'visible' });
    const { count, names } = await poManager.dashboardPage.dashboardWidgetsCountandNames();
    expect(count).toBe(7);
    expect(names).toEqual([
        "Time at Work",
        "My Actions",
        "Quick Launch",
        "Buzz Latest Posts",
        "Employees on Leave Today",
        "Employee Distribution by Sub Unit",
        "Employee Distribution by Location"
    ]);

});

test('dashboard contains navigation panel', async ({ page, poManager }) => {
    await expect(poManager.dashboardPage.navigationPanel).toBeVisible();
});

test('dashboard contains client logo', async ({ page, poManager }) => {
    await expect(poManager.dashboardPage.clientLogo).toBeVisible();
});

test('dashboard can be collapsed and expanded', async ({ page, poManager }) => {
    await expect(poManager.dashboardPage.mainMenuButton).toBeVisible();
    await poManager.dashboardPage.mainMenuButton.click();
    await expect(poManager.dashboardPage.navigationPanel).toContainClass('toggled');
    await poManager.dashboardPage.mainMenuButton.click();
    await expect(poManager.dashboardPage.navigationPanel).not.toContainClass('toggled');
});