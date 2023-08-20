const homePage = require('../../pages/homePage');
const searchResultPage = require('../../pages/searchResultPage');
const searchComponent = require('../../pages/components/searchComponents')

describe('Amazon', function () {
    it('intercept', () => {
        cy.intercept('HEAD', 'm.media-amazon.com/images/I', (req) => {
            cy.log(req)
        }).as('homePAgeRequest')
        homePage.navigate('https://www.amazon.com/')
        cy.wait('@homePAgeRequest', {timeout: 10000, requestTimeout: 10000})
            // .its('response.body').should('include', 'id')
    })
});