import { expect, Page } from '@playwright/test';
import { authenticatedTest as test } from '../fixture/site';
import {getEnv} from '../helper/env';
import logoutFunction from '../helper/logoutFunction';

test.beforeEach(async ({ page}) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
})

test('user logs out successfully', async ({ page, poManager }) => {
    await logoutFunction(poManager, page);
});

test('user fails to navigate to dashboard after logout via back', async ({ page, poManager }) => {
    await logoutFunction(poManager, page);
    await page.goBack({ waitUntil: 'networkidle' });
    const url = page.url();
    await expect(url === getEnv('BASE_URL') || url === 'about:blank').toBeTruthy();
});

test(('user fails to navigate directly to dashboard after logout'), async ({ page, poManager }) => {
    await logoutFunction(poManager, page);
    await page.goto(getEnv("DASHBOARD_URL"));
    await expect(page).toHaveURL(getEnv("BASE_URL"));
});