package com.feinno.nss.model.beans;

import java.sql.Timestamp;
import java.util.List;

import org.apache.struts2.components.Set;

/**
 * TYyUserGroup entity. @author MyEclipse Persistence Tools
 */

public class TYyUserGroup implements java.io.Serializable
{

	// Fields

	private Integer id;
	private String groupCode;
	private String name;
	private String bulletin;
	private String tag;
	private String description;
	private Integer freeSize;
	private Integer maxSize;
	private Integer isSmsNotice;
	private Integer isEmailNotice;
	private Integer isFreeAddUser;
	private Integer isFreeUpdateInfo;
	private Integer isOpen;
	private Integer createrUserId;
	private Timestamp createDate;
	private String logoImage;
	private Integer isVerify;

	private TYyUser creator;
	private java.util.Set<TYyUserGroupMapping> userGroupMappings;

	// Constructors

	/** default constructor */
	public TYyUserGroup()
	{
	}

	/** minimal constructor */
	public TYyUserGroup(String groupCode, String name)
	{
		this.groupCode = groupCode;
		this.name = name;
	}

	/** full constructor */
	public TYyUserGroup(String groupCode, String name, String bulletin,
			String tag, String description, Integer freeSize, Integer maxSize,
			Integer isSmsNotice, Integer isEmailNotice, Integer isFreeAddUser,
			Integer isFreeUpdateInfo, Integer isOpen, Integer createrUserId,
			Timestamp createDate, String logoImage, Integer isVerify)
	{
		this.groupCode = groupCode;
		this.name = name;
		this.bulletin = bulletin;
		this.tag = tag;
		this.description = description;
		this.freeSize = freeSize;
		this.maxSize = maxSize;
		this.isSmsNotice = isSmsNotice;
		this.isEmailNotice = isEmailNotice;
		this.isFreeAddUser = isFreeAddUser;
		this.isFreeUpdateInfo = isFreeUpdateInfo;
		this.isOpen = isOpen;
		this.createrUserId = createrUserId;
		this.createDate = createDate;
		this.logoImage = logoImage;
		this.isVerify = isVerify;
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

	public String getGroupCode()
	{
		return this.groupCode;
	}

	public void setGroupCode(String groupCode)
	{
		this.groupCode = groupCode;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getBulletin()
	{
		return this.bulletin;
	}

	public void setBulletin(String bulletin)
	{
		this.bulletin = bulletin;
	}

	public String getTag()
	{
		return this.tag;
	}

	public void setTag(String tag)
	{
		this.tag = tag;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Integer getFreeSize()
	{
		return this.freeSize;
	}

	public void setFreeSize(Integer freeSize)
	{
		this.freeSize = freeSize;
	}

	public Integer getMaxSize()
	{
		return this.maxSize;
	}

	public void setMaxSize(Integer maxSize)
	{
		this.maxSize = maxSize;
	}

	public Integer getIsSmsNotice()
	{
		return this.isSmsNotice;
	}

	public void setIsSmsNotice(Integer isSmsNotice)
	{
		this.isSmsNotice = isSmsNotice;
	}

	public Integer getIsEmailNotice()
	{
		return this.isEmailNotice;
	}

	public void setIsEmailNotice(Integer isEmailNotice)
	{
		this.isEmailNotice = isEmailNotice;
	}

	public Integer getIsFreeAddUser()
	{
		return this.isFreeAddUser;
	}

	public void setIsFreeAddUser(Integer isFreeAddUser)
	{
		this.isFreeAddUser = isFreeAddUser;
	}

	public Integer getIsFreeUpdateInfo()
	{
		return this.isFreeUpdateInfo;
	}

	public void setIsFreeUpdateInfo(Integer isFreeUpdateInfo)
	{
		this.isFreeUpdateInfo = isFreeUpdateInfo;
	}

	public Integer getIsOpen()
	{
		return this.isOpen;
	}

	public void setIsOpen(Integer isOpen)
	{
		this.isOpen = isOpen;
	}

	public Integer getCreaterUserId()
	{
		return this.createrUserId;
	}

	public void setCreaterUserId(Integer createrUserId)
	{
		this.createrUserId = createrUserId;
	}

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	public String getLogoImage()
	{
		return this.logoImage;
	}

	public void setLogoImage(String logoImage)
	{
		this.logoImage = logoImage;
	}

	public Integer getIsVerify()
	{
		return this.isVerify;
	}

	public void setIsVerify(Integer isVerify)
	{
		this.isVerify = isVerify;
	}

	public TYyUser getCreator()
	{
		return this.creator;
	}

	public void setCreator(TYyUser creator)
	{
		this.creator = creator;
	}

	public java.util.Set<TYyUserGroupMapping> getUserGroupMappings()
	{
		return this.userGroupMappings;
	}

	public void setUserGroupMappings(java.util.Set<TYyUserGroupMapping> userGroupMappings)
	{
		this.userGroupMappings = userGroupMappings;
	}

}