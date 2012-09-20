package com.feinno.nss.framework.business.iface;

import java.util.List;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.feinno.nss.model.beans.TYyUserGroupMapping;
import com.feinno.nss.model.beans.UserGroupExt;

public interface IUserGroupService
{
	List<UserGroupExt> getUserAttentionGroups(int userId);

	List<UserGroupExt> getUserAttentionGroups(int userId, int pageIndex, int pageSize);

	int getUserAttentionGroupsCount(int userId);

	int cancelAttentionGroup(int userId, int groupId);

	TYyUserGroup getSingleGroup(int groupId);

	Boolean deleteUserAttentionMapping(int userId, int targetId, int type);
	
	TYyUserAttention addUserAttentionMapping(int userId, int targetId, int type);
	
	TYyUserGroupMapping updateUserGroupMapping(int userId, int groupId, int type);

	List<TYyUserGroupMapping> getAllTYyUserGroupMapping();

	int createGroup(TYyUserGroup group);

	int updateGroup(TYyUserGroup group);

	int deleteGroup(int groupId, int userId);

	int deleteGroupMapping(int groupId, int userId);
	
	int addMember(String memberName,int groupId);

	Page getPage(int pagenum, int pagesize, int userID) throws Exception;

	List<UserGroupExt> getList(Page page, int userID) throws Exception;
	
	List<TYyUser> getAdmins( int groupId );
	
	int getGroupMemberCount(int groupId);
}
