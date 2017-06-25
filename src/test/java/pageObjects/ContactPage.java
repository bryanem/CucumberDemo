package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ContactPage extends AbstractPage{
	
	@FindBy(name="name_field") private WebElement nameField;
	@FindBy(name="address_field") private WebElement addressField;
	@FindBy(name="postcode_field") private WebElement postcodeField;
	@FindBy(name="email_field") private WebElement emailField;
	@FindBy(id="submit_message") private WebElement submitMessage;

	public ContactPage(WebDriver driver) {
		super(driver);
	}
	
	public ContactPage setNameField(String value){
		nameField.sendKeys(value);
		return this;
	}
	
	public ContactPage setAddressField(String value){
		addressField.sendKeys(value);
		return this;
	}
	
	public ContactPage setPostcodeField(String value){
		postcodeField.sendKeys(value);
		return this;
	}
	
	public ContactPage setEmailField(String value){
		emailField.sendKeys(value);
		return this;
	}
	
	public ContactConfirmPage submitForm(){
		submitMessage.click();
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

	public WebElement getSubmitMessage() {
		return submitMessage;
	}
}