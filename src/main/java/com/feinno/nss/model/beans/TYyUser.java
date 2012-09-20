package com.feinno.nss.model.beans;

import java.sql.Timestamp;
import java.util.Set;


/**
 * TYyUser entity. @author MyEclipse Persistence Tools
 */

public class TYyUser implements java.io.Serializable
{

	// Fields

	private Integer id;
	private String userName;
	private String password;
	private String nickName;
	private String photoImage;
	private String description;
	private String tel;
	private Integer state;
	private Integer departmentId;
	private Integer userType;
	private Timestamp lastLoginDate;
	private Integer homePageViewCount;
	private Integer freeSize;
	private Integer maxSize;
	private Timestamp createDate;
//	private Set<TYyResourceTypeMapping> resourceMappings;

	// Constructors

	/** default constructor */
	public TYyUser()
	{
	}

	/** minimal constructor */
	public TYyUser(Integer state, Integer departmentId, Integer userType,
			Timestamp lastLoginDate, Integer homePageViewCount,
			Integer freeSize, Integer maxSize, Timestamp createDate)
	{
		this.state = state;
		this.departmentId = departmentId;
		this.userType = userType;
		this.lastLoginDate = lastLoginDate;
		this.homePageViewCount = homePageViewCount;
		this.freeSize = freeSize;
		this.maxSize = maxSize;
		this.createDate = createDate;
	}

	/** full constructor */
	public TYyUser(String userName, String password, String nickName,
			String photoImage, String description, String tel, Integer state,
			Integer departmentId, Integer userType, Timestamp lastLoginDate,
			Integer homePageViewCount, Integer freeSize, Integer maxSize,
			Timestamp createDate)
	{
		this.userName = userName;
		this.password = password;
		this.nickName = nickName;
		this.photoImage = photoImage;
		this.description = description;
		this.tel = tel;
		this.state = state;
		this.departmentId = departmentId;
		this.userType = userType;
		this.lastLoginDate = lastLoginDate;
		this.homePageViewCount = homePageViewCount;
		this.freeSize = freeSize;
		this.maxSize = maxSize;
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

	public String getUserName()
	{
		return this.userName;
	}

	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	public String getPassword()
	{
		return this.password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public String getNickName()
	{
		return this.nickName;
	}

	public void setNickName(String nickName)
	{
		this.nickName = nickName;
	}

	public String getPhotoImage()
	{
		return this.photoImage;
	}

	public void setPhotoImage(String photoImage)
	{
		this.photoImage = photoImage;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getTel()
	{
		return this.tel;
	}

	public void setTel(String tel)
	{
		this.tel = tel;
	}

	public Integer getState()
	{
		return this.state;
	}

	public void setState(Integer state)
	{
		this.state = state;
	}

	public Integer getDepartmentId()
	{
		return this.departmentId;
	}

	public void setDepartmentId(Integer departmentId)
	{
		this.departmentId = departmentId;
	}

	public Integer getUserType()
	{
		return this.userType;
	}

	public void setUserType(Integer userType)
	{
		this.userType = userType;
	}

	public Timestamp getLastLoginDate()
	{
		return this.lastLoginDate;
	}

	public void setLastLoginDate(Timestamp lastLoginDate)
	{
		this.lastLoginDate = lastLoginDate;
	}

	public Integer getHomePageViewCount()
	{
		return this.homePageViewCount;
	}

	public void setHomePageViewCount(Integer homePageViewCount)
	{
		this.homePageViewCount = homePageViewCount;
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

	public Timestamp getCreateDate()
	{
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate)
	{
		this.createDate = createDate;
	}

	
//	public void setResources(Set<TYyResourceTypeMapping> resourceMappings)
//	{
//		this.resourceMappings = resourceMappings;
//	}
//
//	public Set<TYyResourceTypeMapping> getResources()
//	{
//		return resourceMappings;
//	}

}