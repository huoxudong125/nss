/*
 * 文件名： UserSessionObj.java
 * 
 * 创建日期： 2009-3-19
 *
 * Copyright(C) 2009, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.framework.controller.helper;

import java.util.List;

/**
 * 用户登陆后的用户信息(保存在HttpSession中)
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * 
 * @version $Revision: 20314 $
 * 
 * @since 2009-3-19
 */
@SuppressWarnings("serial")
public class UserSessionObj implements java.io.Serializable {

	private String sessionId;
	private Integer Id;
	private String userName;
	private String nickName;
	private String loginTime;
	private String logOffTime;
	private String ipAddress;
	private String browserVersion;
	private String osVersion;
	private Integer pageSize;

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Integer getId() {
		return Id;
	}
	
	public void setId(Integer id) {
		Id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getNickName(){
		return nickName;
	}
	
	public void setNickName( String nickName ){
		this.nickName = nickName;
	}
	
	/**
	 * @return 返回 loginTime。
	 */
	public String getLoginTime() {
		return loginTime;
	}

	/**
	 * @param loginTime
	 *            要设置的 loginTime。
	 */
	public void setLoginTime(String loginTime) {
		this.loginTime = loginTime;
	}

	/**
	 * @return 返回 logOffTime。
	 */
	public String getLogOffTime() {
		return logOffTime;
	}

	/**
	 * @param logOffTime
	 *            要设置的 logOffTime。
	 */
	public void setLogOffTime(String logOffTime) {
		this.logOffTime = logOffTime;
	}

	/**
	 * @return 返回 ipAddress。
	 */
	public String getIpAddress() {
		return ipAddress;
	}

	/**
	 * @param ipAddress
	 *            要设置的 ipAddress。
	 */
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	/**
	 * @return 返回 browserVersion。
	 */
	public String getBrowserVersion() {
		return browserVersion;
	}

	/**
	 * @param browserVersion
	 *            要设置的 browserVersion。
	 */
	public void setBrowserVersion(String browserVersion) {
		this.browserVersion = browserVersion;
	}

	/**
	 * @return 返回 osVersion。
	 */
	public String getOsVersion() {
		return osVersion;
	}

	/**
	 * @param osVersion
	 *            要设置的 osVersion。
	 */
	public void setOsVersion(String osVersion) {
		this.osVersion = osVersion;
	}
	
	/**
	 * @return 返回 pageSize。
	 */
	public Integer getPageSize() {
		return pageSize;
	}

	/**
	 * @param pageSize
	 *            要设置的 pageSize。
	 */
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
}
