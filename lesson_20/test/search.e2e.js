const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const search = require('../pageobjects/components/search');
const loginPage = require('../pageobjects/loginPage');
const searchResultPage = require('../pageobjects/searchResultPage');
const { ERROR_NOTIFICATION } = require('../helpers/contstants');

describe('Search', function () {
    it('search result should have search keyword', async () => {
        await mainPage.navigate('https://www.onliner.by/');
        await search.startSearch('Iphone');
        await searchResultPage.waitSearchResult();
        expect(await (await $(searchResultPage.searchResultHeader).getText()).toLowerCase()).to.contain('iphone');
    })
});