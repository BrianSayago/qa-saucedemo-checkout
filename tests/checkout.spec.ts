import { test, expect } from '@playwright/test';

test('CP-07 Checkout feliz hasta "Thank you for your order!"', async ({ page }) => {
  // Ir a la página de login
  await page.goto('https://www.saucedemo.com');

  // Login exitoso con standard_user
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verificar que se haya redirigido al inventario
  expect(page.url()).toContain('/inventory.html');
  expect(await page.title()).toBe('Swag Labs');

  // Ir al catálogo y agregar productos al carrito
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Esperar a que los ítems se agreguen al carrito
  await page.waitForTimeout(500);

  // Ir al carrito
  await page.locator('[data-test="shopping-cart-badge"]').click();
  
  // Esperar a que la página del carrito cargue completamente
  await page.waitForSelector('.cart_item', { timeout: 5000 });

  // Verificar que los ítems se muestren en el carrito
  const cartItems = await page.locator('.cart_item').all();
  expect(cartItems.length).toBe(2);

  // Iniciar checkout
  await page.locator('[data-test="checkout"]').click();

  // Completar datos de checkout
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');

  // Continuar con el checkout
  await page.locator('[data-test="continue"]').click();

  // Finalizar compra
  await page.locator('[data-test="finish"]').click();

  // Verificar el mensaje de finalización
  expect(await page.locator('[data-test="complete-header"]').textContent()).toBe('Thank you for your order!');
});