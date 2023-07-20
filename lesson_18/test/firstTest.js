const { Builder, By, until } = require("selenium-webdriver");
const {expect} = require('chai');

(async function() {
    let driver = new Builder().forBrowser('chrome').build();
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

    await driver.quit();
})();