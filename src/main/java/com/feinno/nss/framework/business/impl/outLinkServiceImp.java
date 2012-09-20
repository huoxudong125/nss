package com.feinno.nss.framework.business.impl;

import java.util.List;

import com.feinno.nss.framework.business.iface.IOutLinkService;
import com.feinno.nss.model.beans.OutLink;
import com.feinno.nss.persistence.iface.*;

public class outLinkServiceImp implements IOutLinkService
{
	private IOutLinkDao outLinkDao;

	public IOutLinkDao getOutLinkDao()
	{
		return this.outLinkDao;
	}

	public void setOutLinkDao(IOutLinkDao outLinkDao)
	{
		this.outLinkDao = outLinkDao;
	}

	@SuppressWarnings("unchecked")
	public OutLink save(OutLink outLink)
	{
		return (OutLink) getOutLinkDao().save(outLink);
	}

	@SuppressWarnings("unchecked")
	public void saveOrUpdate(OutLink outLink)
	{
		getOutLinkDao().saveOrUpdate(outLink);
	}

	@SuppressWarnings("unchecked")
	public void delete(int id)
	{
		getOutLinkDao().delete((OutLink) getOutLinkDao().getById(id));
	}
	
	public OutLink getById(int id)
	{
		return (OutLink) getOutLinkDao().getById(id);
	}

	@SuppressWarnings("unchecked")
	public List<OutLink> getAll()
	{
		return getOutLinkDao().getAll();
	}

	@SuppressWarnings("unchecked")
	public List<OutLink> getList(String hql, Object[] params)
	{
		return getOutLinkDao().getList(hql, params);
	}

	public long getCount(String hql, Object[] params)
	{
		return getOutLinkDao().getCount(hql, params);
	}

	@SuppressWarnings("unchecked")
	public List<OutLink> getPageList(String hql, Object[] params, int pageIndex, int pageSize)
	{
		return getOutLinkDao().getPageList(hql, params, pageIndex, pageSize);
	}
}
