Feature: About Page Verification

  @sanity
  Scenario: Verify about page loads successfully
    Given user has about page opened
    Then user should see about page heading
    And user should see our team section
