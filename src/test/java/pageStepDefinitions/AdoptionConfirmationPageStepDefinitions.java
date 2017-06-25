package pageStepDefinitions;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Then;
import pageObjects.AdoptionConfirmPage;

public class AdoptionConfirmationPageStepDefinitions extends AbstractPageStepDefinitions {
	WebDriver driver=getDriver();
	AdoptionConfirmPage confirmationPage;
	
	//Verifica que se haya confirmado la adopción
	@Then("^There should be a confirmation message$")
	public void checkConfirmationMessage() {
		confirmationPage=new AdoptionConfirmPage(driver);
		String confirmation=confirmationPage.getParagraph().getText();
		Assert.assertTrue("The adoption couldn't be confirmed. The actual text was: "+confirmation, confirmation.contains("YOUR ADOPTION HAS BEEN SET UP"));
	}
}