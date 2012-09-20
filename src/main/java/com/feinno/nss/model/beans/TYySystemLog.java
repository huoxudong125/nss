package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYySystemLog entity. @author MyEclipse Persistence Tools
 */

public class TYySystemLog implements java.io.Serializable
{

	// Fields

	private Integer id;
	private Integer userId;
	private String userIp;
	private String description;
	private Timestamp createDate;

	// Constructors

	/** default constructor */
	public TYySystemLog()
	{
	}

	/** minimal constructor */
	public TYySystemLog(Integer id, Integer userId)
	{
		this.id = id;
		this.userId = userId;
	}

	/** full constructor */
	public TYySystemLog(Integer id, Integer userId, String userIp,
			String description, Timestamp createDate)
	{
		this.id = id;
		this.userId = userId;
		this.userIp = userIp;
		this.description = description;
		this.createDate = createDate;
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

	public String getUserIp()
	{
		return this.userIp;
	}

	public void setUserIp(String userIp)
	{
		this.userIp = userIp;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

}