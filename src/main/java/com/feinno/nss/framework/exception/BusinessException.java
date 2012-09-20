/*
 * 文件名： BusinessException.java
 * 
 * 创建日期： 2009-3-16
 *
 * Copyright(C) 2009, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.framework.exception;

/**
 * 系统业务操作异常的Java类
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * 
 * @version $Revision$
 * 
 * @since 2009-3-16
 */
public class BusinessException extends Exception {

	private static final long serialVersionUID = 2651694186086093873L;

	private int errorCode = 1;

	/**
	 * @param errorCode
	 *            要设置的 errorCode。
	 */
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	/**
	 * @return 返回 errorCode。
	 */
	public int getErrorCode() {
		return errorCode;
	}

	public BusinessException() {
		super();
	}

	public BusinessException(int errorCode) {
		super("error code is " + errorCode);
		this.errorCode = errorCode;
	}

	public BusinessException(String msg) {
		super(msg);
	}

	public BusinessException(Throwable throwable) {
		super(throwable);
	}

	public BusinessException(String msg, Throwable throwable) {
		super(msg, throwable);
	}
}
