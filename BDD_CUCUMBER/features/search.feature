@smoke
Feature: Search in Trello

  Scenario: Search for existent board at my boars page
    Given I am logged at boards page
    When I type Board name in Search field
    Then I see the Board in Search results
    And I can open the Board from search results
