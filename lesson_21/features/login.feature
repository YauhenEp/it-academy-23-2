Feature: The Internet Guinea Pig Website

  Background:
    Given I navigate on https://www.epam.com/ page

  Scenario: Check EPAM website
    When I click .header__content > .cta-button-ui.cta-button-ui-23.header__control element
    Then I expect .museo-sans-light element should equal text Contact Us

    @only
  Scenario: Search something
    When I click .search-icon.dark-iconheader-search__search-icon element
    And I fill field "Main Page > Search Field" with text "Blockchain"
    And I click .custom-button.button-text element
    And I expect .search-results__counter element should contain text Blockchain
