package com.feinno.nss.framework.business.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Tuple;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.Global;
import com.feinno.nss.core.utils.DateUtil;
import com.feinno.nss.framework.business.iface.IFileService;
import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.framework.utils.FileHelper;
import com.feinno.nss.model.beans.*;
import com.feinno.nss.persistence.iface.IFileDao;
import com.feinno.nss.persistence.iface.IUserDao;

public  class FileServiceImpl implements IFileService
{
	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	private IFileDao fileDao;

	public void setFileDao(IFileDao fileDao)
	{
		this.fileDao = fileDao;
	}

	public IFileDao getFileDao()
	{
		return fileDao;
	}

	public List<FilesQuery> getFilesQueries(int ownerId, int parentId,int state)
	{
		List<TYyResourceType> resourceTypes = fileDao.geTYyResourceTypes(ownerId,parentId,state);
		List<TYyResourceTypeMapping> resources = fileDao.getTYyResources(ownerId,parentId,state);
		List<FilesQuery> filesQueries =  new ArrayList<FilesQuery>();	

		for (TYyResourceType resourceType : resourceTypes)
		{
			FilesQuery temp = new FilesQuery();
			temp.setId(resourceType.getId());
			temp.setParentId(resourceType.getParentId());
			temp.setFileName(resourceType.getName());
			temp.setSize("-");
			temp.setType(Global.resources.get("forder"));
			temp.setCreateDate(DateUtil.getSelfTimeShow(resourceType.getCreateDate(),  "yyyy-MM-dd HH:mm"));
			filesQueries.add(temp);
		}

		for (TYyResourceTypeMapping resourceTypeMapping : resources)
		{
			FilesQuery temp = new FilesQuery();
			temp.setId(resourceTypeMapping.getId());
			temp.setParentId(resourceTypeMapping.getResourceTypeId());
			temp.setFileName(resourceTypeMapping.getResource().getTitle());
			temp.setSize(resourceTypeMapping.getResource().getSize().toString());
			temp.setType(Global.resources.get(FileHelper.getExtentsByFileName(temp.getFileName())));
			temp.setCreateDate(DateUtil.getSelfTimeShow(resourceTypeMapping.getResource().getCreateDate(),  "yyyy-MM-dd HH:mm"));
			filesQueries.add(temp);
		}
		return filesQueries;
	}
	
	public List<FilesQuery> getFilesQueries(int ownerId, int state)
	{
		List<TYyResourceType> resourceTypes = fileDao.geTYyResourceTypes(ownerId,state);
		List<TYyResourceTypeMapping> resources = fileDao.getTYyResources(ownerId,state);
		List<FilesQuery> filesQueries =  new ArrayList<FilesQuery>();
		
		for (TYyResourceType resourceType : resourceTypes)
		{
			FilesQuery temp = new FilesQuery();
			temp.setId(resourceType.getId());
			temp.setParentId(resourceType.getParentId());
			temp.setFileName(resourceType.getName());
			temp.setSize("-");
			temp.setType(Global.resources.get("forder"));
			temp.setCreateDate(DateUtil.getSelfTimeShow(resourceType.getCreateDate(), "yyyy-MM-dd HH:mm"));
			temp.setRecycleDayLeft(Global.dayFileInRecyle -DateUtil.getDaySub(temp.getCreateDate(), DateUtil.getSystemCurrentDateHyphen())+"天");
			filesQueries.add(temp);
		}
		
		for (TYyResourceTypeMapping resourceTypeMapping : resources)
		{
			FilesQuery temp = new FilesQuery();
			temp.setId(resourceTypeMapping.getId());
			temp.setParentId(resourceTypeMapping.getResourceTypeId());
			temp.setFileName(resourceTypeMapping.getResource().getTitle());
			temp.setSize(resourceTypeMapping.getResource().getSize().toString());
			temp.setType(Global.resources.get(FileHelper.getExtentsByFileName(temp.getFileName())));
			temp.setCreateDate(DateUtil.getSelfTimeShow(resourceTypeMapping.getResource().getCreateDate(),  "yyyy-MM-dd HH:mm"));
			temp.setRecycleDayLeft(Global.dayFileInRecyle-DateUtil.getDaySub(temp.getCreateDate(), DateUtil.getSystemCurrentDateHyphen())+"天");
			filesQueries.add(temp);
		}
		return filesQueries;
	}

	public List<TYyResourceTypeMapping> getTopResourcesByTime(int ownerId, int mappingType, int topNum)
	{
		return this.fileDao.getTopResourcesByTime(ownerId, mappingType, topNum);
	}

	public boolean updateFile(FilesOperatorParam fop)
	{
		try{
			fileDao.updateFile(fop);
			return true;
		}
		catch(BusinessException e)
		{
			logger.error("删除文件失败！",e);
			return false;
		}
	}

	public List<TYyResourceType> geTYyResourceTypes(int ownerId, int parentId,
			int state)
	{
		return this.fileDao.geTYyResourceTypes(ownerId, parentId, state);
	}

	
}
