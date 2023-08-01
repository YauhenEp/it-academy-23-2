const MainPage = require('./mainPage')
const SearchResultPage = require('./searchResultPage')

class PageFactory {
    static 'Main Page' = new MainPage();
    static 'Search Result Page' = new SearchResultPage();
}

module.exports = PageFactory;