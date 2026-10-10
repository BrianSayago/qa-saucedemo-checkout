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

test('CP-05 El carrito muestra los ítems', async ({ page }) => {
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

  // Ir al carrito
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Verificar que se muestren los ítems en el carrito
  const backpackItem = page.locator('[data-test="inventory-item-name"]').nth(0);
  await expect(backpackItem).toHaveText('Sauce Labs Backpack');

  const bikeLightItem = page.locator('[data-test="inventory-item-name"]').nth(1);
  await expect(bikeLightItem).toHaveText('Sauce Labs Bike Light');
});

test('CP-06 Quitar un producto del carrito', async ({ page }) => {
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

  // Ir al carrito
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Quitar Sauce Labs Bike Light del carrito
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

  // Verificar que el carrito solo contiene Sauce Labs Backpack
  const cartItems = page.locator('[data-test="inventory-item-name"]');
  await expect(cartItems).toHaveCount(1);
  await expect(cartItems.nth(0)).toHaveText('Sauce Labs Backpack');

  // Verificar que el contador del carrito marca 1
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  await expect(cartBadge).toHaveText('1');
});