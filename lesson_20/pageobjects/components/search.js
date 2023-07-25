const baseElements = require('../../helpers/baseElements');
const { Key } = require('webdriverio');

class Search {
    constructor() {
        this.searchField = '.fast-search__input';
        this.searchResultsTitle = '.result__item.result__item_product .product__title > a'
    }

    async startSearch(searchValue) {
        await (await baseElements.wrapper(this.searchField)).waitForDisplayed();
        await (await baseElements.wrapper(this.searchField)).setValue(searchValue);

        await (await (await baseElements.wrapperElements(this.searchResultsTitle))[0]).waitForDisplayed();
        await (await (await baseElements.wrapperElements(this.searchResultsTitle))[0]).moveTo();
        // await browser.pause(3000)
        await browser.keys([Key.Enter]);
    }
}

module.exports = new Search();