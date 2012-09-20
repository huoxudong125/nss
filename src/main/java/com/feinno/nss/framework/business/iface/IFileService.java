package com.feinno.nss.framework.business.iface;

import java.util.List;

import com.feinno.nss.model.beans.FilesOperatorParam;
import com.feinno.nss.model.beans.FilesQuery;
import com.feinno.nss.model.beans.TYyResourceType;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;

public interface IFileService
{
	List<FilesQuery> getFilesQueries(int ownerId,int parentId,int state);
	List<TYyResourceType> geTYyResourceTypes(int ownerId,int parentId,int state);
	List<FilesQuery> getFilesQueries(int ownerId,int state);
	List<TYyResourceTypeMapping> getTopResourcesByTime(int ownerId, int mappingType, int topNum);
	boolean updateFile(FilesOperatorParam fop);
}
