@prueba3
Feature: Test Page Headings

  Scenario Outline: Test Headings
  	Given I am on my zoo website
    When I navigate to <link>
    Then I check the title is <title>

    Examples: 
      | link       | title      |
      | "adoption" | "adoption" |
      | "about"    | "about"    |
      | "contact"  | "contact"  |
      | "home"     | "home"     |

  #Scenario: Test Adoption Page Heading
  #  Given I am on my zoo website
  #  When I navigate to "adoption"
  #  Then I check the title is "adoption"
  #  And I close the browser
  #Scenario: Test About Page Heading
  #  Given I am on my zoo website
  #  When I navigate to "about"
  #  Then I check the title is "about"
  #  And I close the browser
  #Scenario: Test Contact Page Heading
  #  Given I am on my zoo website
  #  When I navigate to "contact"
  #  Then I check the title is "contact"
  #  And I close the browser