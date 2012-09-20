package com.feinno.nss.persistence.iface;

import java.io.Serializable;
import java.util.List;

public interface IBaseDao<T>
{
	T save(T bean);

	T saveOrUpdate(T bean);

	boolean delete(T bean);
	
	boolean deleteById(Serializable id);
	
	T getById(Serializable id);   

	List<T> getAll();

	List<T> getList(String hql, Object[] params);

	long getCount(String hql, Object[] params);

	List<T> getPageList(String hql, Object[] params, int pageIndex, int pageSize);
	
	void excuteSql(String sql, Object[] params);
}
