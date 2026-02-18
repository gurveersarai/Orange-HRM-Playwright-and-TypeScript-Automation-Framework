import { test as setup, expect } from '@playwright/test';
import path from 'path';

setup('authenticate', async ({ page, browserName }) => {
  const authFile = path.join(__dirname, `../.auth/${browserName}.json`);

  await page.goto('/');
  await page.getByPlaceholder('Username').fill(process.env.VALID_USERNAME!);
  await page.getByPlaceholder('Password').fill(process.env.VALID_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(process.env.DASHBOARD_URL!);

  await page.context().storageState({ path: authFile });
});