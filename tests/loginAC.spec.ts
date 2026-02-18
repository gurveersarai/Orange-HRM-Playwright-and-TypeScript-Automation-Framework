import { expect, Page } from '@playwright/test';
import { test } from '../fixture/site';
import { beforeEach } from 'node:test';
import {getEnv} from '../helper/env';
import dotenv from 'dotenv';
dotenv.config();

test.beforeEach(async ({ page}) => {
    await page.goto('/');
})

test('user logs in successfully', async ({ page, poManager }) => {
    await poManager.loginPage.login(getEnv("VALID_USERNAME"), getEnv("VALID_PASSWORD"));
    await expect(page).toHaveURL(getEnv("DASHBOARD_URL"));
});

test('user fails to log in with invalid credentials', async ({ poManager }) => {
  await poManager.loginPage.login(getEnv("INVALID_USERNAME"), getEnv("INVALID_PASSWORD"));
  const errorMessage = await poManager.loginPage.errorMessage.allInnerTexts();
  await expect(errorMessage).toEqual(["Invalid credentials"]);
});

test('user fails to log in with empty fields', async ({ poManager }) => {
    await poManager.loginPage.login('', '');    
    const errorMessage = await poManager.loginPage.fieldErrorMessage.allInnerTexts();
    await expect(errorMessage).toEqual(["Required", "Required"]);
});

test('user fails to log in with empty username', async ({ poManager }) => {
    await poManager.loginPage.login('', getEnv("VALID_PASSWORD"));    
    const errorMessage = await poManager.loginPage.fieldErrorMessage.allInnerTexts();
    await expect(errorMessage).toEqual(["Required"]);
});

test('user fails to log in with empty password', async ({ poManager }) => {
    await poManager.loginPage.login(getEnv("VALID_USERNAME"), '');    
    const errorMessage = await poManager.loginPage.fieldErrorMessage.allInnerTexts();
    await expect(errorMessage).toEqual(["Required"]);
});

