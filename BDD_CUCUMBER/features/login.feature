Feature: Login to Trello

  @smoke
  Scenario: Login with valid credentials for your free account
    Given I am  at  Trello home page
    When I enter valid email
    When Click Submit credentials button
    When I enter <isValid> password
    When Click Submit credentials button
    Then I see my name in account icon popup

    Examples: 
      | isValid |
      | true    |

  @regression
  Scenario: Login with  existent account and invalid password
    Given I am  at  Trello home page
    When I enter valid email
    When Click Submit credentials button
    When I enter <isValid> password
    When Click Submit credentials button
    Then I see error message regarding incorrect email or password

    Examples: 
      | isValid |
      | false   |
