const { test, expect } = require('@playwright/test');
const WdioHomePage = require('../page-object/wdioHomePage');
let wdioHomePage;
test.beforeEach(async ({page, context}) => {
    wdioHomePage = new WdioHomePage(page, context)
})

test('WebdribverIO', async ({ page }) => {
    await wdioHomePage.navigate('https://webdriver.io/');
    const gitHubPage = await wdioHomePage.goToGitHubPage1();
    await expect(gitHubPage).toHaveTitle('GitHub - webdriverio/webdriverio: Next-gen browser and mobile automation test framework for Node.js');
});