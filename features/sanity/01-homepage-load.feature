Feature: Homepage Load Verification

  @sanity
  Scenario: Verify homepage loads successfully
    Given user has homepage opened
    Then user should see hero heading
    And user should see latest listings section

  @sanity
  Scenario: Verify essential homepage elements
    Given user has homepage opened
    Then user should see contact phone number
    And user should see contact email
    And user should see copyright information
