package com.feinno.nss.framework.business.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.business.iface.IUserGroupService;
import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserAttentionId;
import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.feinno.nss.model.beans.TYyUserGroupMapping;
import com.feinno.nss.model.beans.TYyUserGroupMappingId;
import com.feinno.nss.model.beans.UserGroupExt;
import com.feinno.nss.persistence.iface.IUserAttentionMappingDao;
import com.feinno.nss.persistence.iface.IUserGroupDao;
import com.feinno.nss.persistence.iface.IUserGroupMappingDao;

public class UserGroupService implements IUserGroupService
{

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	private IUserGroupDao userGroupDao;
	private IUserGroupMappingDao userGroupMappingDao;
	private IUserAttentionMappingDao userAttentionMappinDao;

	public void setUserGroupDao(IUserGroupDao userGroupDao)
	{
		this.userGroupDao = userGroupDao;
	}

	public IUserGroupDao getUserGroupDao()
	{
		return this.userGroupDao;
	}

	public void setUserGroupMappingDao(IUserGroupMappingDao userGroupMappingDao)
	{
		this.userGroupMappingDao = userGroupMappingDao;
	}

	public IUserGroupMappingDao getUserGroupMappingDao()
	{
		return this.userGroupMappingDao;
	}

	public void setUserAttentionMappinDao(IUserAttentionMappingDao userAttentionMappinDao)
	{
		this.userAttentionMappinDao = userAttentionMappinDao;
	}

	public IUserAttentionMappingDao getUserAttentionMappinDao()
	{
		return this.userAttentionMappinDao;
	}

	public List<UserGroupExt> getUserAttentionGroups(int userId)
	{
		return userGroupDao.getUserAttentionGroups(userId, 0, 0);
	}

	public List<UserGroupExt> getUserAttentionGroups(int userId, int pageIndex, int pageSize)
	{
		return userGroupDao.getUserAttentionGroups(userId, pageIndex, pageSize);
	}

	public int cancelAttentionGroup(int userId, int groupId)
	{
		return userGroupDao.cancelAttentionGroup(userId, groupId);
	}

	public int getUserAttentionGroupsCount(int userId)
	{
		return userGroupDao.getUserAttentionGroupsCount(userId);
	}

	public TYyUserGroup getSingleGroup(int groupId)
	{
		return userGroupDao.getGroupById(groupId);
	}

	public Page getPage(int pagenum, int pagesize, int userID) throws Exception
	{

		Page vpage = null;

		long count = getCount(userID);

		vpage = new Page(count, pagesize);

		if (pagenum != 0)
		{
			vpage.setPage(pagenum);
		}
		return vpage;
	}

	public List<UserGroupExt> getList(Page page, int userID) throws Exception
	{
		int pageSize = page.getPageSize();
		int pageNow = page.getPage();
		int offset = (pageNow * pageSize - pageSize);

		List<UserGroupExt> listGroup = new ArrayList<UserGroupExt>();

		List rs = getUserGroupDao().getUsesGroupbyPage(userID, offset, pageSize);

		if (rs == null || rs.size() == 0)
		{
			return null;
		}

		Iterator iterator = rs.iterator();
		while (iterator.hasNext())
		{
			Object[] o = (Object[]) iterator.next();
			// 赋值
			UserGroupExt tmpUserGroupExt = new UserGroupExt();

			tmpUserGroupExt.setId(Integer.parseInt(o[0].toString()));
			tmpUserGroupExt.setName(o[1].toString());
			tmpUserGroupExt.setDescription(o[2].toString());
			tmpUserGroupExt.setCreateDate(o[3].toString());
			tmpUserGroupExt.setCreaterUserId(Integer.parseInt(o[4].toString()));
			tmpUserGroupExt.setCreator(o[5].toString());
			tmpUserGroupExt.setCreaterUserName(o[5].toString());
			tmpUserGroupExt.setMembersCount(Integer.parseInt(o[6].toString()));
			tmpUserGroupExt.setAttentionCount(Integer.parseInt(o[7].toString()));
			tmpUserGroupExt.setManagers(o[8].toString());
			tmpUserGroupExt.setOpencnt(Integer.parseInt(o[9].toString()));

			// add to result
			listGroup.add(tmpUserGroupExt);
		}
		return listGroup;
	}

