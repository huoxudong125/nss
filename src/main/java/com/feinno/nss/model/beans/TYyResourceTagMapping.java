package com.feinno.nss.model.beans;

/**
 * TYyResourceTagMapping entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceTagMapping implements java.io.Serializable
{

	// Fields

	private TYyResourceTagMappingId id;

	// Constructors

	/** default constructor */
	public TYyResourceTagMapping()
	{
	}

	/** full constructor */
	public TYyResourceTagMapping(TYyResourceTagMappingId id)
	{
		this.id = id;
	}

	// Property accessors

	public TYyResourceTagMappingId getId()
	{
		return this.id;
	}

	public void setId(TYyResourceTagMappingId id)
	{
		this.id = id;
	}

}