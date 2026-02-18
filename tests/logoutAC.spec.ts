import { expect, Page } from '@playwright/test';
import { authenticatedTest as test } from '../fixture/site';
import {getEnv} from '../helper/env';

test.beforeEach(async ({ page}) => {
    await page.goto('/');
})

test('user logs out successfully', async ({ page, poManager }) => {
    await poManager.commonElements.userDropdown.click();
    await poManager.commonElements.loginButton.click();
    await expect(page).toHaveURL(getEnv("BASE_URL"));
});

test('user fails to navigate to dashboard after logout via back', async ({ page, poManager }) => {
    await poManager.commonElements.userDropdown.click();
    await poManager.commonElements.loginButton.click();
    await page.goBack({ waitUntil: 'networkidle' });
    const url = page.url();
    expect(url === getEnv('BASE_URL') || url === 'about:blank').toBeTruthy();
});

test(('user fails to navigate directly to dashboard after logout'), async ({ page, poManager }) => {
    await poManager.commonElements.userDropdown.click();
    await poManager.commonElements.loginButton.click();
    await page.goto(getEnv("DASHBOARD_URL"));
    await expect(page).toHaveURL(getEnv("BASE_URL"));
});