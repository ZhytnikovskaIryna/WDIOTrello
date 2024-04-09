@cleanAfter @smoke
Feature: Manage profile settings

  Scenario: Edit bio in profile name
    Given I am logged at boards page
    When I open ‘Profile and visibility’ tab for Profile page
    When I set new bio
    And I Save changes in ‘Profile and visibility’ tab
    Then changes are saved in ‘Profile and visibility’ tab
