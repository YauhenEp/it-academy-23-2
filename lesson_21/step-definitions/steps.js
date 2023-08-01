const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I navigate on (.*) page$/, async function (url) {
    const world = this;
    world.newParameter = 'NEW PARAMETER';
    console.log('WORLD --- ', world);
    await browser.url(url)
});

When(/^I click (.*) element$/, async (selector) => {
    const world = this;
    console.log('WORLD second step --- ', world);
    await $(selector).waitForClickable();
    await $(selector).click()
});

When('I fill field {locator} with text {string}', async (selector, searchText) => {
    await $(selector).waitForClickable();
    await $(selector).setValue(searchText);
})

Then(/^I expect (.*) element should (contain|equal) text (.*)$/, async (element, typeOfValidation, text) => {
    await $(element).waitForDisplayed()
    if(typeOfValidation === 'equal') {
        await expect(await (await $(element).getText()).toLowerCase()).toEqual(text.toLowerCase());
    } else {
        await expect(await (await $(element).getText()).toLowerCase()).toContain(text.toLowerCase());
    }
});

