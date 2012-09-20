package com.feinno.nss.framework.controller.action.UserView;

import java.util.ArrayList;
import java.util.List;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.model.beans.SharedResource;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.model.beans.TYyUser;
import com.opensymphony.xwork2.Action;

public class InfoAction extends UserViewAction {
	
	public String execute()
	{
		SetBasicInfo();
		
		TYyUser userInfo = Factory.getUserService().getUserById(id);
		if (userInfo != null) {
			this.getRequest().setAttribute("UserName", userInfo.getUserName());
			this.getRequest().setAttribute("NickName", userInfo.getNickName());
			this.getRequest().setAttribute("Tel", userInfo.getTel());
		}

		return Action.SUCCESS;
	}

}
