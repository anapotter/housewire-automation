Feature: Property Details Page Comprehensive Testing

  @regression
  Scenario: Verify property title is displayed
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title

  @regression
  Scenario: Verify property asking price
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property asking price

  @regression
  Scenario: Verify property bedrooms information
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property bedrooms

  @regression
  Scenario: Verify property bathrooms information
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property bathrooms

  @regression
  Scenario: Verify property garage information
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property garage information

  @regression
  Scenario: Verify property square feet
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property square feet

  @regression
  Scenario: Verify property lot size
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property lot size

  @regression
  Scenario: Verify property listing date
    Given user has listings page opened
  @regression
  Scenario: Verify property listing date
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property listing date

  @regression
  Scenario: Verify property realtor information
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property realtor information

  @regression
  Scenario: Verify property images are displayed
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property images

  @regression
  Scenario: Verify back to listings navigation
    Given user has listings page opened
    When user clicks on property at index 0
    And user clicks back to listings
    Then user should see listings page heading

  @regression
  Scenario: Verify realtor section is visible
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see realtor section

  @regression
  Scenario: Verify all property details are present
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title
    And user should see property asking price
    And user should see property bedrooms
    And user should see property bathrooms
