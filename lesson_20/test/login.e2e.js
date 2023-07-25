const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const loginPage = require('../pageobjects/loginPage');
const { ERROR_NOTIFICATION } = require('../helpers/contstants');

describe.skip('Login', function () {
    it('should be error notification with wrong password', async () => {
        await mainPage.navigate('https://www.onliner.by/');
        await header.clickEnterButton();
        await loginPage.login('firsname', 'password');
        expect(await loginPage.errorNotification.getText()).to.equal(ERROR_NOTIFICATION);
    })
});