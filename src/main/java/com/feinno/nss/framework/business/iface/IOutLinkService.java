package com.feinno.nss.framework.business.iface;

import java.util.List;

import com.feinno.nss.model.beans.OutLink;

public interface IOutLinkService
{
	OutLink save(OutLink outLink);
	
	void saveOrUpdate(OutLink outLink);
	
	void delete(int id);
	
	OutLink getById(int id);
	
	List<OutLink> getAll();
	
	List<OutLink> getList(String hql, Object[] params);
	
	long getCount(String hql, Object[] params);
	
	List<OutLink> getPageList(String hql, Object[] params, int pageIndex, int pageSize);
}
