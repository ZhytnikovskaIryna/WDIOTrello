@smoke
Feature: working with lists inside boards

  Scenario: Add list to existent board
    Given I am logged at boards page
    When I create new board with <Board name> name from the boards page
    And I set <List name> as a name for new list
    And I confirm list creation
    Then New list with <List name> is added
    And widget for adding new list is displayed

    Examples: 
      | Board name   | List name |
      | BoardforList | MyNewlist |
