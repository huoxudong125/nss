package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.feinno.nss.model.beans.UserGroupExt;

public interface IUserGroupDao
{
	List<UserGroupExt> getUserAttentionGroups(int userId, int pageIndex, int pageSize);

	int getUserAttentionGroupsCount(int userId);

	int cancelAttentionGroup(int userId, int groupId);
	
	TYyUserGroup getGroupById(int groupId);

	long getUsesGroupCount(int userId);

	List getUsesGroupbyPage(int userId, int offset, int pageSize);
	
	void createGroup(TYyUserGroup group)throws BusinessException;
	void updateGroup(TYyUserGroup group)throws BusinessException;
	void deleteGroup(int groupId,int userId)throws BusinessException;
	void deleteGroupMapping(int groupId,int userId) throws BusinessException;
	
	int addMember(String memberName,int userGroupId) throws BusinessException;
}
