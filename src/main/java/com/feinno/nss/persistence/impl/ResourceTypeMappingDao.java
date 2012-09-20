package com.feinno.nss.persistence.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.persistence.iface.IResourceTypeMappingDao;

public class ResourceTypeMappingDao extends BaseDao<TYyResourceTypeMapping> implements IResourceTypeMappingDao {

	// type :  0- 用户    1- 群
	public int getSharedResCount(int id, int type) {
		
		String hql = "select count(*) from TYyResourceTypeMapping where Permission=0 and OwnerId=? and MappingType=?";
		Object[] objs = new Object[2];
		objs[0] = id;
		objs[1] = type;
				
		return (int)this.getCount(hql, objs);
	}
	
	public int getSharedSortNo(int id, int type)
	{
		int count = 0;
		Session session = null;
		try
		{
			session = this.getSession();
			String hql = "call getShareSortNo(?,?)";
			Query query = session.createSQLQuery(hql);
			query.setInteger(0, id);
			query.setInteger(1, type);

			count = Integer.parseInt(query.uniqueResult().toString());
		}
		catch (Exception e)
		{
			count = 0;
		}
		finally
		{
			this.closeSession(session);
		}

		return count;
	}
	
	public List<TYyResourceTypeMapping> GetRecentShare(int id, int type){
		String hql = "from TYyResourceTypeMapping where Permission=0 and OwnerId=? and MappingType=? order by CreateDate desc";
		Object[] params = new Object[2];
		params[0] = id;
		params[1] = type;
		return this.getList(hql, params);		                             
		
	}
}
