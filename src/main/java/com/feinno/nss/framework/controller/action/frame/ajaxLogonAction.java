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

public class ajaxLogonAction extends CommonAction {

	private static final long serialVersionUID = 2444919911129850186L;

	private String userName;
	private String password;
	private String checkCode;
	private int result;
	private String nickName;

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

	public String getNickName() {
		return this.nickName;
	}

	public String getUserName() {
		return this.userName;
	}

	// ajax返回结果
	// 0 : 登录/退出 成功
	// 1 ： 密码错误
	// 2: 验证码错误
	// 3: 用户名错误
	// 4: 用户已被禁用
	// -1: 系统故障
	public int getResult() {
		return result;
	}

	private UserSessionObj createUserSessionObj(TYyUser user) {
		UserSessionObj sessionObj = new UserSessionObj();

		sessionObj.setIpAddress(getRequest().getRemoteAddr());
		sessionObj.setLoginTime(DateUtil.getSystemCurrentDateTime());
		sessionObj.setSessionId(getSession().getId());
		sessionObj.setId(user.getId());
		sessionObj.setUserName(user.getUserName());
		sessionObj.setNickName(user.getNickName());

		return sessionObj;
	}

	private void LogonSuccess(TYyUser userInfo) {
		try {
			userInfo.setLastLoginDate(new Timestamp(System.currentTimeMillis()));
			Factory.getUserService().updateTYyUser(userInfo);
		} catch (Exception ex) {
			System.out.print(ex.getStackTrace());
		}

		UserSessionObj obj = createUserSessionObj(userInfo);
		this.setUserSessionInfo(obj);
	}
	
	public String Logout()
	{
		ServletActionContext.getRequest().getSession().invalidate();
		this.result = 0;
		return SUCCESS;		
	}

	public String execute() {

		String codeImage = (String) this.getSession().getAttribute("codeImage");
		if (this.checkCode == null
				|| !this.checkCode.equalsIgnoreCase(codeImage)) {
			this.result = 2;
			return Action.SUCCESS;
		}

		TYyUser userInfo = Factory.getUserService().getUserByUserName(
				this.userName);
		if (userInfo == null) {
			this.result = 3;
		} else {
			if (userInfo.getState() == 0) {
				this.result = 4;
				return Action.SUCCESS;
			}

			PasswordEncoderMD5Impl pe = new PasswordEncoderMD5Impl();
			String encryptedPassword = pe.encode(this.password);
			if (encryptedPassword.equalsIgnoreCase(userInfo.getPassword())) {
				this.result = 0;
				this.nickName = userInfo.getNickName();
				LogonSuccess(userInfo);
			} else {
				this.result = 1;
			}
		}

		return Action.SUCCESS;
	}

}
