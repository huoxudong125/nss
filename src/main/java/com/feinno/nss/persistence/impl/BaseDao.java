package com.feinno.nss.persistence.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.feinno.nss.persistence.iface.IBaseDao;

@SuppressWarnings("unchecked")
public class BaseDao<T> extends HibernateDaoSupport implements IBaseDao
{
	private static final Log logger = LogFactory.getLog(BaseDao.class);
	private boolean isDesc = false;
	private String orderPropertyName = "";

	public T save(Object bean)
	{
		try
		{
			getHibernateTemplate().save(bean);
			return (T) bean;
		}
		catch (Exception e)
		{
			logger.error("save error!", e);
			return null;
		}
	}

	public T saveOrUpdate(Object bean)
	{
		try
		{
			getHibernateTemplate().saveOrUpdate(bean);
			return (T) bean;
		}
		catch (Exception e)
		{
			logger.error("saveOrUpdate error!", e);
			return null;
		}
	}

	public boolean delete(Object bean)
	{
		try
		{
			getHibernateTemplate().delete(bean);
			return true;
		}
		catch (Exception e)
		{
			logger.error("delete error!", e);
		}

		return false;
	}

	public T getById(Serializable id)
	{
		try
		{
			return (T) getHibernateTemplate().get(typeClass(), id);
		}
		catch (Exception e)
		{
			logger.error("getById error!", e);
		}

		return null;
	}

	public boolean deleteById(Serializable id)
	{
		T t = getById(id);
		if (t == null)
		{
			return false;
		}

		return delete(t);
	}

	public List<T> getAll()
	{
		try
		{
			String hql = "from " + getTableName();
			if (!getOrderPropertyName().equals(""))
			{
				hql += " order by model." + getOrderPropertyName();
				if (getIsDesc())
				{
					hql += " DESC";
				}
			}

			return getHibernateTemplate().find(hql);
		}
		catch (Exception e)
		{
			logger.error("getAll error!", e);
		}

		return new ArrayList<T>();
	}

	public long getCount(String hql, Object[] params)
	{
		long count = 0;
		Session session = null;
		try
		{
			session = this.getSession();
			Query query = session.createQuery(hql);
			if (params != null)
			{
				for (int i = 0; i < params.length; i++)
				{
					query.setParameter(i, params[i]);
				}
			}

			count = Long.parseLong(query.uniqueResult().toString());
		}
		catch (Exception e)
		{
			logger.error("getCount error!", e);
		}
		finally
		{
			this.closeSession(session);
		}

		return count;
	}

	public List<T> getList(String hql, Object[] params)
	{
		List<T> list = new ArrayList<T>();
		Session session = null;
		try
		{
			session = this.getSession();
			Query query = session.createQuery(hql);
			if (params != null)
			{
				for (int i = 0; i < params.length; i++)
				{
					query.setParameter(i, params[i]);
				}
			}

			list = query.list();
		}
		catch (Exception e)
		{
			logger.error("getList error!", e);
		}
		finally
		{
			this.closeSession(session);
		}

		return list;
	}

	public List<T> getPageList(String hql, Object[] params, int pageIndex, int pageSize)
	{
		List<T> list = new ArrayList<T>();
		Session session = null;
		try
		{
			session = this.getSession();
			Query query = session.createQuery(hql);
			if (params != null)
			{
				for (int i = 0; i < params.length; i++)
				{
					query.setParameter(i, params[i]);
				}
			}

			if (pageIndex > 0 && pageSize > 0)
			{
				query.setFirstResult((pageIndex - 1) * pageSize);
				query.setMaxResults(pageSize);
			}

			list = query.list();
		}
		catch (Exception e)
		{
			logger.error("getPageList error!", e);
		}
		finally
		{
			this.closeSession(session);
		}

		return list;
	}

	public void excuteSql(String sql, Object[] params)
	{
		Session session = null;
		Transaction tr = null;
		boolean commitflag = false;
		try
		{
			session = this.getSession();
			tr = session.beginTransaction();
			SQLQuery query = session.createSQLQuery(sql);
			if (params != null)
			{
				for (int i = 0; i < params.length; i++)
				{
					query.setParameter(i, params[i]);
				}
			}
			
			query.executeUpdate();
			tr.commit();
			commitflag = true;
			session.flush();
		}
		catch (Exception e)
		{
			logger.error("excuteSql error!", e);
		}
		finally
		{
			if (!commitflag)
			{
				try
				{
					if (tr != null)
						tr.rollback();
				}
				catch (Exception e)
				{
					e.printStackTrace();
				}
			}
			
			this.closeSession(session);
		}
	}

	protected Class<T> typeClass()
	{
		return (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
	}

	protected void closeSession(Session session)
	{
		if (session != null && session.isOpen())
		{
			session.close();
			session = null;
		}
	}

	private String getTableName()
	{
		return typeClass().getSimpleName();
	}

	public String getOrderPropertyName()
	{
		return orderPropertyName;
	}

	public void setOrderPropertyName(String orderPropertyName)
	{
		this.orderPropertyName = orderPropertyName;
	}

	public boolean getIsDesc()
	{
		return isDesc;
	}

	public void setDESC(boolean isDesc)
	{
		this.isDesc = isDesc;
	}
}
