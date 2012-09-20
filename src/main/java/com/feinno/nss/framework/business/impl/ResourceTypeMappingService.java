package com.feinno.nss.framework.business.impl;

import java.util.List;

import com.feinno.nss.framework.business.iface.IResourceTypeMappingService;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.persistence.iface.IOutLinkDao;
import com.feinno.nss.persistence.iface.IResourceTypeMappingDao;

public class ResourceTypeMappingService implements IResourceTypeMappingService {

	private IResourceTypeMappingDao resourceTypeMappingDao;

	public IResourceTypeMappingDao getResourceTypeMappingDao() {
		return this.resourceTypeMappingDao;
	}

	public void setResourceTypeMappingDao(
			IResourceTypeMappingDao resourceTypeMappingDao) {
		this.resourceTypeMappingDao = resourceTypeMappingDao;
	}

	public int getSharedResCount(int id, int type) {
		return this.resourceTypeMappingDao.getSharedResCount(id, type);
	}

	public int getSharedSortNo(int id, int type) {
		return this.resourceTypeMappingDao.getSharedSortNo(id, type);
	}
	
	public List<TYyResourceTypeMapping> GetRecentShare(int id, int type){
		return this.resourceTypeMappingDao.GetRecentShare(id, type);
	}
}
