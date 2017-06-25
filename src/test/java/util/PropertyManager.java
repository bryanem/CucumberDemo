package util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertyManager {
	public String home="";
	public String browser="";
	public void generateProperties() {
		Properties prop=new Properties();
		InputStream input=null;
		try {
			input=new FileInputStream("src/test/java/parameters.properties");
			prop.load(input);
			home=prop.getProperty("home").toString();
			browser=prop.getProperty("browser").toString();
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
}