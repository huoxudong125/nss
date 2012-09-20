/*
 * 文件名： CommonAction.java
 * 
 * 创建日期： 2009-3-19
 *
 * Copyright(C) 2009, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.framework.controller.action;

import org.apache.struts2.ServletActionContext;
import com.feinno.nss.core.action.BaseAction;
import com.feinno.nss.core.utils.Page;
import com.feinno.nss.framework.controller.helper.UserSessionObj;

/**
 * 所有ACTION的基类，提供操作Session对象的方法.
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * 
 * @version $Revision: 20314 $
 * 
 * @since 2009-3-19
 */
public abstract class CommonAction extends BaseAction
{

	private static final long serialVersionUID = 3801468610126914039L;

	/**
	 * 得到UserSessionObj
	 * 
	 * @return 获得的UserSessionObj
	 */
	public UserSessionObj getUserSessionInfo()
	{
		return (UserSessionObj) ServletActionContext.getRequest().getSession().getAttribute("userInfo");
	}

	public void setUserSessionInfo(UserSessionObj sessionObj)
	{
		ServletActionContext.getRequest().getSession().setAttribute("userInfo", sessionObj);
	}
	
	// 是否已经登录
	public boolean IsAuthorizated()
	{
		if( getUserSessionInfo()==null )
		{
			return false;
		}
		
		return true;
	}

	// public String getUserLoginId() {
	// UserSessionObj obj = getUserSessionInfo();
	// return obj == null ? null : obj.getLoginId();
	// }

	/**
	 * 获得当前用户的分页数
	 * 
	 * @return 当前用户的分页数
	 */
	public int getUserPageSize()
	{
		return getUserSessionInfo().getPageSize().intValue();
	}
	
	/**
	 * defaultPageSize
	 */
	public final int defaultPageSize = 10;

	/*
	 * getPageIndex
	 */
	private int pageIndex;

	public int getPageIndex()
	{
		pageIndex = 1;
		if (getRequest().getParameter("pageIndex") != null)
		{
			try
			{
				pageIndex = Integer.parseInt(getRequest().getParameter("pageIndex"));
				if (pageIndex < 1)
				{
					return 1;
				}
			}
			catch (Exception e)
			{
				return 1;
			}
		}

		return pageIndex;
	}

	/*
	 * setPageAttribute
	 */
	public void setPageAttribute(int recordCount, int pageSize)
	{
		Page page = new Page(recordCount, pageSize);
		page.setPageNum(getPageIndex());
		
		getRequest().setAttribute("pageInfo", page);
		getRequest().setAttribute("recordCount", recordCount);
	}
}
