const BasePage = require('./basePage');

class WdioHomePage extends BasePage {
    constructor(page, context) {
        super(page, context)
        this.page = page
        this.context = context
        this.githubLink = page.locator('.header-github-link');
    }

    async goToGitHubPage() {
        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'),
            this.githubLink.click()
        ]);
        await newPage.waitForLoadState();
        return this.context.pages()[1];
    }

    async goToGitHubPage1() {
        await this.githubLink.click();
        const newPage = await this.context.waitForEvent('page');
        await newPage.waitForLoadState();
        return this.context.pages()[1];
    }
}

module.exports = WdioHomePage;