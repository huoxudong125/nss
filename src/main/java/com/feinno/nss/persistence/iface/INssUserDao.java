package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.UserExt;

public interface INssUserDao
{
	List<UserExt> getAttentionUsers(int userId, int pageIndex, int pageSize);

	int getAttentionUsersCount(int userId);

	int getFansCount(int id, int type);

	int cancelAttentionUser(int userId, int targetId);

	List<UserExt> getGroupMembers(int groupId, int pageIndex, int pageSize);

	List<UserExt> getGroupFans(int groupId, int pageIndex, int pageSize);

	int getGroupMembersCount(int groupId);

	int getGroupFansCount(int groupId);	
	
	int getViewSortNo(int id);
}
