package com.feinno.nss.model.beans;

/**
 * TYyUserAttention entity. @author MyEclipse Persistence Tools
 */

public class TYyUserAttention implements java.io.Serializable
{

	// Fields

	private TYyUserAttentionId id;

	// Constructors

	/** default constructor */
	public TYyUserAttention()
	{
	}

	/** full constructor */
	public TYyUserAttention(TYyUserAttentionId id)
	{
		this.id = id;
	}

	// Property accessors

	public TYyUserAttentionId getId()
	{
		return this.id;
	}

	public void setId(TYyUserAttentionId id)
	{
		this.id = id;
	}

}