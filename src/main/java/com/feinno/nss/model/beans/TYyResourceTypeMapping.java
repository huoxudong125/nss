package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyResourceTypeMapping entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceTypeMapping implements java.io.Serializable
{

	// Fields

	private Integer id;
	private TYyResource resource;
	private Integer ownerId;
	private Integer resourceTypeId;
	private Integer permission;
	private Timestamp createDate;
	private Integer mappingType;

	// Constructors

	/** default constructor */
	public TYyResourceTypeMapping()
	{
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

	public TYyResource getResource()
	{
		return this.resource;
	}

	public void setResource(TYyResource resource)
	{
		this.resource = resource;
	}

	public Integer getOwnerId()
	{
		return this.ownerId;
	}

	public void setOwnerId(Integer ownerId)
	{
		this.ownerId = ownerId;
	}

	public Integer getResourceTypeId()
	{
		return this.resourceTypeId;
	}

	public void setResourceTypeId(Integer resourceTypeId)
	{
		this.resourceTypeId = resourceTypeId;
	}

	public Integer getPermission()
	{
		return this.permission;
	}

	public void setPermission(Integer permission)
	{
		this.permission = permission;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	public Integer getMappingType()
	{
		return this.mappingType;
	}

	public void setMappingType(Integer mappingType)
	{
		this.mappingType = mappingType;
	}

}