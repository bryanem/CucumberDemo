package pageStepDefinitions;
import org.openqa.selenium.WebDriver;
import util.PropertyManager;
import util.SingleDriver;

public abstract class AbstractPageStepDefinitions {
	public static PropertyManager property;
	public static WebDriver driver;
	public static SingleDriver drivers;
	
	protected WebDriver getDriver() {
		property=new PropertyManager();
		property.generateProperties();
		drivers=SingleDriver.getInstance(property);
		drivers.renew(property);
		return drivers.getDriver();
	}
	
	protected void wait(int seconds) {
		try {
			Thread.sleep(seconds*1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}