package com.feinno.nss.framework.business.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.framework.business.iface.ISystemResourceTypeService;
import com.feinno.nss.model.beans.TYySystemResourceType;
import com.feinno.nss.persistence.iface.INssUserDao;
import com.feinno.nss.persistence.iface.ISystemResourceTypeDao;

public class SystemResourceTypeService implements ISystemResourceTypeService {

	private static final Logger logger = LoggerFactory.getLogger(SystemResourceTypeService.class);
	ISystemResourceTypeDao systemResourceTypeDao;

	public void setSystemResourceTypeDao(ISystemResourceTypeDao systemResourceTypeDao)
	{
		this.systemResourceTypeDao = systemResourceTypeDao;
	}

	public ISystemResourceTypeDao getSystemResourceTypeDao()
	{
		return this.systemResourceTypeDao;
	}
	
	public String getTypeNameById( int id )
	{
		return this.systemResourceTypeDao.getTypeNameById(id);
	}
}
