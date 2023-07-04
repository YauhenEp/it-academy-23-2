describe('Jest first test', function() {
    it('first test', async () => {
        await expect(true).toEqual(true)
    })

    test('second test', async () => {
        await expect(true).toEqual(false);
    })

    test.each([
        [1, 2, 3],
        [5, 6, 11],
        [12, 17, 29]
    ])('%i plus %i equal %i', async (firstNumber, secondNumber, result) => {
        await expect(firstNumber + secondNumber).toEqual(result);
    })
})