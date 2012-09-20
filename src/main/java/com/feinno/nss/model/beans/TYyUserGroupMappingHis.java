package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyUserGroupMappingHis entity. @author MyEclipse Persistence Tools
 */

public class TYyUserGroupMappingHis implements java.io.Serializable
{

	// Fields

	private Integer id;
	private Integer userId;
	private Integer userGroupId;
	private Timestamp createDate;
	private Integer operatorUserId;
	private Integer operateType;

	// Constructors

	/** default constructor */
	public TYyUserGroupMappingHis()
	{
	}

	/** full constructor */
	public TYyUserGroupMappingHis(Integer userId, Integer userGroupId,
			Timestamp createDate, Integer operatorUserId, Integer operateType)
	{
		this.userId = userId;
		this.userGroupId = userGroupId;
		this.createDate = createDate;
		this.operatorUserId = operatorUserId;
		this.operateType = operateType;
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

	public Integer getUserId()
	{
		return this.userId;
	}

	public void setUserId(Integer userId)
	{
		this.userId = userId;
	}

	public Integer getUserGroupId()
	{
		return this.userGroupId;
	}

	public void setUserGroupId(Integer userGroupId)
	{
		this.userGroupId = userGroupId;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	public Integer getOperatorUserId()
	{
		return this.operatorUserId;
	}

	public void setOperatorUserId(Integer operatorUserId)
	{
		this.operatorUserId = operatorUserId;
	}

	public Integer getOperateType()
	{
		return this.operateType;
	}

	public void setOperateType(Integer operateType)
	{
		this.operateType = operateType;
	}

}