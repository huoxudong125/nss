package com.feinno.nss.framework.controller.action.userGroup;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.json.annotations.JSON;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.FilesQuery;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.feinno.nss.model.beans.UserExt;
import com.feinno.nss.model.beans.UserGroupExt;
import com.feinno.nss.model.beans.UserGroupSetting;

public class UserGroupAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(UserGroupAction.class);
	private final int PageSize = 1;// 分页时每页记录数
	private int userId;// 登录用户ID
	private int groupId;// 要查看的群ID
	private List<UserGroupExt> ugList;// 我关注的群
	private TYyUserGroup userGroup;// 群信息
	private UserGroupSetting userGroupSetting;// 群设置
	private List<TYyResourceTypeMapping> resourceTypeMappings;// 最新动态
	private List<FilesQuery> resources;// 群资源
	private String groupManagersString;// 群管理员
	private String groupMembersString;// 群成员字符串
	private List<UserExt> groupMembersExts;// 群成员
	private List<UserExt> groupFans;// 群粉丝
	private int groupMembersCount;// 群成员数
	private int groupFansCount;// 群粉丝数
	private int userRoleTypeInGroup;// 用户在群中的角色类型
	private int tagIndex;// 群详细页面Tag索引
	int result;// ajax异步返回值

	public int getResult()
	{
		return result;
	}

	public void setResult(int result)
	{
		this.result = result;
	}

	@JSON(serialize = false)
	public int getUserId()
	{
		if (this.userId == 0)
		{
			return 1;
		}
		return this.userId;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
	}

	@JSON(serialize = false)
	public int getGroupId()
	{
		return this.groupId;
	}

	public void setGroupId(int groupId)
	{
		this.groupId = groupId;
	}

	@JSON(serialize = false)
	public List<UserGroupExt> getUgList()
	{
		return ugList;
	}

	public void setUgList(List<UserGroupExt> ugList)
	{
		this.ugList = ugList;
	}

	@JSON(serialize = false)
	public TYyUserGroup getUserGroup()
	{
		return userGroup;
	}

	public void setUserGroup(TYyUserGroup userGroup)
	{
		this.userGroup = userGroup;
	}

	@JSON(serialize = false)
	public UserGroupSetting getUserGroupSetting()
	{
		return this.userGroupSetting;
	}

	public void setUserGroupSetting(UserGroupSetting userGroupSetting)
	{
		this.userGroupSetting = userGroupSetting;
	}

	@JSON(serialize = false)
	public List<TYyResourceTypeMapping> getResourceTypeMappings()
	{
		return this.resourceTypeMappings;
	}

	public void setResourceTypeMappings(List<TYyResourceTypeMapping> resourceTypeMappings)
	{
		this.resourceTypeMappings = resourceTypeMappings;
	}

	@JSON(serialize = false)
	public List<FilesQuery> getResources()
	{
		return this.resources;
	}

	public void setResources(List<FilesQuery> resources)
	{
		this.resources = resources;
	}

	@JSON(serialize = false)
	public String getGroupManagersString()
	{
		return this.groupManagersString;
	}

	public void setGroupManagersString(String groupManagersString)
	{
		this.groupManagersString = groupManagersString;
	}

	@JSON(serialize = false)
	public String getGroupMembersString()
	{
		return this.groupMembersString;
	}

	public void setGroupMembersString(String groupMembersString)
	{
		this.groupMembersString = groupMembersString;
	}

	@JSON(serialize = false)
	public List<UserExt> getGroupMembersExts()
	{
		return this.groupMembersExts;
	}

	public void setGroupMembersExts(List<UserExt> groupMembersExts)
	{
		this.groupMembersExts = groupMembersExts;
	}

	@JSON(serialize = false)
	public List<UserExt> getGroupFans()
	{
		return this.groupFans;
	}

	public void setGroupFans(List<UserExt> groupFans)
	{
		this.groupFans = groupFans;
	}

	@JSON(serialize = false)
	public int getGroupMembersCount()
	{
		return this.groupMembersCount;
	}

	public void setGroupMembersCount(int groupMembersCount)
	{
		this.groupMembersCount = groupMembersCount;
	}

	@JSON(serialize = false)
	public int getGroupFansCount()
	{
		return this.groupFansCount;
	}

	public void setGroupFansCount(int groupFansCount)
	{
		this.groupFansCount = groupFansCount;
	}

	@JSON(serialize = false)
	public int getUserRoleTypeInGroup()
	{
		return this.userRoleTypeInGroup;
	}

	public void setUserRoleTypeInGroup(int userRoleTypeInGroup)
	{
		this.userRoleTypeInGroup = userRoleTypeInGroup;
	}

	@JSON(serialize = false)
	public int getTagIndex()
	{
		return this.tagIndex;
	}

	public void setTagIndex(int tagIndex)
	{
		this.tagIndex = tagIndex;
	}

	public String queryUserAttentionGroups()
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
			int recordCount = Factory.getUserGroupService().getUserAttentionGroupsCount(this.getUserId());
			Page page = new Page(recordCount, PageSize);
			page.setPage(pageIndex + 1);

			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("recordCount", recordCount);

			ugList = Factory.getUserGroupService().getUserAttentionGroups(getUserId(), pageIndex, PageSize);
		}
		catch (Exception e)
		{
			logger.error("获取用户关注群失败", e);
		}
		return res;
	}

	public String cancelAttentionGroup()
	{
		String res = SUCCESS;
		try
		{
			Factory.getUserGroupService().cancelAttentionGroup(this.getUserId(), this.getGroupId());
			this.result = 1;
		}
		catch (Exception e)
		{
			logger.error("获取用户关注群失败", e);
			this.result = 0;
		}
		return res;
	}

	private List<UserExt> queryGroupMembers()
	{
		// 分页参数
		String pageIndexStr = getRequest().getParameter("mPageIndex");
		int pageIndex = 0;
		if (pageIndexStr != null)
		{
			pageIndex = Integer.parseInt(pageIndexStr) - 1;
		}
		List<UserExt> result = Factory.getNssUserService().getGroupMembers(this.getGroupId(), pageIndex, PageSize);

		this.groupMembersCount = Factory.getNssUserService().getGroupMembersCount(this.getGroupId());
		Page page = new Page(groupMembersCount, PageSize);
		page.setPage(pageIndex + 1);

		getRequest().setAttribute("mPageInfo", page);

		return result;
	}

	private List<UserExt> queryGroupFans()
	{
		// 分页参数
		String pageIndexStr = getRequest().getParameter("fPageIndex");
		int pageIndex = 0;
		if (pageIndexStr != null)
		{
			pageIndex = Integer.parseInt(pageIndexStr) - 1;
		}
		List<UserExt> result = Factory.getNssUserService().getGroupFans(this.getGroupId(), pageIndex, PageSize);

		this.groupFansCount = Factory.getNssUserService().getGroupFansCount(this.getGroupId());
		Page page = new Page(groupFansCount, PageSize);
		page.setPage(pageIndex + 1);

		getRequest().setAttribute("fPageInfo", page);

		return result;
	}

	public String querySingleGroup()
	{
		String res = SUCCESS;
		try
		{
			this.userGroup = Factory.getUserGroupService().getSingleGroup(this.getGroupId());

			this.userGroupSetting = new UserGroupSetting(this.userGroup.getId(),
					this.userGroup.getIsSmsNotice() > 0,
					this.userGroup.getIsEmailNotice() > 0,
					this.userGroup.getIsFreeAddUser() > 0,
					this.userGroup.getIsFreeUpdateInfo() > 0,
					this.userGroup.getIsOpen() > 0,
					this.userGroup.getIsVerify() > 0);

			this.resourceTypeMappings = Factory.getFileService().getTopResourcesByTime(this.getGroupId(), 1, 10);

			this.resources = Factory.getFileService().getFilesQueries(this.getGroupId(), -1, 0);

			this.groupMembersExts = queryGroupMembers();

			this.groupFans = queryGroupFans();
		}
		catch (Exception e)
		{
			logger.error("获取用户群信息失败", e);
		}
		return res;
	}

	public String updateUserGroupMapping()
	{
		String res = SUCCESS;
		try
		{
			Factory.getUserGroupService().updateUserGroupMapping(this.getUserId(), this.getGroupId(), this.getUserRoleTypeInGroup());
			this.result = 1;
		}
		catch (Exception e)
		{
			this.result = 0;
			logger.error("更新用户与用户群映射信息失败", e);
		}
		return res;
	}

	public String queryGroupList()
	{
		String returnValue = "queryGroupList";
		try
		{
			String userID = getRequest().getParameter("userIDV");
			int uID = Integer.parseInt(userID == null ? "1" : userID);

			String pagenumO = getRequest().getParameter("pageNum");
			int pagenum = 0;
			if (pagenumO != null)
			{
				pagenum = Integer.parseInt(pagenumO);
			}

			Page page = Factory.getUserGroupService().getPage(pagenum, 5, uID);
			List<UserGroupExt> lst = Factory.getUserGroupService().getList(page, uID);

			getRequest().setAttribute("groupList", lst);
			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("userIDV", uID);

		}
		catch (Exception e)
		{
			returnValue = "error";
			logger.error("查询数据错误！", e);
		}

		return returnValue;

	}

	public String groupAdd()
	{
		String returnValue = SUCCESS;

		try
		{
			result = Factory.getUserGroupService().createGroup(userGroup);

			if (result == 0)
			{
				returnValue = ERROR;
			}
		}
		catch (Exception e)
		{
			returnValue = ERROR;
			logger.error("创建用户组失败");
		}

		return returnValue;

	}

	public String groupDelete()
	{
		String returnValue = SUCCESS;
		try
		{
			int userID = 1;
			this.result = Factory.getUserGroupService().deleteGroup(groupId, userID);
		}
		catch (Exception e)
		{
			this.result = 0;
			returnValue = ERROR;
			logger.error("删除用户组失败" + e);
		}
		return returnValue;

	}

	public String groupUpdate()
	{
		String returnValue = SUCCESS;
		try
		{
			this.userGroup = Factory.getUserGroupService().getSingleGroup(this.getGroupId());
			userGroup.setIsEmailNotice(this.userGroupSetting.getIsEmailNotice() ? 1 : 0);
			userGroup.setIsFreeAddUser(this.userGroupSetting.getIsFreeAddUser() ? 1 : 0);
			userGroup.setIsFreeUpdateInfo(this.userGroupSetting.getIsFreeUpdateInfo() ? 1 : 0);
			userGroup.setIsOpen(this.userGroupSetting.getIsOpen() ? 1 : 0);
			userGroup.setIsSmsNotice(this.userGroupSetting.getIsSmsNotice() ? 1 : 0);
			this.result = Factory.getUserGroupService().updateGroup(userGroup);
		}
		catch (Exception e)
		{
			this.result = 0;
			returnValue = ERROR;
			logger.error("修改用户组失败");
		}
		return returnValue;

	}

	public String deleteGroupMapping()
	{
		String returnValue = SUCCESS;
		try
		{
			this.result = Factory.getUserGroupService().deleteGroupMapping(this.getGroupId(), this.getUserId());
		}
		catch (Exception e)
		{
			this.result = 0;
			returnValue = ERROR;
			logger.error("退出用户组失败");
		}
		return returnValue;
	}

}
