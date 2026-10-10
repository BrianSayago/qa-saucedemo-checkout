import { test, expect } from '@playwright/test';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce'; // publicada en la página de login del demo

test.describe('Login', () => {
  test('CP-01 login exitoso con credenciales válidas', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });
});