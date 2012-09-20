package com.feinno.nss.model.beans;

public class UserGroupExt
{
	private int id;
	private String groupCode;
	private String name;
	private String description;
	private int opencnt;
	private String createrUserName;
	private int createrUserId;
	private int membersCount;
	private int attentionCount;
	private String managers;
	private String creator;
	private String createDate;
	private String logoImage;

	
	public int getCreaterUserId() {
		return createrUserId;
	}

	public void setCreaterUserId(int createrUserId) {
		this.createrUserId = createrUserId;
	}
	
	public int getMembersCount()
	{
		return this.membersCount;
	}

	public void setMembersCount(int membersCount)
	{
		this.membersCount = membersCount;
	}

	public int getAttentionCount()
	{
		return this.attentionCount;
	}

	public void setAttentionCount(int attentionCount)
	{
		this.attentionCount = attentionCount;
	}

	public String getManagers()
	{
		return this.managers;
	}

	public void setManagers(String managers)
	{
		this.managers = managers;
	}

	public String getCreator()
	{
		return this.creator;
	}

	public void setCreator(String creator)
	{
		this.creator = creator;
	}



	public String getCreaterUserName()
	{
		return this.createrUserName;
	}

	public void setCreaterUserName(String createrUserName)
	{
		this.createrUserName = createrUserName;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public int getOpencnt()
	{
		return opencnt;
	}

	public void setOpencnt(int opencnt)
	{
		this.opencnt = opencnt;
	}

	public String getLogoImage()
	{
		return this.logoImage;
	}

	public void setLogoImage(String logoImage)
	{
		this.logoImage = logoImage;
	}

	public String getGroupCode()
	{
		return this.groupCode;
	}

	public void setGroupCode(String groupCode)
	{
		this.groupCode = groupCode;
	}

}
