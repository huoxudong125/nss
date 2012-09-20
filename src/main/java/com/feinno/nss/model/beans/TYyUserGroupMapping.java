package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyUserGroupMapping entity. @author MyEclipse Persistence Tools
 */

public class TYyUserGroupMapping implements java.io.Serializable
{

	// Fields

	private TYyUserGroupMappingId id;
	private Timestamp createDate;
	private Integer roleType;
	
	private TYyUser user;
	public TYyUser getUser()
	{
		return this.user;
	}
	public void setUser(TYyUser user)
	{
		this.user=user;
	}
	

	// Constructors

	/** default constructor */
	public TYyUserGroupMapping()
	{
	}

	/** minimal constructor */
	public TYyUserGroupMapping(TYyUserGroupMappingId id)
	{
		this.id = id;
	}

	/** full constructor */
	public TYyUserGroupMapping(TYyUserGroupMappingId id, Timestamp createDate,
			Integer roleType)
	{
		this.id = id;
		this.createDate = createDate;
		this.roleType = roleType;
	}

	// Property accessors

	public TYyUserGroupMappingId getId()
	{
		return this.id;
	}

	public void setId(TYyUserGroupMappingId id)
	{
		this.id = id;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	public Integer getRoleType()
	{
		return this.roleType;
	}

	public void setRoleType(Integer roleType)
	{
		this.roleType = roleType;
	}

}