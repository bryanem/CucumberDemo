package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AdoptionPage extends AbstractPage{

	@FindBy(id="check_btn_02") private WebElement button2;
	@FindBy(id="start_select") private WebElement dropdown;
	
	public AdoptionPage(WebDriver driver) {
		super(driver);
	}

	public WebElement getButton2() {
		return button2;
	}

	public WebElement getDropdown() {
		return dropdown;
	}
}