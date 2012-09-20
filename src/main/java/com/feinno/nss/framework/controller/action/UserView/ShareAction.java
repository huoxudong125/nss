package com.feinno.nss.framework.controller.action.UserView;

import com.opensymphony.xwork2.Action;

public class ShareAction extends UserViewAction {
	
	public String execute()
	{
		SetBasicInfo();
		
		return Action.SUCCESS;
	}

}
