package com.feinno.nss.framework.controller.action.user;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.json.annotations.JSON;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.UserExt;

public class NssUserAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(NssUserAction.class);
	private List<TYyUser> users;
	private int userId;
	private int targetId;
	private final int PageSize = 10;
	private List<UserExt> myAttentionUsers;
	private int result;// ajax结果

	@JSON(serialize = false)
	public List<TYyUser> getUsers()
	{
		return this.users;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
	}

	@JSON(serialize = false)
	public int getUserId()
	{
		if (this.userId == 0)
		{
			this.userId = 1;
		}
		return this.userId;
	}

	public void setTargetId(int targetId)
	{
		this.targetId = targetId;
	}

	@JSON(serialize = false)
	public int getTargetId()
	{
		return this.targetId;
	}

	@JSON(serialize = false)
	public List<UserExt> getMyAttentionUsers()
	{
		return this.myAttentionUsers;
	}

	public void setMyAttentionUsers(List<UserExt> myAttentionUsers)
	{
		this.myAttentionUsers = myAttentionUsers;
	}

	public int getResult()
	{
		return this.result;
	}

	public void setResult(int result)
	{
		this.result = result;
	}

	public String quaryAttentionUsers()
	{
		String res = SUCCESS;
		try
		{
			// 分页参数
			String pageIndexStr = getRequest().getParameter("pageIndex");
			int pageIndex = 0;
			if (pageIndexStr != null)
			{
				pageIndex = Integer.parseInt(pageIndexStr) - 1;
			}

			// 保存分页信息
			int recordCount = Factory.getNssUserService().getAttentionUsersCount(this.getUserId());
			Page page = new Page(recordCount, PageSize);
			page.setPage(pageIndex + 1);

			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("recordCount", recordCount);

			this.myAttentionUsers = Factory.getNssUserService().getAttentionUsers(this.getUserId(), pageIndex, PageSize);
		}
		catch (Exception e)
		{
			logger.error("获取用户关注用户失败", e);
		}
		return res;
	}

	public String cancelAttentionUser()
	{
		String res = SUCCESS;
		try
		{
			//Factory.getNssUserService().cancelAttentionUser(this.getUserId(), this.getTargetId());
			Factory.getUserGroupService().deleteUserAttentionMapping(this.getUserId(), this.getTargetId(), 1);
			this.result = 1;
		}
		catch (Exception e)
		{
			logger.error("取消关注失败", e);
			this.result = 0;
		}
		return res;
	}

	public String addAttentionUser()
	{
		String res = SUCCESS;
		try
		{
			Factory.getUserGroupService().addUserAttentionMapping(this.getUserId(), this.getTargetId(), 1);
			this.result = 1;
		}
		catch (Exception e)
		{
			this.result = 0;
			logger.error("添加关注失败", e);
		}
		return res;
	}
}
