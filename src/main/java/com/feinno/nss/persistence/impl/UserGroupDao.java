package com.feinno.nss.persistence.impl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.feinno.nss.model.beans.TYyUserGroupMapping;
import com.feinno.nss.model.beans.TYyUserGroupMappingId;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserGroupExt;
import com.feinno.nss.persistence.iface.IUserGroupDao;

public class UserGroupDao extends HibernateDaoSupport implements IUserGroupDao
{
	public List<UserGroupExt> getUserAttentionGroups(int userId, int pageIndex, int pageSize)
	{
		List<UserGroupExt> groupExts = new ArrayList<UserGroupExt>();

		String sql =
				"SELECT g.ID, g.GroupCode,g.Name,g.LogoImage, g.Description,g.CreateDate, u.UserName"
						+
						",(SELECT COUNT(*) FROM T_YY_UserGroupMapping WHERE UserGroupID=g.ID) AS MembersCount"
						+
						",(SELECT COUNT(*) FROM T_YY_UserAttention WHERE TargetID=g.ID AND TYPE=2) AS AttentionCount"

						+ ",("
						+ " SELECT IFNULL(GROUP_CONCAT(m.UserName SEPARATOR ' ' ),'') "
						+ " FROM "
						+ " ("
						+ " SELECT um.*,us.UserName FROM T_YY_UserGroupMapping um INNER JOIN  T_YY_User us WHERE um.RoleType=1 AND um.UserID=us.ID"
						+ " ) m"
						+ " WHERE g.ID =m.UserGroupID ) AS Managers"
						+ " ,(SELECT COUNT(*) FROM T_YY_ResourceType WHERE typeFlag=1 AND IsOpen=1 AND State=0 AND OwnerId=g.ID ) AS ShareCount"
						+ " FROM T_YY_UserGroup g,T_YY_User u ,T_YY_UserAttention ua"
						+ " WHERE "
						+ " g.CreaterUserID=u.ID"
						+ " AND ua.UserID=?"
						+ " AND ua.Type=2"
						+ " AND ua.TargetID=g.ID";

		Collection result = new ArrayList();
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		if (pageIndex >= 0 && pageSize > 0)
		{
			query.setFirstResult(pageIndex * pageSize);
			query.setMaxResults(pageSize);
		}
		result = query.list();

		ArrayList sList = (ArrayList) result;
		Iterator iterator = sList.iterator();
		while (iterator.hasNext())
		{
			Object[] o = (Object[]) iterator.next();
			// 赋值
			System.out.print(o[0].toString());
			System.out.print(" | ");
			System.out.print(o[1].toString());
			System.out.print(" | ");
			System.out.print(o[2].toString());
			System.out.print(" | ");
			System.out.print(o[3].toString());
			System.out.print(" | ");
			System.out.print(o[4].toString());
			System.out.print(" | ");
			System.out.print(o[5].toString());
			System.out.print(" | ");
			System.out.print(o[6].toString());
			System.out.print(" | ");
			System.out.print(o[7].toString());

			UserGroupExt tmpUserGroupExt = new UserGroupExt();
			tmpUserGroupExt.setId(Integer.parseInt(o[0].toString()));
			tmpUserGroupExt.setGroupCode(o[1].toString());
			tmpUserGroupExt.setName(o[2].toString());
			tmpUserGroupExt.setLogoImage(o[3].toString());
			tmpUserGroupExt.setDescription(o[4].toString());

			String date = o[5].toString();
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			Timestamp createDate = Timestamp.valueOf(date);
			String dateStr = df.format(createDate);

			tmpUserGroupExt.setCreateDate(dateStr);
			tmpUserGroupExt.setCreator(o[6].toString());
			tmpUserGroupExt.setMembersCount(Integer.parseInt(o[7].toString()));
			tmpUserGroupExt.setAttentionCount(Integer.parseInt(o[8].toString()));
			String managers = o[9].toString();
			tmpUserGroupExt.setManagers(managers);
			tmpUserGroupExt.setOpencnt(Integer.parseInt(o[10].toString()));
			System.out.print(" | ");
			System.out.print(managers);
			System.out.println("");
			// add to result
			groupExts.add(tmpUserGroupExt);
		}

		return groupExts;
	}

	public int getUserAttentionGroupsCount(int userId)
	{
		int count = 0;
		String sql = "SELECT COUNT(*) FROM T_YY_UserAttention WHERE UserID=? AND TYPE=2";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		count = Integer.parseInt(query.uniqueResult().toString());
		return count;
	}

