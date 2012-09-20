package com.feinno.nss.framework.controller.action.frame;

import java.sql.Timestamp;
import java.util.Date;

import javax.print.attribute.standard.DateTimeAtCompleted;

import org.apache.struts2.ServletActionContext;

import com.feinno.nss.core.utils.DateUtil;
import com.feinno.nss.core.utils.PasswordEncoderMD5Impl;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.framework.controller.helper.UserSessionObj;
import com.feinno.nss.model.beans.TYyUser;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

public class ajaxRegisterAction extends CommonAction {

	private static final long serialVersionUID = 2444919911129850186L;

	private String userName;
	private String password;
	private String checkCode;
	private String nickName;
	private String description;

	/*
	 * 0 注册成功 -1 系统故障 1 用户名已被使用 2 验证码错误
	 */
	private int registerResult;

	// 用户名是否已经被使用
	private boolean userNameHaveUsed;

	// ajax请求参数赋值
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setCheckCode(String checkCode) {
		this.checkCode = checkCode;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getNickName() {
		return this.nickName;
	}

	public String getUserName() {
		return this.userName;
	}

	// ajax返回结果
	// 0 : 注册 成功
	// 1 ： 用户名已被使用
	// 2: 验证码错误
	// -1: 系统故障
	public int getRegisterResult() {
		return registerResult;
	}

	public boolean getUserNameHaveUsed() {
		return this.userNameHaveUsed;
	}

	public String execute() {
		String codeImage = (String) this.getSession().getAttribute("codeImage");
		if (this.checkCode == null
				|| !this.checkCode.equalsIgnoreCase(codeImage)) {
			this.registerResult = 2;
			return Action.SUCCESS;
		}
		
		if (Factory.getUserService().getUserByUserName(this.userName) != null) {
			this.registerResult = 1;
			return Action.SUCCESS;
		}
		
		PasswordEncoderMD5Impl pe = new PasswordEncoderMD5Impl();
		TYyUser user = new TYyUser();
		user.setUserName(this.userName);
		user.setPassword(pe.encode(this.password) );
		user.setNickName(this.nickName);
		user.setDescription(this.description);
		
		user.setState(1);
		user.setDepartmentId(-1);
		user.setUserType(0);
		user.setId(null);
		user.setLastLoginDate(new Timestamp(System.currentTimeMillis()));
		user.setCreateDate(new Timestamp(System.currentTimeMillis()));
		user.setFreeSize(0);
		user.setHomePageViewCount(0);
		user.setMaxSize(0);
		user.setPhotoImage(null);
		user.setTel(null);
		
		try
		{
			Factory.getUserService().createTYyUser(user);
			this.registerResult = 0;			
		}
		catch( Exception ex){
			this.registerResult = -1;
		}
		return Action.SUCCESS;		
	}

	public String UserNameHaveUsed() {

		if (Factory.getUserService().getUserByUserName(this.userName) == null) {
			this.userNameHaveUsed = false;
		} else {
			this.userNameHaveUsed = true;
		}

		return Action.SUCCESS;
	}

}
