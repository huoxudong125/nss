package com.feinno.nss.model.beans;

/**
 * TYySystemResourceType entity. @author MyEclipse Persistence Tools
 */

public class TYySystemResourceType implements java.io.Serializable
{

	// Fields

	private Integer id;
	private String name;
	private Integer isHomePage;

	// Constructors

	/** default constructor */
	public TYySystemResourceType()
	{
	}

	/** minimal constructor */
	public TYySystemResourceType(String name)
	{
		this.name = name;
	}

	/** full constructor */
	public TYySystemResourceType(String name, Integer isHomePage)
	{
		this.name = name;
		this.isHomePage = isHomePage;
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

	public Integer getIsHomePage()
	{
		return this.isHomePage;
	}

	public void setIsHomePage(Integer isHomePage)
	{
		this.isHomePage = isHomePage;
	}

}