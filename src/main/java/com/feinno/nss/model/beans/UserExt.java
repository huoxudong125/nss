package com.feinno.nss.model.beans;

public class UserExt implements java.io.Serializable
{
	private TYyUser user;
	private int attentionCount;
	private int fansCount;
	private int shareCount;

	private int groupId;
	private int roleInGroup;

	public UserExt(TYyUser user, int attentionCount, int fansCount, int shareCount)
	{
		this.user = user;
		this.attentionCount = attentionCount;
		this.fansCount = fansCount;
		this.shareCount = shareCount;
	}

	public UserExt(TYyUser user, Object attentionCount, Object fansCount, Object shareCount)
	{
		this.user = user;
		this.attentionCount = attentionCount == null ? 0 : Integer.parseInt(attentionCount.toString());
		this.fansCount = fansCount == null ? 0 : Integer.parseInt(fansCount.toString());
		this.shareCount = shareCount == null ? 0 : Integer.parseInt(shareCount.toString());
	}

	public UserExt(TYyUser user, Object attentionCount, Object fansCount, Object shareCount, Object roleInGroup, Object groupId)
	{
		this.user = user;
		this.attentionCount = attentionCount == null ? 0 : Integer.parseInt(attentionCount.toString());
		this.fansCount = fansCount == null ? 0 : Integer.parseInt(fansCount.toString());
		this.shareCount = shareCount == null ? 0 : Integer.parseInt(shareCount.toString());
		this.groupId = groupId == null ? 0 : Integer.parseInt(groupId.toString());
		this.roleInGroup = roleInGroup == null ? 0 : Integer.parseInt(roleInGroup.toString());
	}

	public TYyUser getUser()
	{
		return this.user;
	}

	public void setUser(TYyUser user)
	{
		this.user = user;
	}

	public int getAttentionCount()
	{
		return this.attentionCount;
	}

	public void setAttentionCount(int attentionCount)
	{
		this.attentionCount = attentionCount;
	}

	public int getFansCount()
	{
		return this.fansCount;
	}

	public void setFansCount(int fansCount)
	{
		this.fansCount = fansCount;
	}

	public int getShareCount()
	{
		return this.shareCount;
	}

	public void setShareCount(int shareCount)
	{
		this.shareCount = shareCount;
	}

	public int getGroupId()
	{
		return this.groupId;
	}

	public void setGroupId(int groupId)
	{
		this.groupId = groupId;
	}

	public int getRoleInGroup()
	{
		return this.roleInGroup;
	}

	public void setRoleInGroup(int roleInGroup)
	{
		this.roleInGroup = roleInGroup;
	}
}
