import { test, expect } from '@playwright/test';

test('CP-04 Agregar 2 productos, el contador del carrito marca 2', async ({ page }) => {
  // Ir a la página de login
  await page.goto('https://www.saucedemo.com');

  // Login exitoso con standard_user
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Esperar a que se cargue el inventario
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Agregar Sauce Labs Backpack al carrito
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Agregar Sauce Labs Bike Light al carrito
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Verificar contador del carrito
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  await expect(cartBadge).toHaveText('2');
});