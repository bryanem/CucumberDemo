package pageObjects;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class AbstractPage {
	protected WebDriver driver;
	
	public AbstractPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void setField(String field, String value){
		driver.findElement(By.name(field.toLowerCase()+"_field")).sendKeys(value);
	}
	
	public void submit(String submit){
		driver.findElement(By.id("submit_"+submit)).click();
	}
}