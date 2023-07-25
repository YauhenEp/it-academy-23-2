class Header {
    get enterButton() {
        return $('.auth-bar__item.auth-bar__item--text');
    }

    async clickEnterButton() {
        await this.enterButton.waitForClickable();
        await this.enterButton.click();
    }
}

module.exports = new Header();