package pageStepDefinitions;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import pageObjects.AbstractPage;
import pageObjects.ContactPage;

public class CommonPageStepDefinitions extends AbstractPageStepDefinitions{
	WebDriver driver=getDriver();
	AbstractPage page;
	
	@Before("@prueba4")
	public void saludo() {
		System.out.println("hola");
	}
	
	//navega a la home
	@Given("^I am on my zoo website$")
	public void shouldNavigateToZooSite() {
		driver.navigate().to(property.home);
	}	
	
	//clickea un link determinado si tiene el nombre indicado + _link
	@When("^I navigate to \"([^\"]*)\"$")
	public void shouldClickOnLink(String link) {
		driver.findElement(By.id(link.toLowerCase()+"_link")).click();
	}

	//llena un formulario de campos con ids del tipo: nombre indicado + _link; y con los datos provistos en una tabla
	//esta tabla debe tener (empezando en la fila 2), 1º: el nombre del id del campo a llenar (considerando lo de arriba),
	//y 2º: contenido a escribir para ese campo;
	//y en la última fila y 2ª columna: también la segunda parte del id del submit (asumiendo que es del tipo submit_ + nombre)
	@When("^I submit the form with valid data$")
	public void submitContactForm(DataTable table) {
		List<List<String>> data=table.raw();
		String submit=data.get(data.size()-1).get(1).toLowerCase();
		page=new ContactPage(driver);
		for(int i=1;i<data.size()-1;i++) {
			page.setField(data.get(i).get(0), data.get(i).get(1));
		}
		wait(3);
		page.submit(submit);
	}

	//se verifica que el título contenga el texto indicado
	@Then("^I check the title is \"([^\"]*)\"$")
	public void checkTitle(String title) {
		String actualtitle=driver.getTitle();
		Assert.assertTrue("Not on \""+title+"\" page. On \""+actualtitle+"\" page", actualtitle.toLowerCase().contains(title.toLowerCase()));
	}

	//se verifica que el título del cuerpo de la página (si hay 1), contenga el texto indicado
	@Then("^I check the page title is \"([^\"]*)\"$")
	public void checkPageTitle(String title) {
		String actualtitle=driver.findElement(By.cssSelector(".content h1")).getText();
		Assert.assertTrue("Not on "+title+" page. On "+actualtitle+" page", actualtitle.toLowerCase().contains(title.toLowerCase()));
	}
}