const dajokeschema = require('../data/icanhazdadjoke.v1.json');
const fakeAPIBooks = require('../data/fakeAPIBooks.post.v1.json');
const { sendHttpRequest } = require('../helpers/sendHttpRequest');

describe(`API tests`, function () {
    let response;
    beforeAll(async () => {
        const config = {
            url: 'https://icanhazdadjoke.com/',
            headers: {
                Accept: 'application/json'
            },
        }
        response = await sendHttpRequest(config);
    })

    test('GET request should be 200', async () => {
        await expect(response).toBeValidStatusCode(400)
    })

    test(`GET should be valid json schema`, async () => {
        await expect(response).toBeValidSchema(dajokeschema);
    })

    test('GET request should be 404', async () => {
        const config = {
            url: 'https://icanhazdadjoke.com/j/123',
            headers: {
                Accept: 'application/json'
            }
        }
        const response = await sendHttpRequest(config);
        await expect(response.data).toBeValidStatusCode(404)
    })
})