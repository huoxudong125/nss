package com.feinno.nss.framework.business.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.framework.business.iface.INssUserService;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.UserExt;
import com.feinno.nss.persistence.iface.INssUserDao;

public class NssUserService implements INssUserService
{

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	INssUserDao nssUserDao;

	public void setNssUserDao(INssUserDao nssUserDao)
	{
		this.nssUserDao = nssUserDao;
	}

	public INssUserDao getNssUserDao()
	{
		return this.nssUserDao;
	}

	public List<UserExt> getAttentionUsers(int userId, int pageIndex, int pageSize)
	{
		return this.nssUserDao.getAttentionUsers(userId, pageIndex, pageSize);
	}

	public int getAttentionUsersCount(int userId)
	{
		return this.nssUserDao.getAttentionUsersCount(userId);
	}

	public int getFansCount(int id, int type)
	{
		return this.nssUserDao.getFansCount(id, type);
	}

	public int cancelAttentionUser(int userId, int targetId)
	{
		return this.nssUserDao.cancelAttentionUser(userId, targetId);
	}

	public List<UserExt> getGroupMembers(int groupId, int pageIndex, int pageSize)
	{
		return this.nssUserDao.getGroupMembers(groupId, pageIndex, pageSize);
	}

	public List<UserExt> getGroupFans(int groupId, int pageIndex, int pageSize)
	{
		return this.nssUserDao.getGroupFans(groupId, pageIndex, pageSize);
	}

	public int getGroupMembersCount(int groupId)
	{
		return this.nssUserDao.getGroupMembersCount(groupId);
	}

	public int getGroupFansCount(int groupId)
	{
		return this.nssUserDao.getGroupFansCount(groupId);
	}
	
	public int getViewSortNo(int id){	// 访问排名
		return nssUserDao.getViewSortNo(id);
	}
}
