package com.feinno.nss.model.beans;

public class UserGroupSetting
{
	private Integer id;
	private Boolean isSmsNotice;
	private Boolean isEmailNotice;
	private Boolean isFreeAddUser;
	private Boolean isFreeUpdateInfo;
	private Boolean isOpen;
	private Boolean isVerify;

	public UserGroupSetting()
	{
	}

	public UserGroupSetting(Integer id
			, Boolean isSmsNotice
			, Boolean isEmailNotice
			, Boolean isFreeAddUser
			, Boolean isFreeUpdateInfo
			, Boolean isOpen
			, Boolean isVerify)
	{
		this.id = id;
		this.isSmsNotice = isSmsNotice;
		this.isEmailNotice = isEmailNotice;
		this.isFreeAddUser = isFreeAddUser;
		this.isFreeUpdateInfo = isFreeUpdateInfo;
		this.isOpen = isOpen;
		this.isVerify = isVerify;
	}

	public Integer getId()
	{
		return this.id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public Boolean getIsSmsNotice()
	{
		return this.isSmsNotice;
	}

	public void setIsSmsNotice(Boolean isSmsNotice)
	{
		this.isSmsNotice = isSmsNotice;
	}

	public Boolean getIsEmailNotice()
	{
		return this.isEmailNotice;
	}

	public void setIsEmailNotice(Boolean isEmailNotice)
	{
		this.isEmailNotice = isEmailNotice;
	}

	public Boolean getIsFreeAddUser()
	{
		return this.isFreeAddUser;
	}

	public void setIsFreeAddUser(Boolean isFreeAddUser)
	{
		this.isFreeAddUser = isFreeAddUser;
	}

	public Boolean getIsFreeUpdateInfo()
	{
		return this.isFreeUpdateInfo;
	}

	public void setIsFreeUpdateInfo(Boolean isFreeUpdateInfo)
	{
		this.isFreeUpdateInfo = isFreeUpdateInfo;
	}

	public Boolean getIsOpen()
	{
		return this.isOpen;
	}

	public void setIsOpen(Boolean isOpen)
	{
		this.isOpen = isOpen;
	}

	public Boolean getIsVerify()
	{
		return this.isVerify;
	}

	public void setIsVerify(Boolean isVerify)
	{
		this.isVerify = isVerify;
	}
}
