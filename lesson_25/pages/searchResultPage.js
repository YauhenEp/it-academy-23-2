const BasePage = require('./basePage');

class SearchResultPage extends BasePage {
    get searchResultSection() {
        return cy.get('.a-color-state');
    }
}

module.exports = new SearchResultPage();