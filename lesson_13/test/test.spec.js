const {greet, sleep} = require('../testing');
const {expect} = require('chai');

// TODO this test is not working now, need to investigate
describe.skip(`testing test suite`, function () {
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
        await sleep(1000)
        const result = await greet();
        expect(typeof result).to.equal('string')
    });

    it(`should return appriate result`, async () => {
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