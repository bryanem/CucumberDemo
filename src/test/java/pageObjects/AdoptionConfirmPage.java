package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AdoptionConfirmPage extends AbstractPage{
	
	@FindBy(tagName="p") private WebElement paragraph;

	public AdoptionConfirmPage(WebDriver driver) {
		super(driver);
	}

	public WebElement getParagraph() {
		return paragraph;
	}
}