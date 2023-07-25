const BasePage = require('./basePage')

class LoginPage extends BasePage {
    get userNameField() {
        return $(`[placeholder="Ник или e-mail"]`);
    }

    get passwordField() {
        return $(`[placeholder="Пароль"]`);
    }

    get enterButton() {
        return $(`.auth-button.auth-button_primary`);
    }

    get errorNotification() {
        return $('.auth-form__description_error')
    }

    async clickEnterButton() {
        await this.enterButton.waitForClickable();
        await this.enterButton.click();
    }

    async login(userName, password) {
        await this.userNameField.waitForDisplayed();
        await this.userNameField.setValue(userName);
        await this.passwordField.setValue(password);
        await this.clickEnterButton();
    }

}

module.exports = new LoginPage();