const { cases } = require('jasmine-parameterized');

describe('Jasmine tests', function () {
    it('first test', async () => {
        await expect(5 + 7).toEqual(12)
    })

    it('second test', async () => {
        await expect(true).toEqual(true)
    })

    it('third test', async () => {
        await expect(false).toEqual(true)
    })

    cases(
        [
            [1, 7, 8],
            [9, 11, 20],
            [15, 17, 32]
        ]
    ).it(`adding`, async ([a, b, sum]) => {
        await expect(a + b).toEqual(sum);
    })
})