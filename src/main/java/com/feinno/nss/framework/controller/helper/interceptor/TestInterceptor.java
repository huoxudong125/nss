package com.feinno.nss.framework.controller.helper.interceptor;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.StrutsStatics;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.model.beans.Test;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class TestInterceptor implements Interceptor {

	public void destroy() {
		// TODO Auto-generated method stub

	}

	public void init() {
		// TODO Auto-generated method stub

	}

	public String intercept(ActionInvocation invocation) throws Exception {

		System.out.println("before");
		
		ActionContext actionContext = invocation.getInvocationContext();   

		HttpServletRequest request= (HttpServletRequest) actionContext.get(StrutsStatics.HTTP_REQUEST);   
     /*   
List<Test> testList=Factory.getTestService().listTests();
    	if(testList!=null&&testList.size()>0)
    	{
    		for(Test t:testList)
    		{
    			System.out.println("test item is ------>"+t.getId()+"--"+t.getName());
    		}
    	}
		*/
		
		HttpSession session = request.getSession();
		
		String a = request.getParameter("p");
		System.out.println("paramter a="+a);
		if(a==null||a.length()==0)
			return "testResult";
		else
			invocation.invoke();
		//System.out.println("result =========="+result);
		return "error";
        
	}

}
