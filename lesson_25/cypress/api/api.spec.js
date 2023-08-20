const { expect } = require('chai');

describe('API', () => {
    it('GET validate request', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('POST validate request', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.equal(201)
        })
    })
})