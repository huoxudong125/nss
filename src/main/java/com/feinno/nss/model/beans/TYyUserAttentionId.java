package com.feinno.nss.model.beans;

/**
 * TYyUserAttentionId entity. @author MyEclipse Persistence Tools
 */

public class TYyUserAttentionId implements java.io.Serializable
{

	// Fields

	private Integer userId;
	private Integer targetId;
	private Integer type;

	// Constructors

	/** default constructor */
	public TYyUserAttentionId()
	{
	}

	/** full constructor */
	public TYyUserAttentionId(Integer userId, Integer targetId, Integer type)
	{
		this.userId = userId;
		this.targetId = targetId;
		this.type = type;
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

	public Integer getTargetId()
	{
		return this.targetId;
	}

	public void setTargetId(Integer targetId)
	{
		this.targetId = targetId;
	}

	public Integer getType()
	{
		return this.type;
	}

	public void setType(Integer type)
	{
		this.type = type;
	}

	public boolean equals(Object other)
	{
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TYyUserAttentionId))
			return false;
		TYyUserAttentionId castOther = (TYyUserAttentionId) other;

		return ((this.getUserId() == castOther.getUserId()) || (this
				.getUserId() != null
				&& castOther.getUserId() != null && this.getUserId().equals(
				castOther.getUserId())))
				&& ((this.getTargetId() == castOther.getTargetId()) || (this
						.getTargetId() != null
						&& castOther.getTargetId() != null && this
						.getTargetId().equals(castOther.getTargetId())))
				&& ((this.getType() == castOther.getType()) || (this.getType() != null
						&& castOther.getType() != null && this.getType()
						.equals(castOther.getType())));
	}

	public int hashCode()
	{
		int result = 17;

		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		result = 37 * result
				+ (getTargetId() == null ? 0 : this.getTargetId().hashCode());
		result = 37 * result
				+ (getType() == null ? 0 : this.getType().hashCode());
		return result;
	}

}