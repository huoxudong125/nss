/*
 * 文件名： LoadConfig.java
 * 
 * 创建日期： 2009-2-22
 *
 * Copyright(C) 2009, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.framework.utils;

import java.util.HashMap;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import sun.tools.tree.ThisExpression;

/**
 * 读取系统配置文件的Java类
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * 
 * @version $Revision: 29399 $
 * 
 * @since 2009-2-22
 */
public class LoadConfig {

	/** 平台系统名称 */
	private static String platformTitle;
	/** Session超时时间（分钟） */
	private static int sessionTimeOut;
	/** 平台的请求后缀名 */
	private static String actionExt;
	
	/** 分页时每页显示的条目数 */
	private static int pageSize;
	
	/** 文件在回收站中保存的天数 */
	private static long dayFileInRecycle;

	private final static Map<String, String> params = new HashMap<String, String>();

	static {
		load();
	}

	private static void load() {
		SAXReader reader = new SAXReader();
		try {
			Document doc = reader.read(LoadConfig.class.getClassLoader()
					.getResourceAsStream("systemConfig.xml"));
			Element root = doc.getRootElement();

			actionExt = root.elementTextTrim("actionExt");
			platformTitle = root.elementTextTrim("platformTitle");
			sessionTimeOut = Integer.parseInt(root
					.elementTextTrim("sessionTimeOut"));
			pageSize = Integer.parseInt(root.elementTextTrim("pageSize"));
			dayFileInRecycle = Long.parseLong(root.elementTextTrim("dayFileInRecycle"));
			
//
//			// 获取配置文件的配置信息
//			Element configs = root.element("configs");
//			for (Object obj : configs.elements()) {
//				if (obj instanceof Element) {
//					Element e = (Element) obj;
//					params.put(e.attributeValue("name"), e
//							.attributeValue("value"));
//				}
//			}
		} catch (DocumentException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * @return the platformTitle
	 */
	public static String getPlatformTitle() {
		return platformTitle;
	}

	/**
	 * @return the sessionTimeOut
	 */
	public static Integer getSessionTimeOut() {
		return sessionTimeOut;
	}

	/**
	 * @return the actionExt
	 */
	public static String getActionExt() {
		return actionExt;
	}
	
	public static long  getDayFileInRecycle()
	{
		return dayFileInRecycle;
	}


	/**
	 * 获取指定参数
	 * 
	 * @param name
	 * @return
	 */
	public static String getString(String name) {
		return params.get(name);
	}
	


}