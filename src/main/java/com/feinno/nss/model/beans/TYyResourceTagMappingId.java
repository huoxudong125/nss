package com.feinno.nss.model.beans;

/**
 * TYyResourceTagMappingId entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceTagMappingId implements java.io.Serializable
{

	// Fields

	private Integer resourceId;
	private Integer resourceTagId;

	// Constructors

	/** default constructor */
	public TYyResourceTagMappingId()
	{
	}

	/** full constructor */
	public TYyResourceTagMappingId(Integer resourceId, Integer resourceTagId)
	{
		this.resourceId = resourceId;
		this.resourceTagId = resourceTagId;
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

	public Integer getResourceTagId()
	{
		return this.resourceTagId;
	}

	public void setResourceTagId(Integer resourceTagId)
	{
		this.resourceTagId = resourceTagId;
	}

	public boolean equals(Object other)
	{
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TYyResourceTagMappingId))
			return false;
		TYyResourceTagMappingId castOther = (TYyResourceTagMappingId) other;

		return ((this.getResourceId() == castOther.getResourceId()) || (this
				.getResourceId() != null
				&& castOther.getResourceId() != null && this.getResourceId()
				.equals(castOther.getResourceId())))
				&& ((this.getResourceTagId() == castOther.getResourceTagId()) || (this
						.getResourceTagId() != null
						&& castOther.getResourceTagId() != null && this
						.getResourceTagId()
						.equals(castOther.getResourceTagId())));
	}

	public int hashCode()
	{
		int result = 17;

		result = 37
				* result
				+ (getResourceId() == null ? 0 : this.getResourceId()
						.hashCode());
		result = 37
				* result
				+ (getResourceTagId() == null ? 0 : this.getResourceTagId()
						.hashCode());
		return result;
	}

}