	public long getCount(int userId)
	{
		return getUserGroupDao().getUsesGroupCount(userId);
	}

	public int createGroup(TYyUserGroup group)
	{
		int result = 0;
		try
		{
			
			group.setCreateDate(new Timestamp(System.currentTimeMillis()));
			group.setCreaterUserId(1);// 默认 当前是1 的用户
			group.setIsVerify(0);//默认不认证
			group.setLogoImage("http://localhost:8080/");

			getUserGroupDao().createGroup(group);
			result = 1;
		}
		catch (BusinessException e)
		{
			logger.error("插入用户组失败", e);
		}
		return result;
	}

	public int updateGroup(TYyUserGroup group)
	{
		int result = 0;
		try
		{
			getUserGroupDao().updateGroup(group);
			result = 1;
		}
		catch (BusinessException e)
		{
			logger.error("更新用户组失败。", e);
		}
		return result;
	}

	public int deleteGroup(int groupId, int userId)
	{
		int result = 0;
		try
		{
			getUserGroupDao().deleteGroup(groupId, userId);
			result = 1;
		}
		catch (BusinessException e)
		{
			logger.error("删除用户组失败。", e);
		}
		return result;
	}
	
	public int addMember(String memberName, int groupId)
	{
		int result = 0;
		try
		{
			
			result =getUserGroupDao().addMember(memberName, groupId);
		}
		catch (BusinessException e)
		{
			logger.error("删除用户组失败。", e);
		}
		return result;
	}

	public int deleteGroupMapping(int groupId, int userId)
	{
		int result = 0;
		try
		{
			getUserGroupDao().deleteGroupMapping(groupId, userId);
			result = 1;
		}
		catch (BusinessException e)
		{
			logger.error("删除用户失败。", e);
		}
		return result;
	}

	public List<TYyUserGroupMapping> getAllTYyUserGroupMapping()
	{
		this.userGroupMappingDao.getAll();
		return null;
	}

	public Boolean deleteUserAttentionMapping(int userId, int targetId, int type)
	{
		TYyUserAttentionId id = new TYyUserAttentionId(userId, targetId, type);
		TYyUserAttention ua = new TYyUserAttention(id);
		return this.userAttentionMappinDao.delete(ua);
	}

	public TYyUserAttention addUserAttentionMapping(int userId, int targetId, int type)
	{
		TYyUserAttentionId id = new TYyUserAttentionId(userId, targetId, type);
		TYyUserAttention ua = new TYyUserAttention(id);
		TYyUserAttention result = (TYyUserAttention) this.userAttentionMappinDao.saveOrUpdate(ua);
		return result;
	}

	public TYyUserGroupMapping updateUserGroupMapping(int userId, int groupId, int type)
	{
		TYyUserGroupMappingId id = new TYyUserGroupMappingId(userId, groupId);

		Timestamp now = new Timestamp(System.currentTimeMillis());// 获取系统当前时间
		TYyUserGroupMapping ugm = new TYyUserGroupMapping(id, now, type);
		@SuppressWarnings("unchecked")
		TYyUserGroupMapping result = (TYyUserGroupMapping) this.userGroupMappingDao.saveOrUpdate(ugm);
		return result;
	}
	
	public List<TYyUser> getAdmins( int groupId ){
		String hql = "from TYyUserGroupMapping where UserGroupId=?";
		Object[] params = new Object[]{groupId};
		List<TYyUserGroupMapping> ugmList = this.userGroupMappingDao.getList(hql, params);
		
		List<TYyUser> list = new ArrayList<TYyUser>();
		for( TYyUserGroupMapping ugm : ugmList ){
			list.add(ugm.getUser());			
		}
		return list;
	}
	
	public int getGroupMemberCount(int groupId){
		String hql = "select count(*) from TYyUserGroupMapping where UserGroupId=?";
		Object[] params = new Object[]{groupId};
		return (int)this.userGroupMappingDao.getCount(hql, params);
	}
}
