/*
 * 文件名： AjaxAction.java
 *
 * 创建日期： 2010-11-8
 *
 * Copyright(C) 2010, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.framework.controller.action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * json交互，异步处理时返回内容设定为字符串
 *
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * @version $Revision: 119 $
 * @since 2010-11-8
 */
public abstract class AjaxAction extends CommonAction {

	private static final long serialVersionUID = 4520696527242319557L;
	private static final Logger logger = LoggerFactory.getLogger(AjaxAction.class);

	/*
	 * @see com.opensymphony.xwork2.ActionSupport#execute()
	 */
	@Override
	public String execute() throws Exception {
		HttpServletResponse response = getResponse();
		response.setContentType("application/json; charset=UTF-8");
		response.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
		response.setDateHeader("Expires", 0);

		PrintWriter writer = null;
		try {
			writer = response.getWriter();
			writer.println(process());
			writer.flush();
		} catch (Exception e) {
			if (logger.isErrorEnabled()) {
				logger.error(e.getMessage(), e);
			}
		} finally {
			writer.close();
		}
		return null;
	}

	/**
	 * 继承这个类以后必须实现直接对json的处理方式
	 *
	 * @return
	 */
	public abstract String process() throws Exception;
}
