Feature: Homepage Comprehensive Testing

  @regression
  Scenario: Verify all homepage sections are visible
    Given user has homepage opened
    Then user should see hero heading
    And user should see latest listings section
    And user should see consulting services section
    And user should see property management section
    And user should see renting and selling section

  @regression
  Scenario: Verify homepage displays properties
    Given user has homepage opened
    Then user should see at least 3 properties

  @regression
  Scenario: Verify homepage contact information
    Given user has homepage opened
    Then user should see contact phone number
    And user should see contact email
    And user should see copyright information

  @regression
  Scenario: Verify search form is present
    Given user has homepage opened
    Then user should see search form

  @regression
  Scenario: Verify navigation from homepage to property details
    Given user has homepage opened
    When user clicks on first property more info link
    Then user should see property title

  @regression
  Scenario: Verify homepage hero section
    Given user has homepage opened
    Then user should see hero heading

  @regression
  Scenario: Verify homepage footer elements
    Given user has homepage opened
    Then user should see contact phone number
    And user should see contact email

  @regression
  Scenario: Verify multiple property cards on homepage
    Given user has homepage opened
    Then user should see at least 1 properties

  @regression
  Scenario: Verify homepage services sections
    Given user has homepage opened
    Then user should see consulting services section
    And user should see property management section

  @regression
  Scenario: Verify homepage loads without errors
    Given user navigates to homepage
    Then user should see hero heading
