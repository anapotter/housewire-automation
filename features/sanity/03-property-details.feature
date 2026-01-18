Feature: Property Details Page Verification

  @sanity
  Scenario: Verify property details page loads
    Given user has listings page opened
    When user clicks on property at index 0
    Then user should see property title
    And user should see property asking price
    And user should see back to listings link
