const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({headless: false, args: [`--window-size=1920,1080`],
        defaultViewport: {
            width:1920,
            height:1080
        }});
    const page = await (await browser.pages())[0];
    // const page1 = await browser.newPage();
    console.log(await browser.pages());
    await page.goto('https://pptr.dev/')
    await page.click('[href="/api/puppeteer.puppeteernode"]')
    await page.hover('[href="/api/puppeteer.browser"]');
    await page.click('[href="/api/puppeteer.browser"]');
    await page.setViewport({width:600, height:400})
    await browser.close()
})();