package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class AdoptionFormPage extends AbstractPage{
	
	@FindBy(name="name_field") private WebElement nameField;
	@FindBy(name="address_field") private WebElement addressField;
	@FindBy(name="postcode_field") private WebElement postcodeField;
	@FindBy(name="email_field") private WebElement emailField;
	@FindBy(id="slider-1") private WebElement slider1;
	@FindBy(id="submit_message") private WebElement submitAdoption;

	public AdoptionFormPage(WebDriver driver) {
		super(driver);
	}
	
	public AdoptionFormPage setNameField(String value){
		nameField.sendKeys(value);
		return this;
	}
	
	public AdoptionFormPage setAddressField(String value){
		addressField.sendKeys(value);
		return this;
	}
	
	public AdoptionFormPage setPostcodeField(String value){
		postcodeField.sendKeys(value);
		return this;
	}
	
	public AdoptionFormPage setEmailField(String value){
		emailField.sendKeys(value);
		return this;
	}
	
	public AdoptionFormPage slide(int move){
		Actions slider=new Actions(driver)
				.dragAndDropBy(slider1, (int)Math.round(move*8.76)-438, 0);
		slider.build().perform();
		return this;
	}
	
	public ContactConfirmPage submitForm(){
		submitAdoption.click();
		return new ContactConfirmPage(driver);
	}
	
	public WebElement getNameField() {
		return nameField;
	}

	public WebElement getAddressField() {
		return addressField;
	}

	public WebElement getPostcodeField() {
		return postcodeField;
	}

	public WebElement getEmailField() {
		return emailField;
	}

	public WebElement getSlider1() {
		return slider1;
	}

	public WebElement getSubmitAdoption() {
		return submitAdoption;
	}
}