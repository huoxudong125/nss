package com.feinno.nss.framework.controller.action.file;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.framework.controller.action.user.UserAction;
import com.feinno.nss.model.beans.FilesQuery;

public class MyFileAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(UserAction.class);
	
//	private List<FilesQuery> resources;
//
//	public void setResources(List<FilesQuery> resources)
//	{
//		this.resources = resources;
//	}
//
//	public List<FilesQuery> getResources()
//	{
//		return resources;
//	}
	
	public String getResourceList()
	{
		String returnValues=SUCCESS;
		try
		{
			int userId=1;
			int parentId=-1;
			if(getRequest().getParameter("id") != null)
				parentId=Integer.parseInt(getRequest().getParameter("id")); 
			List<FilesQuery> resources = Factory.getFileService().getFilesQueries(userId, parentId,0);
			getRequest().setAttribute("resources", resources);
		}
		catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return returnValues;
	}
	
	public String getResourceOfRecycleList()
	{
		String returnValues=SUCCESS;
		try
		{
			int userId=1;
			List<FilesQuery> resources = Factory.getFileService().getFilesQueries(1, 1);
			getRequest().setAttribute("resources", resources);
		}
		catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
		return returnValues;
	}
}
