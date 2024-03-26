@smoke
Feature: working with cards inside lists

  Scenario: Add Card to existent list
    Given I’m logged in and currently at boards page
    When I create new board with <Board name> name from the boards page
    And I set <List name> as a name for new list
    And I confirm list creation
    When I create card with <Card Name>
    Then card with <Card Name> is present

    Examples: 
      | Board name   | List name   | Card Name |
      | BoardForCard | ListForCard | newCard1  |
