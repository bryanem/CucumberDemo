@prueba2
Feature: Adopt an animal
	
  Scenario: Adopt an available animal
    Given I am on my zoo website
    When I navigate to "adoption"
    And I check for an available animal
    And I submit the form with valid data
      | Fields   | Value           |
      | Name     | Jack Joe        |
      | Address  | Happy Land      |
      | Postcode | A1 S22          |
      | Email    | bryan@breit.com |
      | Submit   | adoption        |
    Then There should be a confirmation message