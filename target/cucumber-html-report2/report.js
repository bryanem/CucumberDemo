$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adoption.feature");
formatter.feature({
  "line": 2,
  "name": "Adopt an animal",
  "description": "",
  "id": "adopt-an-animal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@prueba"
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
  "duration": 5794651789,
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
  "duration": 1638670296,
  "status": "passed"
});
formatter.match({
  "location": "AdoptionPageStepDefinitions.checkForAnimal()"
});
formatter.result({
  "duration": 2107319657,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinitions.submitContactForm(DataTable)"
});
formatter.result({
  "duration": 6301412689,
  "status": "passed"
});
formatter.match({
  "location": "AdoptionConfirmationPageStepDefinitions.checkConfirmationMessage()"
});
formatter.result({
  "duration": 43872594,
  "status": "passed"
});
formatter.uri("ContactConfirm.feature");
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
  "duration": 1954852343,
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
  "duration": 2105092881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 21
    }
  ],
  "location": "AdoptionFormPageStepDefinitions.moveSlider(int)"
});
formatter.result({
  "duration": 95017205,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinitions.submitContactForm(DataTable)"
});
formatter.result({
  "duration": 4272474479,
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
  "duration": 137861569,
  "status": "passed"
});
formatter.uri("ZooTest.feature");
formatter.feature({
  "line": 2,
  "name": "To test the high level funcionality of the Zoo test site",
  "description": "",
  "id": "to-test-the-high-level-funcionality-of-the-zoo-test-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@prueba"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 3684517897,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "To set the start date",
  "description": "",
  "id": "to-test-the-high-level-funcionality-of-the-zoo-test-site;to-set-the-start-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"adoption\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I set the start date to \"Today\"",
  "keyword": "Then "
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
  "duration": 1595538197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 25
    }
  ],
  "location": "AdoptionPageStepDefinitions.setStartDate(String)"
});
formatter.result({
  "duration": 160983364,
  "status": "passed"
});
});