import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;
import org.junit.AfterClass;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		monochrome = false,
		plugin={"html:target/cucumber-html-report"},
		features="src/test/resources/features",
		tags={"~@prueba","@prueba4"}
) 
public class RunTest {
	@AfterClass
	public static void teardown() {
		pageStepDefinitions.AbstractPageStepDefinitions.drivers.close();
    }
}