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
  "duration": 3891075231,
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
  "duration": 20052265,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-B3GCSPM\u0027, ip: \u0027192.168.0.186\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\Usuario\\AppData\\Local\\Temp\\scoped_dir2648_18007}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6de76c95acde5fd368bd70c55efb8600\n*** Element info: {Using\u003did, value\u003dcontact_link}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat pageStepDefinitions.CommonPageStepDefinitions.shouldClickOnLink(CommonPageStepDefinitions.java:32)\r\n\tat ✽.When I navigate to \"contact\"(ContactConfirm.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "CommonPageStepDefinitions.submitContactForm(DataTable)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
});