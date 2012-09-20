package com.feinno.nss.model.beans;

/**
 * TYyResourceTag entity. @author MyEclipse Persistence Tools
 */

public class TYyResourceTag implements java.io.Serializable
{

	// Fields

	private Integer id;
	private Integer userId;
	private String name;
	private Integer hotCount;
	private Integer isValid;

	// Constructors

	/** default constructor */
	public TYyResourceTag()
	{
	}

	/** minimal constructor */
	public TYyResourceTag(Integer hotCount, Integer isValid)
	{
		this.hotCount = hotCount;
		this.isValid = isValid;
	}

	/** full constructor */
	public TYyResourceTag(Integer userId, String name, Integer hotCount,
			Integer isValid)
	{
		this.userId = userId;
		this.name = name;
		this.hotCount = hotCount;
		this.isValid = isValid;
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

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Integer getHotCount()
	{
		return this.hotCount;
	}

	public void setHotCount(Integer hotCount)
	{
		this.hotCount = hotCount;
	}

	public Integer getIsValid()
	{
		return this.isValid;
	}

	public void setIsValid(Integer isValid)
	{
		this.isValid = isValid;
	}

}