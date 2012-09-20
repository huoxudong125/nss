package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyResource entity. @author MyEclipse Persistence Tools
 */

public class TYyResource implements java.io.Serializable
{

	// Fields

	private Integer id;
	private String title;
	private String description;
	private Integer systemResourceTypeId;
	private Timestamp createDate;
	private Integer size;
	private Integer viewCount;
	private Integer downloadCount;
	private Integer state;

	// Constructors

	/** default constructor */
	public TYyResource()
	{
	}

	/** minimal constructor */
	public TYyResource(String title)
	{
		this.title = title;
	}

	/** full constructor */
	public TYyResource(String title, String description,
			Integer systemResourceTypeId, Timestamp createDate, Integer size,
			Integer viewCount, Integer downloadCount, Integer state)
	{
		this.title = title;
		this.description = description;
		this.systemResourceTypeId = systemResourceTypeId;
		this.createDate = createDate;
		this.size = size;
		this.viewCount = viewCount;
		this.downloadCount = downloadCount;
		this.state = state;
	}

	// Property accessors

	public Integer getId()
	{
		return this.id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Integer getSystemResourceTypeId()
	{
		return this.systemResourceTypeId;
	}

	public void setSystemResourceTypeId(Integer systemResourceTypeId)
	{
		this.systemResourceTypeId = systemResourceTypeId;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	public Integer getSize()
	{
		return this.size;
	}

	public void setSize(Integer size)
	{
		this.size = size;
	}

	public Integer getViewCount()
	{
		return this.viewCount;
	}

	public void setViewCount(Integer viewCount)
	{
		this.viewCount = viewCount;
	}

	public Integer getDownloadCount()
	{
		return this.downloadCount;
	}

	public void setDownloadCount(Integer downloadCount)
	{
		this.downloadCount = downloadCount;
	}

	public Integer getState()
	{
		return this.state;
	}

	public void setState(Integer state)
	{
		this.state = state;
	}

}