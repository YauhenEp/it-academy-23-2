const BasePage = require('./basePage');

class HomePage extends BasePage {
    get logo() {
        return cy.get('#nav-bb-logo, #nav-logo-sprites');
    }

    clickLogo() {
        this.logo.click();
    }
}

module.exports = new HomePage();