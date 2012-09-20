package com.feinno.nss.model.beans;

public class FilesOperatorParam
{
	private boolean isResourceType;
	private long id;
	private int state;
	private String name;
	
	public void setResourceType(boolean isResourceType)
	{
		this.isResourceType = isResourceType;
	}
	public boolean isResourceType()
	{
		return isResourceType;
	}
	
	public void setId(long id)
	{
		this.id = id;
	}
	public int getId()
	{
		return (int)id;
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
}
