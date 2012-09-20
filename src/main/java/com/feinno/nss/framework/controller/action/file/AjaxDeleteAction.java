package com.feinno.nss.framework.controller.action.file;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.AjaxAction;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.FilesOperatorParam;
import com.feinno.nss.model.beans.ResourceType;

public class AjaxDeleteAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(AjaxDeleteAction.class);
	private String params;
	private boolean isResourceType;
	private int id;
	private int state;
	private String name;
	private String result;
	
	public void setParams(String params)
	{
		this.params=params;
	}
	
	public void setIsResourceType(boolean isResourceType)
	{
		this.isResourceType=isResourceType;
	}
	
	public void setId(int id)
	{
		this.id=id;
	}
	
	public String getResult()
	{
		return result;
	}
	
	public void setState(int state)
	{
		this.state = state;
	}

	public int getState()
	{
		return state;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getName()
	{
		return name;
	}

	// 删除，彻底删除，还原
	public String execute()
	{
		boolean res=true;
		try
		{
			List<HashMap<Integer, Boolean>> paramHashMaps = (List<HashMap<Integer, Boolean>>) JSONUtil.deserialize(this.params);
			for (HashMap<Integer, Boolean> hashMap : paramHashMaps)
			{
				Iterator iterator = hashMap.entrySet().iterator();
				FilesOperatorParam param = new FilesOperatorParam();
				
				while (iterator.hasNext())
				{
					// set the field by the the field name using reflector
					Entry entry = (Entry)iterator.next();
					Class c = FilesOperatorParam.class;
					Field field  = c.getDeclaredField(entry.getKey().toString());
					field.setAccessible(true);
					field.set(param, entry.getValue());
					field.setAccessible(false);
				}
				param.setName(this.name);
				param.setState(this.state);
				res= res& Factory.getFileService().updateFile(param);
			}				
		}		
		catch (Exception e)
		{
			// TODO Auto-generated catch block
			res=false;
			e.printStackTrace();
		}
		
		if(res)
		{
			this.result="success";
		}
		else {
			this.result="failture";
		}
		return SUCCESS;	
	}

}
