const {expect} = require('chai')

describe('new test', function () {
    it('', async () => {
        await browser.url('https://www.protractortest.org/');
        await $('#drop1').click();
        await $('.dropdown.open .dropdown-menu a[href="#/tutorial"]').waitForDisplayed();
        await $('.dropdown.open .dropdown-menu a[href="#/tutorial"]').click();
        await $('a[href="#/toc"]').waitForExist();
        await $('a[href="#/toc"]').scrollIntoView();
        await $('a[href="#/toc"]').click();
        expect(await $('#table-of-contents').getText()).to.equal('Table of Contents');
    })
});