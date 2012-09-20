package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyOutLink entity. @author MyEclipse Persistence Tools
 */

public class OutLink implements java.io.Serializable
{

	// Fields

	private Integer id;
	private Integer resourceId;
	private Integer userId;
	private String title;
	private String description;
	private String address;
	private Integer downloadCount;
	private Timestamp endDate;
	private Timestamp createDate;

	// Constructors

	/** default constructor */
	public OutLink()
	{
	}

	/** minimal constructor */
	public OutLink(Integer resourceId, Integer userId, Integer downloadCount)
	{
		this.resourceId = resourceId;
		this.userId = userId;
		this.downloadCount = downloadCount;
	}

	/** full constructor */
	public OutLink(Integer resourceId, Integer userId, String title,
			String description, String address, Integer downloadCount,
			Timestamp endDate, Timestamp createDate)
	{
		this.resourceId = resourceId;
		this.userId = userId;
		this.title = title;
		this.description = description;
		this.address = address;
		this.downloadCount = downloadCount;
		this.endDate = endDate;
		this.createDate = createDate;
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

	public Integer getResourceId()
	{
		return this.resourceId;
	}

	public void setResourceId(Integer resourceId)
	{
		this.resourceId = resourceId;
	}

	public Integer getUserId()
	{
		return this.userId;
	}

	public void setUserId(Integer userId)
	{
		this.userId = userId;
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

	public String getAddress()
	{
		return this.address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public Integer getDownloadCount()
	{
		return this.downloadCount;
	}

	public void setDownloadCount(Integer downloadCount)
	{
		this.downloadCount = downloadCount;
	}

	public Timestamp getEndDate()
	{
		return this.endDate;
	}

	public void setEndDate(Timestamp endDate)
	{
		this.endDate = endDate;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

}