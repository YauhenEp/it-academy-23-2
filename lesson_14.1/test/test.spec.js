const {expect} = require('chai')

describe('JAsmine tests', function () {
    it('first test', async () => {
        await expect(4 + 7).to.equal(11)
    })

    it('second test', async () => {
        await expect(true).to.equal(true)
    })

    it('third test', async () => {
        await expect(false).to.equal(true)
    })
})