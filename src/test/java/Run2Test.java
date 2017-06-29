import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;

import org.junit.AfterClass;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		monochrome = false,
		plugin={"html:target/cucumber-html-report2"},
		features="src/test/resources/features",
		tags={"@prueba","~@prueba3"}
) 
public class Run2Test {
	@AfterClass
    public static void teardown() {
		pageStepDefinitions.AbstractPageStepDefinitions.drivers.close();
    }
}