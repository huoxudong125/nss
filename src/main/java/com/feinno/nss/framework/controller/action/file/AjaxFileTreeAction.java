package com.feinno.nss.framework.controller.action.file;

import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.ObjectMapper;
//import org.codehaus.jackson.map.*;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.AjaxAction;
import com.feinno.nss.model.beans.FilesQuery;
import com.feinno.nss.model.beans.TYyResourceType;

public class AjaxFileTreeAction extends AjaxAction
{

	@Override
	public String process() throws Exception
	{
		try
		{
			int userId=1;
			int parentId=-1;
			if(getRequest().getParameter("id") != null)
				parentId=Integer.parseInt(getRequest().getParameter("id")); 
			List<TYyResourceType> resourceTypes = Factory.getFileService().geTYyResourceTypes(userId, parentId, 0);
			
			List<Jsonbean> jsonbeans = new ArrayList<Jsonbean>();
			
			for (TYyResourceType tYyResourceType : resourceTypes)
			{
				Jsonbean bean = new Jsonbean();
				if(parentId==-1)
					bean.setState("closed");
				bean.setAttr(new Attr(tYyResourceType.getId()));
				bean.setData(tYyResourceType.getName());
				jsonbeans.add(bean);
			}
			ObjectMapper  objectMapper = new ObjectMapper();
			String jsonString= objectMapper.writeValueAsString(jsonbeans);
			return jsonString;
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	
}
