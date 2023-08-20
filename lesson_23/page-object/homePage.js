const BasePage = require('./basePage')

class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.searchField = page.locator('.fast-search__input');
        this.searchIframe = page.frameLocator('.modal-iframe');
        this.firstSearchLink = this.searchIframe.locator('.result__item.result__item_product').nth(0);
    }

    async searchByItemName(itemName) {
        await this.searchField.fill(itemName);
        await this.firstSearchLink.hover();
        await this.page.keyboard.down('Enter');
    }
}

module.exports = HomePage;