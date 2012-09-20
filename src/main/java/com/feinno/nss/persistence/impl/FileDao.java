package com.feinno.nss.persistence.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javassist.expr.NewArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import sun.tools.tree.ThisExpression;

import com.feinno.nss.core.utils.DateUtil;
import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.FilesOperatorParam;
import com.feinno.nss.model.beans.TYyResource;
import com.feinno.nss.model.beans.TYyResourceType;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.persistence.iface.IFileDao;

public class FileDao extends HibernateDaoSupport implements IFileDao
{
	private static final Logger logger = LoggerFactory.getLogger(UserDao.class);

	public List<TYyResourceType> geTYyResourceTypes(int ownerId, int parentId,
			int state)
	{
		String hql = "from TYyResourceType where  1=1 and ownerId=? and parentId=? and state=?";
		List<Object> values = new ArrayList<Object>();
		values.add(ownerId);
		values.add(parentId);
		values.add(state);
		return this.getHibernateTemplate().find(hql, values.toArray());
	}

	public List<TYyResourceTypeMapping> getTYyResources(int ownerId,
			int parentId, int state)
	{
		String hql = "from TYyResourceTypeMapping where 1=1 and  ownerId=? and resourceTypeId=? and resource.state=? ";
		List<Object> values = new ArrayList<Object>();
		values.add(ownerId);
		values.add(parentId);
		values.add(state);
		return this.getHibernateTemplate().find(hql, values.toArray());
	}

	public List<TYyResourceType> geTYyResourceTypes(int ownerId, int state)
	{
		String hql = "from TYyResourceType where  1=1 and ownerId=? and state=?";
		List<Object> values = new ArrayList<Object>();
		values.add(ownerId);
		values.add(state);
		return this.getHibernateTemplate().find(hql, values.toArray());
	}

	public List<TYyResourceTypeMapping> getTYyResources(int ownerId, int state)
	{
		String hql = "from TYyResourceTypeMapping where 1=1 and  ownerId=? and resource.state=? ";
		List<Object> values = new ArrayList<Object>();
		values.add(ownerId);
		values.add(state);
		return this.getHibernateTemplate().find(hql, values.toArray());
	}

	public List<TYyResourceTypeMapping> getTopResourcesByTime(int ownerId,
			int mappingType, int topNum)
	{
		String hql = "from TYyResourceTypeMapping where ownerId=? and mappingType=? order by createDate desc";
		List<Object> values = new ArrayList<Object>();
		values.add(ownerId);
		values.add(mappingType);
		HibernateTemplate templete = this.getHibernateTemplate();
		templete.setMaxResults(topNum);
		List<TYyResourceTypeMapping> result = templete.find(hql, values
				.toArray());
		for (TYyResourceTypeMapping r : result)
		{
			System.out.println(r.getResource().getTitle());
		}
		if (result == null || result.size() == 0)
		{
			System.out.println("There is no items");
		}
		return result;
	}

	public void updateFile(FilesOperatorParam fop)
			throws BusinessException
	{
		try
		{
			if (fop.isResourceType())
			{
				TYyResourceType rt = (TYyResourceType) this
						.getHibernateTemplate().load(TYyResourceType.class,
								new Integer(fop.getId()));
				rt.setState(fop.getState());
				if(fop.getName() != null && fop.getName().length() >0){
					rt.setName(fop.getName());
				}
				rt.setCreateDate(DateUtil.getNowTimestamp());
				this.getHibernateTemplate().update(rt);
			}
			else
			{
				TYyResource r = (TYyResource) this.getHibernateTemplate().load(
						TYyResource.class, new Integer(fop.getId()));
				r.setState(fop.getState());
				if(fop.getName() != null && fop.getName().length() >0){
					r.setTitle(fop.getName());
				}
				r.setCreateDate(DateUtil.getNowTimestamp());
				this.getHibernateTemplate().update(r);
			}
		}
		catch (DataAccessException e)
		{
			if (logger.isErrorEnabled())
			{
				logger.error("FileDao.deleteFileʧ��", e);
			}

			if (fop.isResourceType())
			{
				throw new BusinessException("更新状态失败 Id:" + fop.getId(), e);
			}
			else
			{
				throw new BusinessException("更新状态失败 Id:" + fop.getId(), e);
			}
		}
	}
	
}
