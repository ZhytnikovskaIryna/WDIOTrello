@regression
Feature: Adding boards from different pages

  Scenario: Add new board from workspace page
    Given I am logged at boards page
    And I open workspace page
    When I choose to  create new board from the workspace
    And I set <Board from workspace> board name for workspace board
    And I confirm board creation from workspace
    Then <Board from workspace> board is displayed at Boards page

    Examples: 
      | Board from workspace |
      | BoardFromWorkspace   |

  Scenario: Add new board from my main menu when you are at boards page
    Given I am logged at boards page
    When I choose to  create new board from the Main menu
    And I set <Board from menu> board name for Main menu board
    And I confirm board creation from Main menu
    Then <Board from menu> board is displayed at Boards page

    Examples: 
      | Board from menu |
      | BoardFromMenu   |
