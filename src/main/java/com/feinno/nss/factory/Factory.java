package com.feinno.nss.factory;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import com.feinno.nss.framework.business.iface.*;

/**
 * Created by IntelliJ IDEA. User: Administrator Date: 11-12-27 Time: 上午11:43 To
 * change this template use File | Settings | File Templates.
 */
public class Factory
{
	private static ApplicationContext applicationContext;

	public static void setApplicationContext(
			ApplicationContext applicationContext) throws BeansException
	{

		Factory.applicationContext = applicationContext;
	}

	/**
	 * @return ApplicationContext
	 */
	public static ApplicationContext getApplicationContext()
	{
		return applicationContext;
	}

	/**
	 * 获取对象
	 * 
	 * @param name
	 * @return Object 一个以所给名字注册的bean的实例
	 * @throws BeansException
	 */
	public static Object getBean(String name) throws BeansException
	{
		return applicationContext.getBean(name);
	}

	public static ITestService getTestService()
	{
		return (ITestService) applicationContext.getBean("testService");
	}

	public static IUserService getUserService()
	{
		return (IUserService) applicationContext.getBean(("userService"));
	}
	
	public static IUserGroupService getUserGroupService()
	{
		return (IUserGroupService) applicationContext.getBean(("userGroupService"));
	}
	
	public static IOutLinkService getOutLinkService()
	{
		return (IOutLinkService) applicationContext.getBean(("outLinkService"));
	}
	
	public static INssUserService getNssUserService()
	{
		return (INssUserService) applicationContext.getBean(("nssUserService"));
	}
	
	public static IFileService getFileService()
	{
		return (IFileService) applicationContext.getBean(("fileService"));
	}
	
	public static IResourceTypeMappingService getResourceTypeMappingService()
	{
		return (IResourceTypeMappingService) applicationContext.getBean(("resourceTypeMappingService"));
	}
	
	public static ISystemResourceTypeService getSystemResourceTypeService()
	{
		return (ISystemResourceTypeService) applicationContext.getBean(("systemResourceTypeService"));
	}
	
	public static IUserAttentionService getUserAttentionService()
	{
		return (IUserAttentionService) applicationContext.getBean(("userAttentionService"));
	}
}