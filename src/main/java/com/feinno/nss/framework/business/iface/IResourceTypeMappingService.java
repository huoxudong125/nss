package com.feinno.nss.framework.business.iface;

import java.util.List;

import com.feinno.nss.model.beans.TYyResourceTypeMapping;

public interface IResourceTypeMappingService {
	int getSharedResCount(int id, int type);
	
	int getSharedSortNo(int id, int type);
	
	List<TYyResourceTypeMapping> GetRecentShare(int id, int type);
}
