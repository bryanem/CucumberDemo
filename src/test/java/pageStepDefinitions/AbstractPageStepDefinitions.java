package pageStepDefinitions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import util.PropertyManager;

public abstract class AbstractPageStepDefinitions {
	protected PropertyManager property;
	public static WebDriver driver;
	
	protected WebDriver getDriver() {
		property=new PropertyManager();
		property.generateProperties();
		if(driver==null||driver.toString().contains("(null)")) {
			if("firefox".equals(property.browser)) {
				System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
				driver=new FirefoxDriver();
			} else if("edge".equals(property.browser)) {
				System.setProperty("webdriver.edge.driver","MicrosoftWebDriver.exe");
				driver = new EdgeDriver();
			} else {
				System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				driver=new ChromeDriver();
			}
		}
		return driver;
	}
	
	protected void wait(int seconds) {
		try {
			Thread.sleep(seconds*1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}