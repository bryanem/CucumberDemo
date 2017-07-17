package pageStepDefinitions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Screen;

import cucumber.api.java.en.When;
import pageObjects.AdoptionPage;
import cucumber.api.java.en.Then;

public class AdoptionPageStepDefinitions extends AbstractPageStepDefinitions {
	WebDriver driver=getDriver();
	AdoptionPage adoption;
	
	//realmente sólo clickea el botón que se sabe que tiene disponibilidad
	@When("^I check for an available animal$")
	public void checkForAnimal() {
		adoption=adoption==null?new AdoptionPage(driver):adoption;
		adoption.getButton2().click();
	}
	
	//selecciona una opción del dropdown por su texto visible
	@Then("^I set the start date to \"([^\"]*)\"$")
	public void setStartDate(String dropItem) {
		adoption=adoption==null?new AdoptionPage(driver):adoption;
		Select dropDown=new Select(adoption.getDropdown());
		dropDown.selectByVisibleText(dropItem);
	}
	
	//prueba sikuli
	@Then("^I use sikuli$")
	public void executeSikuli() {
		Screen s = new Screen();
        try{
                s.click("src/test/java/imgs/link.png");
                s.write("hello world#ENTER.");
        }
        catch(FindFailed e){
                e.printStackTrace();
        }
	}
}