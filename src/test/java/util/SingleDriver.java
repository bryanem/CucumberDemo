package util;
import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SingleDriver {
	private static PropertyManager property;
	private static List<WebDriver> driverL=new ArrayList<WebDriver>();
	private static List<String> threadNames=new ArrayList<String>();
	private static WebDriver driver;
	private static boolean blocked=false;
	
	private SingleDriver(PropertyManager property){
		renew(property);
	}
	
	public void renew(PropertyManager property) {
		int index=threadNames.indexOf(Thread.currentThread().getName());
		if(index==-1) {
			driver=drive(property);
			driverL.add(driver);
			threadNames.add(Thread.currentThread().getName());
		} else {
			driver=driverL.get(index);
			if(driver==null||driver.toString().contains("(null)")) {
				driver=drive(property);
				driverL.set(index, driver);
			}
		}
	}
	
	private WebDriver drive(PropertyManager property) {
		while(blocked){
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		blocked=true;
		if("firefox".equals(property.browser)) {
			System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
			driver = new FirefoxDriver();
		} else if("edge".equals(property.browser)) {
			System.setProperty("webdriver.edge.driver","MicrosoftWebDriver.exe");
			driver = new EdgeDriver();
		} else {
			System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
			driver = new ChromeDriver();
		}
		blocked=false;
		return driver;
	}

	private static final ThreadLocal<SingleDriver> drivers = new ThreadLocal<SingleDriver>() {
		@Override
		protected SingleDriver initialValue() {
			return new SingleDriver(property);
		}
	};

	public static SingleDriver getInstance(PropertyManager inProperty){
		property=inProperty;
		return drivers.get();
	}
	
	public WebDriver getDriver() {
		return driver;
	}
	
	public void close() {
		for(WebDriver drive:driverL) {
			if(drive!=null) {
				drive.quit();
			}
		}
	}
}