Feature: About Page Comprehensive Testing

  @regression
  Scenario: Verify about page heading
    Given user has about page opened
    Then user should see about page heading

  @regression
  Scenario: Verify about page tagline
    Given user has about page opened
    Then user should see tagline

  @regression
  Scenario: Verify seller of the month section
    Given user has about page opened
    Then user should see seller of the month section

  @regression
  Scenario: Verify seller name is displayed
    Given user has about page opened
    Then user should see seller name

  @regression
  Scenario: Verify our team section
    Given user has about page opened
    Then user should see our team section

  @regression
  Scenario: Verify team members are displayed
    Given user has about page opened
    Then user should see team members

  @regression
  Scenario: Verify at least three team members
    Given user has about page opened
    Then user should see at least 3 team members

  @regression
  Scenario: Verify about page loads successfully
    Given user navigates to about page
    Then user should see about page heading

  @regression
  Scenario: Verify all about page sections
    Given user has about page opened
    Then user should see about page heading
    And user should see tagline
    And user should see our team section

  @regression
  Scenario: Verify seller of the month feature
    Given user has about page opened
    Then user should see seller of the month section
    And user should see seller name
