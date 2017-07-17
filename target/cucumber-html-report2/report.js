$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Adoption.feature");
formatter.feature({
  "line": 2,
  "name": "Adopt an animal",
  "description": "",
  "id": "adopt-an-animal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@prueba2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"adoption\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I submit the form with valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 9
    },
    {
      "cells": [
        "Name",
        "Jack Joe"
      ],
      "line": 10
    },
    {
      "cells": [
        "Address",
        "Happy Land"
      ],
      "line": 11
    },
    {
      "cells": [
        "Postcode",
        "A1 S22"
      ],
      "line": 12
    },
    {
      "cells": [
        "Email",
        "bryan@breit.com"
      ],
      "line": 13
    },
    {
      "cells": [
        "Submit",
        "adoption"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "There should be a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 9110070774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adoption",
      "offset": 15
    }
  ],
  "location": "CommonPageStepDefinitions.shouldClickOnLink(String)"
});
formatter.result({
  "duration": 2279627312,
  "status": "passed"
});
formatter.match({
  "location": "AdoptionPageStepDefinitions.checkForAnimal()"
});
formatter.result({
  "duration": 967913979,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinitions.submitContactForm(DataTable)"
});
formatter.result({
  "duration": 5580703958,
  "status": "passed"
});
formatter.match({
  "location": "AdoptionConfirmationPageStepDefinitions.checkConfirmationMessage()"
});
formatter.result({
  "duration": 38803726,
  "status": "passed"
});
});