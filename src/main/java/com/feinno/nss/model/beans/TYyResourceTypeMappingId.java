package com.feinno.nss.model.beans;

/**
 * TYyResourceTypeMappingId entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceTypeMappingId implements java.io.Serializable
{

	// Fields

	private Integer resourceId;
	private Integer ownerId;

	// Constructors

	/** default constructor */
	public TYyResourceTypeMappingId()
	{
	}

	/** full constructor */
	public TYyResourceTypeMappingId(Integer resourceId, Integer ownerId)
	{
		this.resourceId = resourceId;
		this.ownerId = ownerId;
	}

	// Property accessors

	public Integer getResourceId()
	{
		return this.resourceId;
	}

	public void setResourceId(Integer resourceId)
	{
		this.resourceId = resourceId;
	}

	public Integer getOwnerId()
	{
		return this.ownerId;
	}

	public void setOwnerId(Integer ownerId)
	{
		this.ownerId = ownerId;
	}

	public boolean equals(Object other)
	{
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TYyResourceTypeMappingId))
			return false;
		TYyResourceTypeMappingId castOther = (TYyResourceTypeMappingId) other;

		return ((this.getResourceId() == castOther.getResourceId()) || (this
				.getResourceId() != null
				&& castOther.getResourceId() != null && this.getResourceId()
				.equals(castOther.getResourceId())))
				&& ((this.getOwnerId() == castOther.getOwnerId()) || (this
						.getOwnerId() != null
						&& castOther.getOwnerId() != null && this.getOwnerId()
						.equals(castOther.getOwnerId())));
	}

	public int hashCode()
	{
		int result = 17;

		result = 37
				* result
				+ (getResourceId() == null ? 0 : this.getResourceId()
						.hashCode());
		result = 37 * result
				+ (getOwnerId() == null ? 0 : this.getOwnerId().hashCode());
		return result;
	}

}