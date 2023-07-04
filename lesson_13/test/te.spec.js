const {greet, sleep} = require('../testing');
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
        await sleep(2000)
        const result = await greet();
        expect(typeof result).to.equal('string')
    });

    it.skip(`should return appriate result`, async () => {
        console.log('Second test');
        const result = await greet('Hi', 'Dasha', 'Petrova');
        expect(result).to.equal(`H! Dasha Petrova! How are you?`);
    });

    it(`should contain name and last name`, async () => {
        console.log('Third test');
        const result = await greet('Hi', 'Dasha', 'Petrova');
        expect(result).to.contain(`Dasha Petrova!`);
    });
})