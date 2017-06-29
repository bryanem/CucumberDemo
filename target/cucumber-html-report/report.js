$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PageHeading.feature");
formatter.feature({
  "line": 2,
  "name": "Test Page Headings",
  "description": "",
  "id": "test-page-headings",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@prueba3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test Headings",
  "description": "",
  "id": "test-page-headings;test-headings",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u003clink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check the title is \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-page-headings;test-headings;",
  "rows": [
    {
      "cells": [
        "link",
        "title"
      ],
      "line": 10,
      "id": "test-page-headings;test-headings;;1"
    },
    {
      "cells": [
        "\"adoption\"",
        "\"adoption\""
      ],
      "line": 11,
      "id": "test-page-headings;test-headings;;2"
    },
    {
      "cells": [
        "\"about\"",
        "\"about\""
      ],
      "line": 12,
      "id": "test-page-headings;test-headings;;3"
    },
    {
      "cells": [
        "\"contact\"",
        "\"contact\""
      ],
      "line": 13,
      "id": "test-page-headings;test-headings;;4"
    },
    {
      "cells": [
        "\"home\"",
        "\"home\""
      ],
      "line": 14,
      "id": "test-page-headings;test-headings;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test Headings",
  "description": "",
  "id": "test-page-headings;test-headings;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prueba3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"adoption\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check the title is \"adoption\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 4952993347,
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
  "duration": 3865747112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adoption",
      "offset": 22
    }
  ],
  "location": "CommonPageStepDefinitions.checkTitle(String)"
});
formatter.result({
  "duration": 18239461,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Headings",
  "description": "",
  "id": "test-page-headings;test-headings;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prueba3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"about\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check the title is \"about\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 1652674828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about",
      "offset": 15
    }
  ],
  "location": "CommonPageStepDefinitions.shouldClickOnLink(String)"
});
formatter.result({
  "duration": 3351606293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about",
      "offset": 22
    }
  ],
  "location": "CommonPageStepDefinitions.checkTitle(String)"
});
formatter.result({
  "duration": 13262979,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Headings",
  "description": "",
  "id": "test-page-headings;test-headings;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prueba3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"contact\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check the title is \"contact\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 2744126373,
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
  "duration": 2575683751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact",
      "offset": 22
    }
  ],
  "location": "CommonPageStepDefinitions.checkTitle(String)"
});
formatter.result({
  "duration": 11574650,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Headings",
  "description": "",
  "id": "test-page-headings;test-headings;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prueba3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"home\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check the title is \"home\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinitions.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 2607081111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 15
    }
  ],
  "location": "CommonPageStepDefinitions.shouldClickOnLink(String)"
});
formatter.result({
  "duration": 2410548676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 22
    }
  ],
  "location": "CommonPageStepDefinitions.checkTitle(String)"
});
formatter.result({
  "duration": 144678358,
  "status": "passed"
});
});