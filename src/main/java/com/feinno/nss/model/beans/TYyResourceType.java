package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyResourceType entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceType implements java.io.Serializable
{

	// Fields

	private Integer id;
	private String name;
	private Integer parentId;
	private Integer ownerId;
	private Integer isOpen;
	private Integer typeFlag;
	private Integer state;
	private Timestamp createDate;

	// Constructors

	/** default constructor */
	public TYyResourceType()
	{
	}

	/** minimal constructor */
	public TYyResourceType(String name)
	{
		this.name = name;
	}

	/** full constructor */
	public TYyResourceType(String name, Integer parentId, Integer ownerId,
			Integer isOpen, Integer typeFlag, Integer state,
			Timestamp createDate)
	{
		this.name = name;
		this.parentId = parentId;
		this.ownerId = ownerId;
		this.isOpen = isOpen;
		this.typeFlag = typeFlag;
		this.state = state;
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

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Integer getParentId()
	{
		return this.parentId;
	}

	public void setParentId(Integer parentId)
	{
		this.parentId = parentId;
	}

	public Integer getOwnerId()
	{
		return this.ownerId;
	}

	public void setOwnerId(Integer ownerId)
	{
		this.ownerId = ownerId;
	}

	public Integer getIsOpen()
	{
		return this.isOpen;
	}

	public void setIsOpen(Integer isOpen)
	{
		this.isOpen = isOpen;
	}

	public Integer getTypeFlag()
	{
		return this.typeFlag;
	}

	public void setTypeFlag(Integer typeFlag)
	{
		this.typeFlag = typeFlag;
	}

	public Integer getState()
	{
		return this.state;
	}

	public void setState(Integer state)
	{
		this.state = state;
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