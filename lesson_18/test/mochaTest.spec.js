const {Builder, By, until} = require("selenium-webdriver");
const {expect} = require("chai");
describe('Onliner login tests', function () {
    let driver;
    before(async () => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1980, height: 1260})
    })

    after(async() => {
        await driver.quit();
    })

    it('should be error notification when login and password incorrect', async () => {
        await driver.get('https://www.onliner.by/');
        const enterButton = await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
        await enterButton.click();
        const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'));
        await loginField.sendKeys('Name or login');
        const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'));
        await passwordField.sendKeys('password');
        const loginButton = await driver.findElement(By.css('.auth-button_primary'));
        await loginButton.click();
        const errorMessage = await driver.wait(until.elementLocated(By.css('.auth-form__description.auth-form__description_error')), 10000);
        expect(await errorMessage.getText()).to.equal('Неверный логин или пароль');
    });

    //TODO test does not work
    it('', async () => {
        await driver.get('https://www.onliner.by/');
        const topNavLinks = await driver.findElements(By.css('.b-main-navigation__link'));
        await topNavLinks[0].click();
        const beautyAndSportTab = await driver.findElement(By.css('.catalog-navigation-classifier [data-id="7"]'));
        await beautyAndSportTab.click();
        const hobbyItem = await driver.wait(until.elementLocated(By.xpath('//div[text()=" Хобби "]/..')), 10000);
        await driver.actions().move(hobbyItem).perform();
        const boardGamesButton = await driver.wait(until.elementLocated(By.css('.catalog-navigation-list__dropdown-item[href$="boardgame"]')[0]), 10000);
        await boardGamesButton.click();
        // const errorMessage = await driver.wait(until.elementLocated(By.css('.auth-form__description.auth-form__description_error')), 10000);
        // expect(await errorMessage.getText()).to.equal('Неверный логин или пароль');
        await browser.sleep(5000)
    })
});