	public String getUserGroupManagers(int groupId)
	{
		String managers = "";
		String sql = "SELECT UserName FROM T_YY_User "
				+ "WHERE ID IN "
				+ "("
				+ "SELECT um.UserID FROM T_YY_UserGroupMapping um  WHERE um.UserGroupID=? AND um.RoleType=1 "
				+ ")";
		Collection result = new ArrayList();
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, groupId);
		result = query.list();

		ArrayList sList = (ArrayList) result;
		Iterator iterator = sList.iterator();
		while (iterator.hasNext())
		{
			managers += iterator.next().toString();
			managers += " ";
		}

		return managers;
	}

	public int cancelAttentionGroup(int userId, int groupId)
	{
		String sql = "DELETE FROM T_YY_UserAttention WHERE UserID=? AND TargetID=? AND Type=2";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		query.setParameter(1, groupId);
		int result = query.executeUpdate();
		return result;
	}

	/*
	 * 
	 * 
	 * 
	 * 
	 * SELECT a.ID,a.Name,a.Description,a.CreateDate, (SELECT COUNT(*) FROM
	 * T_YY_UserGroupMapping WHERE userGroupID =a.ID) UserCnt, (SELECT COUNT(*)
	 * FROM T_YY_UserAttention WHERE TargetID =a.ID AND TYPE=2 ) AttentionCnt,
	 * (SELECT IFNULL(GROUP_CONCAT(c.UserName SEPARATOR ' ' ),'') FROM ( SELECT
	 * b.*,f.UserName FROM T_YY_UserGroupMapping b INNER JOIN T_YY_User f WHERE
	 * b.RoleType=1 AND b.UserID=f.ID ) c WHERE a.ID =c.UserGroupID ) AS
	 * useNames, (SELECT COUNT(*) FROM T_YY_ResourceType WHERE typeFlag=1 AND
	 * IsOpen=1 AND State=0 AND OwnerId=a.ID ) opencnt FROM T_YY_UserGroup a;
	 */
	public long getUsesGroupCount(int userId)
	{
		String sql = " SELECT COUNT(*) FROM T_YY_UserGroup a INNER JOIN T_YY_UserGroupMapping g "
				+ " ON a.ID =g.UserGroupID WHERE g.UserID =? ;";

		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);

		Long count;
		count = Long.parseLong(query.uniqueResult().toString());

		return count;
	}

	@SuppressWarnings("unchecked")
	public List getUsesGroupbyPage(int userId, int offset, int pageSize)
	{
		String sql =
				" SELECT a.ID,a.Name,a.Description,a.CreateDate,a.CreaterUserID,"
						+ " (SELECT UserName FROM T_YY_User WHERE ID = a.CreaterUserID) CreaterUserName,"
						+ " (SELECT COUNT(*) FROM T_YY_UserGroupMapping WHERE userGroupID =a.ID) UserCnt,"
						+ " (SELECT COUNT(*) FROM T_YY_UserAttention WHERE TargetID =a.ID AND TYPE=2 ) AttentionCnt,"
						+ " (SELECT IFNULL(GROUP_CONCAT(c.UserName SEPARATOR ' ' ),'') "
						+ " FROM "
						+ " ("
						+ "	SELECT b.*,f.UserName FROM T_YY_UserGroupMapping b INNER JOIN  T_YY_User f WHERE b.RoleType=1 AND b.UserID=f.ID"
						+ " ) c"
						+ " WHERE a.ID =c.UserGroupID ) AS useNames,"
						+ " (SELECT COUNT(*) FROM T_YY_ResourceType WHERE typeFlag=1 AND IsOpen=1 AND State=0 AND OwnerId=a.ID ) opencnt"
						+ " FROM T_YY_UserGroup a  LEFT JOIN T_YY_UserGroupMapping g"
						+ " ON a.ID =g.UserGroupID WHERE g.UserID =?";

		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);

		List sList = query.setFirstResult(offset).setMaxResults(pageSize)
				.list();

		return sList;
	}

	public TYyUserGroup getGroupById(int groupId)
	{
		String sql = "from TYyUserGroup where id=?";
		TYyUserGroup group = (TYyUserGroup) this.getHibernateTemplate().find(sql, groupId).get(0);
		System.out.println(group.getId() + "|" + group.getName()+"|"+group.getCreator().getUserName());
		return group;
	}
	
	public void createGroup(TYyUserGroup group) throws BusinessException
	{
		try
		{
			this.getHibernateTemplate().saveOrUpdate(group);
			int userGroupId =group.getId();
			int userId =group.getCreaterUserId();
			
			TYyUserGroupMappingId  id =new TYyUserGroupMappingId();
			id.setUserGroupId(userGroupId);
			id.setUserId(userId);
			
			TYyUserGroupMapping ugmap =new TYyUserGroupMapping();
			ugmap.setCreateDate(new Timestamp(System.currentTimeMillis()));
			ugmap.setRoleType(2);
			ugmap.setId(id);
			
			this.getHibernateTemplate().saveOrUpdate(ugmap);
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.createGroup失败", e);
			}
			throw new BusinessException("新增用户组,操作失败", e);
		}
		catch (Exception e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.deleteGroup失败", e);
			}
			throw new BusinessException("删除用户组,操作失败,用户组Id：" +  e);
		}
	}
	
	// 0失败 1 成功    2 不存在  3群组不明 4已添加了用户
	public int addMember(String memberName,int userGroupId) throws BusinessException
	{
		try
		{
			String hql ="from TYyUser where UserName=?";
			
			Query query = this.getSession().createQuery(hql);
			query.setParameter(0, memberName);

			List<TYyUser> sList = query.list();
			
			if(sList==null|| sList.size()==0)
			{
				return 2;
			}
			
		    int userId =sList.get(0).getId();
			
			TYyUserGroupMappingId  id =new TYyUserGroupMappingId();
			id.setUserGroupId(userGroupId);
			id.setUserId(userId);
			
			TYyUserGroupMapping checkUgmap =(TYyUserGroupMapping)getHibernateTemplate().get(TYyUserGroupMapping.class, id);
			
			if(checkUgmap !=null)
			{
				return 4;
			}
			
			TYyUserGroupMapping ugmap =new TYyUserGroupMapping();
			ugmap.setCreateDate(new Timestamp(System.currentTimeMillis()));
			ugmap.setRoleType(0);
			ugmap.setId(id);
			
			this.getHibernateTemplate().saveOrUpdate(ugmap);
			
			return 1;
			
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.addMember失败", e);
			}
			//throw new BusinessException("添加组成员,操作失败", e);
			
		}
		catch (Exception e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.addMember失败", e);
			}
			//throw new BusinessException("添加组成员,,操作失败,用户组Id：" +  e);
		}
		return 0;
	}
	
	public void deleteGroup(int groupId,int userId) throws BusinessException
	{
		try
		{
			TYyUserGroupMappingId  id =new TYyUserGroupMappingId();
			id.setUserGroupId(groupId);
			id.setUserId(userId);
			
			TYyUserGroupMapping ugmap =(TYyUserGroupMapping)getHibernateTemplate().get(TYyUserGroupMapping.class, id);
			
			this.getHibernateTemplate().delete(ugmap);
			
			Object u = this.getHibernateTemplate().load(TYyUserGroup.class,
					new Integer(groupId));
			this.getHibernateTemplate().delete(u);
			
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.deleteGroup失败", e);
			}
			throw new BusinessException("删除用户组,操作失败,用户组Id：" + groupId, e);
		}
		catch (Exception e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.deleteGroup失败", e);
			}
			throw new BusinessException("删除用户组,操作失败,用户组Id：" + groupId, e);
		}
	

	}
	
	public void deleteGroupMapping(int groupId,int userId) throws BusinessException
	{
		try
		{
			TYyUserGroupMappingId  id =new TYyUserGroupMappingId();
			id.setUserGroupId(groupId);
			id.setUserId(userId);
			
			TYyUserGroupMapping ugmap =(TYyUserGroupMapping)getHibernateTemplate().get(TYyUserGroupMapping.class, id);
			
			this.getHibernateTemplate().delete(ugmap);
			
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.quitGroup失败", e);
			}
			throw new BusinessException("退出用户组,操作失败,用户组Id：" + groupId, e);
		}

	}
	
	
	public void updateGroup(TYyUserGroup group) throws BusinessException
	{
		try
		{
			this.getHibernateTemplate().saveOrUpdate(group);
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.updateGroup失败  更新用户组,操作失败, 用户组Id:" + group.getId(), e);
			}
		}
		catch (Exception e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("UserGroupDao.updateGroup失败更新用户组,操作失败, 用户组Id:" + group.getId(), e);
			}
		}
	}
}
