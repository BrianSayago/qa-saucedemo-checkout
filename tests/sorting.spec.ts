import { test, expect } from '@playwright/test';

test('CP-09 Ordenar por precio de menor a mayor', async ({ page }) => {
  // Ir a la página de login
  await page.goto('https://www.saucedemo.com');

  // Iniciar sesión con standard_user
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verificar que se haya redirigido al inventario
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  expect(await page.title()).toBe('Swag Labs');

  // Seleccionar "Price (low to high)" del selector de orden
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  // Obtener los precios mostrados
  const priceElements = await page.locator('[data-test="inventory-item-price"]').all();
  
  // Verificar que haya al menos 2 precios
  expect(priceElements.length).toBeGreaterThanOrEqual(2);

  // Extraer los valores numéricos de los precios
  const prices: number[] = [];
  for (const element of priceElements) {
    const text = await element.textContent();
    if (text) {
      // Eliminar el signo $ y convertir a número
      const price = parseFloat(text.replace('$', ''));
      prices.push(price);
    }
  }

  // Verificar que cada precio sea menor o igual al siguiente
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});