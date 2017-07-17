$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ZooTest.feature");
formatter.feature({
  "line": 2,
  "name": "To test the high level funcionality of the Zoo test site",
  "description": "",
  "id": "to-test-the-high-level-funcionality-of-the-zoo-test-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@prueba4"
    }
  ]
});
formatter.before({
  "duration": 2594954616,
  "status": "passed"
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
  "duration": 2334043857,
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
formatter.step({
  "line": 10,
  "name": "I use sikuli",
  "keyword": "And "
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
  "duration": 5089720900,
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
  "duration": 246490844,
  "status": "passed"
});
formatter.match({
  "location": "AdoptionPageStepDefinitions.executeSikuli()"
});
formatter.result({
  "duration": 2503254125,
  "status": "passed"
});
});