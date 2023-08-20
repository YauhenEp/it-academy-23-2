describe('alic', function () {
    it('youtube', () => {
        cy.visit('https://aliexpress.com/');
        cy.get('.btn-accept').click();
        cy.get('._3q2y1 > a').click();
        cy.origin('https://twitter.com/', () => {

        })
    })
});