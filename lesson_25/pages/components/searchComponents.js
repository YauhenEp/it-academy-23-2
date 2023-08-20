class SearchComponent {
    get searchField() {
        return cy.get('.nav-search-field .nav-input.nav-progressive-attribute');
    }

    get searchButton() {
        return cy.get('#nav-search-submit-button');
    }

    searchByName(searchText) {
        this.searchField.type(searchText);
        this.searchButton.click();
    }
}

module.exports = new SearchComponent();