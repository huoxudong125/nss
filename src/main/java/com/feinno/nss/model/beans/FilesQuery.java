package com.feinno.nss.model.beans;

import java.awt.Point;
import java.util.Date;

public class FilesQuery 
{

	private int id=-1;
	private int parentId=-1;
	private String fileName;
	private String size;
	private String createDate;
	private ResourceType type;
	private String recycleDayLeft;
	
	public void setId(int id)
	{
		this.id = id;
	}
	public int getId()
	{
		return id;
	}
	
	public void setParentId(int parentId)
	{
		this.parentId = parentId;
	}
	public int getParentId()
	{
		return parentId;
	}
	
	public void setFileName(String fileName)
	{
		this.fileName = fileName;
	}
	public String getFileName()
	{
		return fileName;
	}
	
	public void setSize(String size)
	{
		this.size = size;
	}
	public String getSize()
	{
		return size;
	}
	
	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}
	public String getCreateDate()
	{
		return createDate;
	}
	
	public void setType(ResourceType type)
	{
		this.type = type;
	}
	public ResourceType getType()
	{
		return type;
	}
	public void setRecycleDayLeft(String recycleDayLeft)
	{
		this.recycleDayLeft = recycleDayLeft;
	}
	public String getRecycleDayLeft()
	{
		return recycleDayLeft;
	}
	

}
