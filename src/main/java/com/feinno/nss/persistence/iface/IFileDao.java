
package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.FilesOperatorParam;
import com.feinno.nss.model.beans.TYyResource;
import com.feinno.nss.model.beans.TYyResourceType;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;

public interface IFileDao
{
	List<TYyResourceType> geTYyResourceTypes(int ownerId,int parentId,int state);
	List<TYyResourceTypeMapping> getTYyResources(int ownerId,int parentId,int state);
	List<TYyResourceType> geTYyResourceTypes(int ownerId,int state);
	List<TYyResourceTypeMapping> getTYyResources(int ownerId,int state);
	void updateFile(FilesOperatorParam fop) throws BusinessException;
	List<TYyResourceTypeMapping> getTopResourcesByTime(int ownerId, int mappingType, int topNum);
}
