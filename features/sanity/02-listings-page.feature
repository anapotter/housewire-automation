Feature: Listings Page Verification

  @sanity
  Scenario: Verify listings page loads and displays properties
    Given user has listings page opened
    Then user should see listings page heading
    And user should see multiple properties listed
