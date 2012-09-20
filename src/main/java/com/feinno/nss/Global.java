package com.feinno.nss;

import java.util.HashMap;
import java.util.Map;

import com.feinno.nss.framework.utils.LoadConfig;
import com.feinno.nss.framework.utils.LoadResouceTypeConfig;
import com.feinno.nss.model.beans.ResourceType;

public class Global
{
	/**key为文件的后缀名，value为ResourceType类型 */
	public static Map<String,ResourceType> resources = LoadResouceTypeConfig.getResources();
	/** 文件在回收站保存的天数 */
	public static long dayFileInRecyle =LoadConfig.getDayFileInRecycle();
}
