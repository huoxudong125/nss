package com.feinno.nss.model.beans;

/**
 * TYyUserGroupMappingId entity. @author MyEclipse Persistence Tools
 */

public class TYyUserGroupMappingId implements java.io.Serializable
{

	// Fields

	private Integer userId;
	private Integer userGroupId;

	// Constructors

	/** default constructor */
	public TYyUserGroupMappingId()
	{
	}

	/** full constructor */
	public TYyUserGroupMappingId(Integer userId, Integer userGroupId)
	{
		this.userId = userId;
		this.userGroupId = userGroupId;
	}

	// Property accessors

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

	public boolean equals(Object other)
	{
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TYyUserGroupMappingId))
			return false;
		TYyUserGroupMappingId castOther = (TYyUserGroupMappingId) other;

		return ((this.getUserId() == castOther.getUserId()) || (this
				.getUserId() != null
				&& castOther.getUserId() != null && this.getUserId().equals(
				castOther.getUserId())))
				&& ((this.getUserGroupId() == castOther.getUserGroupId()) || (this
						.getUserGroupId() != null
						&& castOther.getUserGroupId() != null && this
						.getUserGroupId().equals(castOther.getUserGroupId())));
	}

	public int hashCode()
	{
		int result = 17;

		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		result = 37
				* result
				+ (getUserGroupId() == null ? 0 : this.getUserGroupId()
						.hashCode());
		return result;
	}

}