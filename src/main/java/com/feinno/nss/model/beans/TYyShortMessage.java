package com.feinno.nss.model.beans;

/**
 * TYyShortMessage entity. @author MyEclipse Persistence Tools
 */

public class TYyShortMessage implements java.io.Serializable
{

	// Fields

	private Integer shortMessageId;
	private Integer toUserId;

	// Constructors

	/** default constructor */
	public TYyShortMessage()
	{
	}

	/** full constructor */
	public TYyShortMessage(Integer toUserId)
	{
		this.toUserId = toUserId;
	}

	// Property accessors

	public Integer getShortMessageId()
	{
		return this.shortMessageId;
	}

	public void setShortMessageId(Integer shortMessageId)
	{
		this.shortMessageId = shortMessageId;
	}

	public Integer getToUserId()
	{
		return this.toUserId;
	}

	public void setToUserId(Integer toUserId)
	{
		this.toUserId = toUserId;
	}

}