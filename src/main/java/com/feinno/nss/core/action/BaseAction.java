/*
 * 文件名： BaseAction.java
 * 
 * 创建日期： 2008-2-26
 *
 * Copyright(C) 2008, by Along.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.core.action;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

/**
 * 所有ACTION的基类
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * @version $Revision$
 * @since 2008-2-26
 */
public abstract class BaseAction extends ActionSupport {

	private static final long	serialVersionUID	= 2558527446179010546L;

	/**
	 * 得到HttpRequest
	 * 
	 * @return 获得的HttpRequest
	 */
	public HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}

	/**
	 * 得到HttpSession
	 * 
	 * @return 获得的HttpSession
	 */
	public HttpSession getSession() {
		return ServletActionContext.getRequest().getSession();
	}

	/**
	 * 得到HttpResponse
	 * 
	 * @return 获得的HttpResponse
	 */
	public HttpServletResponse getResponse() {
		return ServletActionContext.getResponse();
	}

	public ServletContext getServletContext() {
		return ServletActionContext.getServletContext();
	}

	/**
	 * 得到上下文路径，例如：/portal
	 * 
	 * @return 上下文路径
	 */
	public String getContext() {
		return this.getRequest().getContextPath();
	}

	/**
	 * 得到服务全路径，例如：http://127.0.0.1:8080/portal
	 * 
	 * @return 服务全路径
	 */
	public String getBasePath() {
		String basePath = this.getRequest().getScheme() + "://" + this.getRequest().getServerName() + ":"
				+ this.getRequest().getServerPort() + this.getContext();
		return basePath;
	}

	/**
	 * 获取真是的客户端的IP 一般情况直接用request.getRemoteAddr()方法 获取客户端的IP地址，但是如果客户端使用了代理服务器，该方法得到的是 代理服务器的地址，不是客户端的地址。
	 * 代理服务器在转发客户端的请求时，会在HTTP的头消息中增加"x-forwarded-for" 信息，该信息中就保存有原客户端的地址。通过request的getHeader方法得
	 * HTTP头中的"x-forwarded-for"信息，便可以获得客户端的真实IP。 当客户端通过多级代理访问时，"x-forwarded-for"信息中的第一个非unknown字符串 即为客户端的真实IP
	 * 
	 * @return 返回真实的IP地址
	 */
	public String getRemoteAddr() {
		String remoteAddr = null;
		remoteAddr = this.getRequest().getHeader("x-forwarded-for");
		if (remoteAddr != null && remoteAddr.length() != 0) {
			while ((remoteAddr != null) && (remoteAddr.equals("unknown"))) {
				remoteAddr = this.getRequest().getHeader("x-forwarded-for");
			}
		}
		if (remoteAddr == null) {
			remoteAddr = this.getRequest().getHeader("Proxy-Client-IP");
		}
		if (remoteAddr == null) {
			remoteAddr = this.getRequest().getHeader("WL-Proxy-Client-IP");
		}
		if (remoteAddr == null) {
			remoteAddr = this.getRequest().getRemoteAddr();
		}
		return remoteAddr;
	}
}
