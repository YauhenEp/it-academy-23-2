const { test, expect } = require('@playwright/test');
const HomePage = require('../page-object/homePage');
let homePage;
test.beforeEach(async ({page}) => {
    homePage = new HomePage(page)
})

test('Onliner', async ({ page }) => {
    await homePage.navigate('https://www.onliner.by/');
    await homePage.searchByItemName('iphone');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Apple iPhone 7 Plus 32GB Восстановленный by Breezy, грейд C (золотистый) смартфон купить в Минске/);
});