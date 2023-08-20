const homePage = require('../../pages/homePage');
const searchResultPage = require('../../pages/searchResultPage');
const searchComponent = require('../../pages/components/searchComponents')
const footer = require('../../pages/components/footer')

describe('Amazon', function () {
    it('search', () => {
        homePage.navigate('https://www.amazon.com/')
        searchComponent.searchByName('iphone')
        cy.validateText(searchResultPage.searchResultSection, '"iphone"')
    })

    it.only('youtube', () => {
        homePage.navigate('https://www.amazon.com/');
        homePage.clickLogo();
        footer.goToHelpPage();
    })
});