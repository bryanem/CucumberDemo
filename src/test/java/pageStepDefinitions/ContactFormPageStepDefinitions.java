package pageStepDefinitions;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.When;
import pageObjects.AdoptionFormPage;

public class ContactFormPageStepDefinitions extends AbstractPageStepDefinitions {
	WebDriver driver=getDriver();
    AdoptionFormPage adoption = new AdoptionFormPage(driver);
	
	//mueve el slider a una posición entre 0 y 100% del largo que tiene el slider
	@When("^I move the slider to (\\d{1,3})% of the slide$")
	public void moveSlider(int move) {
		adoption=new AdoptionFormPage(driver);
		adoption.slide(move);
	}
}