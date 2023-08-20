class Footer {
    get helpButton() {
        return cy.get(':nth-child(7) > ul > .nav_last > .nav_a');
    }

    goToHelpPage() {
        this.helpButton.scrollIntoView();
        this.helpButton.click()
    }
}

module.exports = new Footer();