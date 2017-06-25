Feature: Submit a valid contact form
	@prueba
  Scenario: Submit form using valid data
    Given I am on my zoo website
    When I navigate to "contact"
    And I move the slider to 60% of the slide
    And I submit the form with valid data
      | Fields   | Value           |
      | Name     | Jack Joe        |
      | Address  | Happy Land      |
      | Postcode | A1 S22          |
      | Email    | bryan@breit.com |
      | Submit   | message         |
    Then I check the page title is "We have your message"