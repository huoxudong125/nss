package com.feinno.nss.framework.controller.action.frame;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.framework.controller.helper.UserSessionObj;


public class indexAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(indexAction.class);

	// ----------------列出所有用户-----------------------
	
	public String execute() throws Exception 
	{
		String res = SUCCESS;
		
		UserSessionObj userInfo =  getUserSessionInfo();
		if (userInfo==null){
			this.getRequest().setAttribute("IsLogon", false);
		}
		else{
			this.getRequest().setAttribute("IsLogon", true);
			this.getRequest().setAttribute("NickName",userInfo.getNickName());
			this.getRequest().setAttribute("UserName",userInfo.getUserName());
		}	
	
		return res;
	}	 
}
