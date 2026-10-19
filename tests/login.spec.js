const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceDemo | Login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('@smoke TC_LOGIN_001 - Login succeeds with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('TC_LOGIN_002 - Invalid password displays an error', async () => {
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

  test('TC_LOGIN_003 - Empty username is rejected', async () => {
    await loginPage.login('', 'secret_sauce');

    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('TC_LOGIN_004 - Empty password is rejected', async () => {
    await loginPage.login('standard_user', '');

    await expect(loginPage.errorMessage).toContainText('Password is required');
  });
});