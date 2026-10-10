import { test, expect } from '@playwright/test';

const PASSWORD = 'secret_sauce'; // publicada en la página de login del demo

test.describe('Login', () => {
  test('CP-01 Login válido con standard_user', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('CP-02 locked_out_user ve error de usuario bloqueado', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });
});