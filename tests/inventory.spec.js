const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceDemo | Inventory', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC_INV_001 - Products page displays inventory items', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.pageTitle).toHaveText('Products');
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test('TC_INV_002 - User can add a product to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addFirstProductToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('TC_INV_003 - User can sort products by price low to high', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortByPriceLowToHigh();
    const prices = await inventoryPage.getProductPrices();

    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });
});