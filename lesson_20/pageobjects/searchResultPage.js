const BasePage = require('./basePage');
const baseElements = require('../helpers/baseElements')

class SearchResultPage extends BasePage {
    constructor() {
        super();
        this.searchResultHeader = '.catalog-masthead__title.js-nav-header'
    }

    async waitSearchResult() {
        await (await baseElements.wrapper(this.searchResultHeader)).waitForDisplayed();
    }
}

module.exports = new SearchResultPage();