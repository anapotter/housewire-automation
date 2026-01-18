Feature: Listings Page Comprehensive Testing

  @regression
  Scenario: Verify listings page heading
    Given user has listings page opened
    Then user should see listings page heading

  @regression
  Scenario: Verify multiple properties are displayed
    Given user has listings page opened
    Then user should see at least 5 properties listed

  @regression
  Scenario: Verify property prices are displayed
    Given user has listings page opened
    Then user should see property prices

  @regression
  Scenario: Verify property addresses are displayed
    Given user has listings page opened
    Then user should see property addresses

  @regression
  Scenario: Verify navigation to property details from listings
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title

  @regression
  Scenario: Verify listings page loads successfully
    Given user navigates to listings page
    Then user should see listings page heading

  @regression
  Scenario: Verify all properties have addresses
    Given user has listings page opened
    Then user should see property addresses

  @regression
  Scenario: Verify all properties have prices
    Given user has listings page opened
    Then user should see property prices

  @regression
  Scenario: Verify property count on listings page
    Given user has listings page opened
    Then user should see at least 1 properties listed

  @regression
  Scenario: Verify navigation back to homepage from listings
    Given user has listings page opened
    When user clicks home link
    Then user should see hero heading
