package com.feinno.nss.persistence.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import sun.tools.tree.ThisExpression;

import com.feinno.nss.framework.exception.*;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserQuery;
import com.feinno.nss.persistence.iface.IUserDao;

import freemarker.core.ReturnInstruction.Return;

public class UserDao extends HibernateDaoSupport implements IUserDao {
	private static final Logger logger = LoggerFactory.getLogger(UserDao.class);

	@SuppressWarnings("unchecked")
	public long getUserCount(UserQuery uq) {

		final String hql = "select count(*) from User where 1=1 "
				+ this.generateWhere(uq);

		final Object[] values = this.prepareValues(uq);

		Query query = this.getSession().createQuery(hql);
		for (int i = 0; i < values.length; i++) {
			query.setParameter(i, values[i]);
		}
		Long count;
		count = Long.parseLong(query.uniqueResult().toString());

		return count;

	}

	/**
	 * 使用hql 语句进行分页查询操作
	 * 
	 * @param UserQuery
	 *            需要查询的hql语句
	 * @param offset
	 *            第一条记录索引
	 * @param pageSize
	 *            每页需要显示的记录数
	 * @return 当前页的所有记录
	 */
	@SuppressWarnings("unchecked")
	public List findByPage(UserQuery uq, final int offset, final int pageSize) {

		// hql 需要查询的hql语句
		final String hql = "from User where 1=1" + this.generateWhere(uq);
		// 如果hql有多个个参数需要传入，values就是传入的参数数组
		final Object[] values = this.prepareValues(uq);

		List list = getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session)
					throws HibernateException, SQLException {
				Query query = (Query) session.createQuery(hql);
				for (int i = 0; i < values.length; i++) {
					query.setParameter(i, values[i]);
				}
				List result = query.setFirstResult(offset).setMaxResults(
						pageSize).list();
				return result;
			}
		});
		return list;
	}

	public void createUser(User user) throws BusinessException {
		try {
			this.getHibernateTemplate().saveOrUpdate(user);
		} catch (DataAccessException e) {
			if (logger.isErrorEnabled()) {
				logger.error("UserDao.createUser失败", e);
			}
			throw new BusinessException("新增用户,操作失败", e);
		}
	}
	
	public void createTYyUser(TYyUser user) throws BusinessException {
		try {
			this.getHibernateTemplate().saveOrUpdate(user);
		} catch (DataAccessException e) {
			if (logger.isErrorEnabled()) {
				logger.error("UserDao.createUser失败", e);
			}
			throw new BusinessException("新增用户,操作失败", e);
		}
	}

	public void deleteUser(int userId) throws BusinessException {
		try {
			Object u = this.getHibernateTemplate().load(User.class,
					new Integer(userId));
			this.getHibernateTemplate().delete(u);
		} catch (DataAccessException e) {
			if (logger.isErrorEnabled()) {
				logger.error("UserDao.deleteUser失败", e);
			}
			throw new BusinessException("删除用户,操作失败,用户Id：" + userId, e);
		}

	}

	public List<User> getAll() {
		String hql = "from User where 1=1";
		return this.getHibernateTemplate().find(hql);
	}

	public List<User> getByCondition(UserQuery uq) {
		String hql = "from User where 1=1" + this.generateWhere(uq);
		return this.getHibernateTemplate().find(hql, this.prepareValues(uq));
	}

	public User getSigleUser(int userId) {
		String sql = "from User where userId=?";
		return (User) this.getHibernateTemplate().find(sql, userId).get(0);
	}
	
	public TYyUser getUserById(int userId) {
		String sql = "from TYyUser where Id=?";
		return (TYyUser) this.getHibernateTemplate().find(sql, userId).get(0);
	}

	public TYyUser getUserByUserName(String userName) {
		try {
			String sql = "from TYyUser where userName=?";
			List res = this.getHibernateTemplate().find(sql, userName);
			if (res.size() > 0) {
				TYyUser rt = (TYyUser) (res.get(0));
				return rt;
			} else {
				return null;
			}
		} catch (Exception ex) {
			return null;
		}
	}

	public void updateUser(User user) throws BusinessException {
		try {
			this.getHibernateTemplate().saveOrUpdate(user);
		} catch (DataAccessException e) {
			if (logger.isErrorEnabled()) {
				logger.error("UserDao.updateUser失败", e);
			}
			throw new BusinessException("更新用户,操作失败, 用户Id:" + user.getUserId(),
					e);
		}
	}
	
	public void updateTYyUser(TYyUser user) throws BusinessException {
		try {
			this.getHibernateTemplate().saveOrUpdate(user);
		} catch (DataAccessException e) {
			if (logger.isErrorEnabled()) {
				logger.error("UserDao.updateUser失败", e);
			}
			throw new BusinessException("更新用户,操作失败, 用户Id:" + user.getId(),
					e);
		}
	}

	/**
	 * 根据UserQueryModel中的数据情况动态生成对应的条件语句
	 * 
	 * @param uqm
	 *            封装查询条件数据的模型
	 * @return 按照查询条件数据来动态生成的条件语句
	 */
	private String generateWhere(UserQuery uqm) {
		StringBuffer buffer = new StringBuffer();
		// 用户是否选用用户编号作为条件
		if (uqm.getUserId() > 0) {
			buffer.append(" and userId = ?");
		}
		// 用户是否选用用户姓名作为条件
		if (uqm.getName() != null && uqm.getName().trim().length() > 0) {
			buffer.append(" and name like ?");
		}
		// 用户是否选用性别作为条件
		if (uqm.getSex() != null && uqm.getSex().trim().length() > 0) {
			buffer.append(" and sex = ?");
		}
		// 用户是否选用年龄范围最小值作为条件
		if (uqm.getAge() > 0) {
			buffer.append(" and age >= ?");
		}
		// 用户是否选用年龄范围最大值作为条件
		if (uqm.getAge2() > 0) {
			buffer.append(" and age <= ?");
		}
		return buffer.toString();
	}

	private Object[] prepareValues(UserQuery uqm) {
		List<Object> values = new ArrayList<Object>();
		// 用户是否选用用户编号作为条件
		if (uqm.getUserId() > 0) {
			values.add(uqm.getUserId());
		}
		// 用户是否选用用户姓名作为条件
		if (uqm.getName() != null && uqm.getName().trim().length() > 0) {
			values.add("%" + uqm.getName() + "%");
		}
		// 用户是否选用性别作为条件
		if (uqm.getSex() != null && uqm.getSex().trim().length() > 0) {
			values.add(uqm.getSex());
		}
		// 用户是否选用年龄范围最小值作为条件
		if (uqm.getAge() > 0) {
			values.add(uqm.getAge());
		}
		// 用户是否选用年龄范围最大值作为条件
		if (uqm.getAge2() > 0) {
			values.add(uqm.getAge2());
		}
		return values.toArray();
	}

}
