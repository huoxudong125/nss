package com.feinno.nss.framework.controller.action.UserView;

import java.util.ArrayList;
import java.util.List;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.model.beans.SharedResource;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.model.beans.TYyUser;
import com.opensymphony.xwork2.Action;

public class AjaxAction extends UserViewAction {

	private int userId;
	private int targetId;
	private int type;
	private int result = 0; // 1成功 0 失败

	public void setResult(int result) {
		this.result = result;
	}

	public int getResult() {
		return this.result;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setType(int type) {
		this.type = type;
	}

	public void setTargetId(int targetId) {
		this.targetId = targetId;
	}

	public String addAttention() {
		try {
			Factory.getUserAttentionService().addAttention(userId, targetId, type);
			this.result = 1;
		} catch (Exception ex) {
			this.result = 0;
		}
		return Action.SUCCESS;
	}
	
	public String cancleAttention() {
		try {
			Factory.getUserAttentionService().deleteAttention(userId, targetId, type);
			//Factory.getUserAttentionService().cancleAttention(userId, targetId, type);
			//Factory.getUserGroupService().deleteUserAttentionMapping(userId, targetId, type);
			this.result = 1;
		} catch (Exception ex) {
			this.result = 0;
		}
		return Action.SUCCESS;
	}

}
