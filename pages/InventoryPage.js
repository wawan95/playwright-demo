class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productPrices = page.locator('[data-test="inventory-item-price"]');
    this.firstAddToCartButton = page
      .locator('[data-test^="add-to-cart"]')
      .first();
  }

  async addFirstProductToCart() {
    await this.firstAddToCartButton.click();
  }

  async sortByPriceLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async getProductPrices() {
    const texts = await this.productPrices.allTextContents();
    return texts.map((text) => Number(text.replace('$', '').trim()));
  }
}

module.exports = { InventoryPage };