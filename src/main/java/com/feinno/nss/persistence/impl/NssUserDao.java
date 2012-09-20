package com.feinno.nss.persistence.impl;

import java.util.List;

import org.hibernate.Query;

import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.UserExt;
import com.feinno.nss.persistence.iface.INssUserDao;

public class NssUserDao extends BaseDao<TYyUser> implements INssUserDao
{
	public List<UserExt> getAttentionUsers(int userId, int pageIndex, int pageSize)
	{
		String hql = "select "
				+ " new com.feinno.nss.model.beans.UserExt"
				+ " ("
				+ " u"
				+ " ,(select count(ua.id.userId) from TYyUserAttention ua where ua.id.userId=u.id and ua.id.type=1)"
				+ " ,(select count(ua.id.targetId) from TYyUserAttention ua where ua.id.targetId=u.id and ua.id.type=1)"
				+ " ,(select count(rm.id) from TYyResourceTypeMapping rm where rm.ownerId=u.id and rm.permission=0 and rm.mappingType=0) "
				+ " )"
				+ " from TYyUser u "
				+ " where u.id in "
				+ " (select ua.id.targetId from TYyUserAttention ua where ua.id.userId=? and ua.id.type=1)";
		Query query = this.getSession().createQuery(hql);
		query.setParameter(0, userId);
		if (pageIndex >= 0 && pageSize > 0)
		{
			query.setFirstResult(pageIndex * pageSize);
			query.setMaxResults(pageSize);
		}

		List<UserExt> result = query.list();
		// for (UserExt ueExt : result)
		// {
		// System.out.println("test:" + ueExt.getUser().getUserName());
		// }
		return result;
	}

	public int getAttentionUsersCount(int userId)
	{
		int count = 0;
		String sql = "SELECT COUNT(*) FROM T_YY_UserAttention WHERE UserID=?";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		count = Integer.parseInt(query.uniqueResult().toString());
		return count;
	}

	// type 1: 人 2:组
	public int getFansCount(int id, int type)
	{
		int count = 0;
		String sql = "SELECT COUNT(*) FROM T_YY_UserAttention WHERE TargetId=? AND TYPE=?";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, id);
		query.setParameter(1, type);
		count = Integer.parseInt(query.uniqueResult().toString());
		return count;
	}

	public int cancelAttentionUser(int userId, int targetId)
	{
		String sql = "DELETE FROM T_YY_UserAttention WHERE UserID=? AND TargetID=? AND Type=1";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		query.setParameter(1, targetId);
		int result = query.executeUpdate();
		return result;
	}

	@SuppressWarnings("unchecked")
	public List<UserExt> getGroupMembers(int groupId, int pageIndex, int pageSize)
	{
		String hql = "select "
				+ " new com.feinno.nss.model.beans.UserExt"
				+ " ("
				+ " u"
				+ " ,(select count(ua.id.userId) from TYyUserAttention ua where ua.id.userId=u.id)"
				+ " ,(select count(ua.id.targetId) from TYyUserAttention ua where ua.id.targetId=u.id)"
				+ " ,(select count(rm.id) from TYyResourceTypeMapping rm where rm.ownerId=u.id and rm.permission=0 and rm.mappingType=0) "
				+ " ,(select ugm.roleType from TYyUserGroupMapping ugm where ugm.id.userId=u.id and ugm.id.userGroupId=?)"
				+ " ," + groupId
				+ " )"
				+ " from TYyUser u "
				+ " where u.id in "
				+ " (select ugmp.id.userId from TYyUserGroupMapping ugmp where ugmp.id.userGroupId=?)";

		Query query = this.getSession().createQuery(hql);
		query.setParameter(0, groupId);
		query.setParameter(1, groupId);
		if (pageIndex >= 0 && pageSize > 0)
		{
			query.setFirstResult(pageIndex * pageSize);
			query.setMaxResults(pageSize);
		}

		List<UserExt> result = query.list();

		// Object[] parms = new Object[] { groupId, groupId };
		// List<UserExt> result = this.getHibernateTemplate().find(hql, parms);
		return result;
	}

	public int getGroupMembersCount(int groupId)
	{
		String hql = "select count(ugm.id.userGroupId) from TYyUserGroupMapping ugm where ugm.id.userGroupId=?";
		Object[] parms = new Object[] { groupId };
		Object result = this.getHibernateTemplate().find(hql, parms).get(0);
		return Integer.parseInt(result.toString());
	}

	public List<UserExt> getGroupFans(int groupId, int pageIndex, int pageSize)
	{
		String hql = "select "
				+ " new com.feinno.nss.model.beans.UserExt"
				+ " ("
				+ " u"
				+ " ,(select count(ua.id.userId) from TYyUserAttention ua where ua.id.userId=u.id)"
				+ " ,(select count(ua.id.targetId) from TYyUserAttention ua where ua.id.targetId=u.id)"
				+ " ,(select count(rm.id) from TYyResourceTypeMapping rm where rm.ownerId=u.id and rm.permission=0 and rm.mappingType=0) "
				+ " ,(select ugm.roleType from TYyUserGroupMapping ugm where ugm.id.userId=u.id and ugm.id.userGroupId=?)"
				+ " ," + groupId
				+ " )"
				+ " from TYyUser u "
				+ " where u.id in "
				+ " (select tua.id.userId from TYyUserAttention tua where tua.id.type=2 and tua.id.targetId=?)";

		Query query = this.getSession().createQuery(hql);
		query.setParameter(0, groupId);
		query.setParameter(1, groupId);
		if (pageIndex >= 0 && pageSize > 0)
		{
			query.setFirstResult(pageIndex * pageSize);
			query.setMaxResults(pageSize);
		}

		List<UserExt> result = query.list();

		// Object[] parms = new Object[] { groupId, groupId };
		// List<UserExt> result = this.getHibernateTemplate().find(hql, parms);
		return result;
	}

	public int getGroupFansCount(int groupId)
	{
		String hql = "select count(ua.id.targetId) from TYyUserAttention ua where ua.id.targetId=? and ua.id.type=2";
		Object[] parms = new Object[] { groupId };
		Object result = this.getHibernateTemplate().find(hql, parms).get(0);
		return Integer.parseInt(result.toString());
	}
	
	public int getViewSortNo(int id){	// 访问排名
		String hql = "select count(*)+1 from TYyUser u1 where u1.homePageViewCount<(select u2.homePageViewCount from TYyUser u2 where u2.id=?)";
		Object[] params = new Object[1];
		params[0] = id;
		try
		{
		return (int)this.getCount(hql, params);
		}
		catch(Exception ex){
			String err = ex.getMessage();
			return -1;
		}
	}
}
