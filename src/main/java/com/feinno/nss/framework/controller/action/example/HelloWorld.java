
package com.feinno.nss.framework.controller.action.example;

import java.util.List;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.model.beans.Test;

/**
 * <code>Set welcome message.</code>
 */
public class HelloWorld extends ExampleSupport {

    public String execute() throws Exception {
        //setMessage(getText(MESSAGE));
    	
    	List<Test> testList=Factory.getTestService().listTests();
        
    	if(testList!=null&&testList.size()>0)
    	{
    		for(Test t:testList)
    		{
    			System.out.println("test item is ------>"+t.getId()+"--"+t.getName());
    		}
    	}
    	
        return SUCCESS;
    }

    /**
     * Provide default valuie for Message property.
     */
    public static final String MESSAGE = "HelloWorld.message";

    /**
     * Field for Message property.
     */
    private String message;

    /**
     * Return Message property.
     *
     * @return Message property
     */
    public String getMessage() {
        return message;
    }

    /**
     * Set Message property.
     *
     * @param message Text to display on HelloWorld page.
     */
    public void setMessage(String message) {
        this.message = message;
    }
}
