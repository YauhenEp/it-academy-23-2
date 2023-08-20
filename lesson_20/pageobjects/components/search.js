const baseElements = require('../../helpers/baseElements');
const { Key } = require('webdriverio');

class Search {
    constructor() {
        this.searchField = '.fast-search__input';
        this.searchResultsTitle = '.result__item.result__item_product';
        this.searchFrame = 'iframe.modal-iframe';
    }

    async startSearch(searchValue) {
        await (await baseElements.wrapper(this.searchField)).waitForDisplayed();
        await (await baseElements.wrapper(this.searchField)).setValue(searchValue);
        await this.switchToSearchFrame();
        await $$(this.searchResultsTitle)[0].waitForDisplayed();
        await $$(this.searchResultsTitle)[0].moveTo();
        await browser.keys(Key.Enter);
    }

    async switchToSearchFrame() {
        await browser.pause(1500)
        await $(this.searchFrame).waitForExist();
        await $(this.searchFrame).waitForDisplayed();
        const iframe = await $(this.searchFrame)
        await browser.switchToFrame(iframe)
    }
}

module.exports = new Search();