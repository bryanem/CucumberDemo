@prueba4
Feature: To test the high level funcionality of the Zoo test site
	
	Background:
		Given I am on my zoo website
		
  Scenario: To set the start date
    When I navigate to "adoption"
    Then I set the start date to "Today"
    And I use sikuli