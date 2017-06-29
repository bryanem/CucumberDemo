import java.security.Permission;
import org.junit.Test;

public class SampleTest {
	private static class ExitTrappedException extends SecurityException {}
	private static void forbidSystemExitCall() {
	    final SecurityManager securityManager = new SecurityManager() {
	      public void checkPermission( Permission permission ) {
	        if( permission.getName().contains("exitVM")) {
	        	throw new ExitTrappedException();
	        }
	      }
	    };
	    System.setSecurityManager( securityManager );
	}
	@Test
	public void multipleThreads(){
		forbidSystemExitCall();
		Thread thread=new Thread(new Runnable() {
            public void run() {
            	try {
        			cucumber.api.cli.Main.main(new String[]{"-g", "pageStepDefinitions","-p","html:target/cucumber-html-report2", "src/test/resources/features/Adoption.feature"});
        		} catch (ExitTrappedException e) {
        		} catch (Throwable e) {
        			e.printStackTrace();
        		}
            }});
        thread.start();
        Thread thread2=new Thread(new Runnable() {
            public void run() {
            	try {
        			cucumber.api.cli.Main.main(new String[]{"-g", "pageStepDefinitions","-p","html:target/cucumber-html-report", "src/test/resources/features/ContactConfirm.feature"});
        		} catch (ExitTrappedException e) {
        		} catch (Throwable e) {
        			e.printStackTrace();
        		}
            }});
        thread2.start();
        /*Thread thread3=new Thread(new Runnable() {
            public void run() {
            	try {
        			cucumber.api.cli.Main.main(new String[]{"-g", "pageStepDefinitions","-p","html:target/cucumber-html-report3", "src/test/resources/features/PageHeading.feature"});
        		} catch (ExitTrappedException e) {
        		} catch (Throwable e) {
        			e.printStackTrace();
        		}
            }});
        thread3.start();*/
        try {
			thread.join(0);
			thread2.join(0);
			//thread3.join(0);
		} catch (ExitTrappedException e) {
		} catch (InterruptedException e) {
			e.printStackTrace();
		} finally {
			System.setSecurityManager(null);
			pageStepDefinitions.AbstractPageStepDefinitions.drivers.close();
		}
	}
}