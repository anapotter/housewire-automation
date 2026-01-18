Feature: Navigation Flows Testing

  @regression
  Scenario: Verify navigation from homepage to listings
    Given user has homepage opened
    When user clicks on first property more info link
    Then user should see property title

  @regression
  Scenario: Verify navigation from listings to property details
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title

  @regression
  Scenario: Verify navigation from property details back to listings
    Given user has listings page opened
    When user clicks on property at index 0
    And user clicks back to listings
    Then user should see listings page heading

  @regression
  Scenario: Verify navigation from listings to homepage
    Given user has listings page opened
    When user clicks home link
    Then user should see hero heading

  @regression
  Scenario: Verify complete user journey - browse and view property
    Given user has homepage opened
    When user clicks on first property more info link
    Then user should see property title
    And user should see property asking price

  @regression
  Scenario: Verify navigation from homepage to about page
    Given user has homepage opened
    When user navigates to about page
    Then user should see about page heading

  @regression
  Scenario: Verify navigation from about page to homepage
    Given user has about page opened
    When user navigates to homepage
    Then user should see hero heading

  @regression
  Scenario: Verify multiple property browsing
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title
    When user clicks back to listings
    Then user should see listings page heading

  @regression
  Scenario: Verify listings page to property details navigation
    Given user navigates to listings page
    When user clicks on property at index 0
    Then user should see property title

  @regression
  Scenario: Verify homepage loads after navigation
    Given user navigates to listings page
    When user navigates to homepage
    Then user should see hero heading
