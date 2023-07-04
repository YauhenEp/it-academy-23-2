const {greet} = require('../testing');
const {expect} = require('chai');

describe(`testing test suite`, function () {
    before(async() => {
        console.log('I am running BEFORE all tests');
    })

    after(() => {
        console.log('I am running AFTER all tests');
    })

    beforeEach(() => {
        console.log('I am running BEFORE EACH tests');
    })

    afterEach(() => {
        console.log('I am running AFTER EACH tests');
    })

    it(`should return string`, async () => {
        console.log('First test');
        const result = await greet();
        expect(typeof result).to.equal('string')
    });

    it(`should contain name and last name`, async () => {
        console.log('Third test');
        const result = await greet('Hi', 'Dasha', 'Petrova');
        expect(result).to.contain(`Dasha Petrova!`);
    });

    [
        {a: 1, b: 2, result: 3},
        {a: 5, b: 9, result: 14},
        {a: 8, b: 17, result: 25},
    ].forEach((num) => {
        it(`${num.a} + ${num.b} equal ${num.result}`, async () => {
            expect(num.a + num.b).to.equal(num.result)
        })
    })
})