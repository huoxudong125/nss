package com.feinno.nss.model.beans;

import java.sql.Timestamp;

/**
 * TYyShortMessageHistory entity. @author MyEclipse Persistence Tools
 */

public class TYyShortMessageHistory implements java.io.Serializable
{

	// Fields

	private Integer id;
	private Integer fromUserId;
	private Integer toUserId;
	private String content;
	private Timestamp createDate;

	// Constructors

	/** default constructor */
	public TYyShortMessageHistory()
	{
	}

	/** minimal constructor */
	public TYyShortMessageHistory(Integer id, Integer fromUserId,
			Integer toUserId)
	{
		this.id = id;
		this.fromUserId = fromUserId;
		this.toUserId = toUserId;
	}

	/** full constructor */
	public TYyShortMessageHistory(Integer id, Integer fromUserId,
			Integer toUserId, String content, Timestamp createDate)
	{
		this.id = id;
		this.fromUserId = fromUserId;
		this.toUserId = toUserId;
		this.content = content;
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

	public Integer getFromUserId()
	{
		return this.fromUserId;
	}

	public void setFromUserId(Integer fromUserId)
	{
		this.fromUserId = fromUserId;
	}

	public Integer getToUserId()
	{
		return this.toUserId;
	}

	public void setToUserId(Integer toUserId)
	{
		this.toUserId = toUserId;
	}

	public String getContent()
	{
		return this.content;
	}

	public void setContent(String content)
	{
		this.content = content;
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