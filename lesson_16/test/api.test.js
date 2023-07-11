const axios = require('axios');
const validator = require('jsonschema');
const dajokeschema = require('../data/icanhazdadjoke.v1.json');
const fakeAPIBooks = require('../data/fakeAPIBooks.post.v1.json');
const qs = require('qs');

describe(`API tests`, function () {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        });
    })

    test('GET request should be 200', async () => {
        await expect(response.data.status).toEqual(200)
    })

    test(`GET should be valid json schema`, async () => {
        const result = await validator.validate(response.data, dajokeschema);
        await expect(result.valid).toEqual(true);
    })

    test('GET request should be 404', async () => {
        const response = await axios.get('https://icanhazdadjoke.com/j/123', {
            headers: {
                Accept: 'application/json'
            }
        });
        // console.log(response)
        await expect(response.data.status).toEqual(404)
    })

    // test('POST should be status code 200', async () => {
    //     const response = await axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', {
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             'Accept-Encoding': 'application/gzip',
    //             'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
    //             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    //         },
    //         data: qs.stringify({
    //                 'q': 'English is hard, but detectably so'
    //             }
    //         )
    //
    //     });
    //     console.log(response)
    //     await expect(response.data.status).toEqual(200)
    // })

    test(`POST fake api should be 200`, async () => {
        const response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Books", {
            headers: {
                accept: "*/*",
                'Content-Type': 'application/json; v=1.0'
            },
            data: {
                "id": 0,
                "title": "string",
                "description": "string",
                "pageCount": 0,
                "excerpt": "string",
                "publishDate": "2023-07-11T17:06:09.167Z"
            }
        })
        await expect(response.status).toEqual(200)
    })

    test(`POST fake api should be valid schema`, async () => {
        const response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Books", {
            headers: {
                accept: "*/*",
                'Content-Type': 'application/json; v=1.0'
            },
            data: {
                "id": 0,
                "title": "string",
                "description": "string",
                "pageCount": 0,
                "excerpt": "string",
                "publishDate": "2023-07-11T17:06:09.167Z"
            }
        })
        const result = await validator.validate(response.data, fakeAPIBooks);
        await expect(result.valid).toEqual(true);
    })

})