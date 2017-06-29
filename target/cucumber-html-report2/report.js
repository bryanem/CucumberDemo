$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactConfirm.feature");
formatter.feature({
  "line": 1,
  "name": "Submit a valid contact form",
  "description": "",
  "id": "submit-a-valid-contact-form",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Submit form using valid data",
  "description": "",
  "id": "submit-a-valid-contact-form;submit-form-using-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@prueba"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"contact\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I move the slider to 60% of the slide",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I submit the form with valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 8
    },
    {
      "cells": [
        "Name",
        "Jack Joe"
      ],
      "line": 9
    },
    {
      "cells": [
        "Address",
        "Happy Land"
      ],
      "line": 10
    },
    {
      "cells": [
        "Postcode",
        "A1 S22"
      ],
      "line": 11
    },
    {
      "cells": [
        "Email",
        "bryan@breit.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "Submit",
        "message"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I check the page title is \"We have your message\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 7547869683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact",
      "offset": 15
    }
  ],
  "location": "CommonPageStepDefinitions.shouldClickOnLink(String)"
});
formatter.result({
  "duration": 4062234413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 21
    }
  ],
  "location": "ContactFormPageStepDefinitions.moveSlider(int)"
});
formatter.result({
  "duration": 349338967,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinitions.submitContactForm(DataTable)"
});
formatter.result({
  "duration": 6518754811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have your message",
      "offset": 27
    }
  ],
  "location": "CommonPageStepDefinitions.checkPageTitle(String)"
});
formatter.result({
  "duration": 164800442,
  "status": "passed"
});
});