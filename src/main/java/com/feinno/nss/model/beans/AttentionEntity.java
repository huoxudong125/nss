package com.feinno.nss.model.beans;

import java.util.List;

public class AttentionEntity implements java.io.Serializable {
	private String type; // user / group
	private int targetId;
	private String nickName;
	private String description;
	private int fansCount;
	private int attendCount;
	private int sharedCount;
	private int memberCount;
	private List<TYyUser> admins;
	private String logoImgUrl;
	
	private int iHaveAttented;   // -1 未登录  1已关注  0 未关注
	private int loginedUserId;

	public void setType(String type) {
		this.type = type;
	}

	public String getType() {
		return this.type;
	}

	public void setTargetId(int targetId) {
		this.targetId = targetId;
	}

	public int getTargetId() {
		return this.targetId;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getNickName() {
		return this.nickName;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return this.description;
	}

	public void setFansCount(int fansCount) {
		this.fansCount = fansCount;
	}

	public int getFansCount() {
		return this.fansCount;
	}

	public void setAttendCount(int attendCount) {
		this.attendCount = attendCount;
	}

	public int getAttendCount() {
		return this.attendCount;
	}

	public void setSharedCount(int sharedCount) {
		this.sharedCount = sharedCount;
	}

	public int getSharedCount() {
		return this.sharedCount;
	}

	public void setAdmins(List<TYyUser> admins) {
		this.admins = admins;
	}

	public List<TYyUser> getAdmins() {
		return this.admins;
	}
	
	public void setIHaveAttented(int iHaveAttented){
		this.iHaveAttented = iHaveAttented;
	}
	
	public int getIHaveAttented(){
		return this.iHaveAttented;
	}
	
	public void setLoginedUserId( int loginedUserId ){
		this.loginedUserId = loginedUserId;
	}
	
	public int getLoginedUserId(){
		return this.loginedUserId;
	}
	
	public void setLogoImgUrl( String logoImgUrl){
		this.logoImgUrl = logoImgUrl;
	}
	
	public String getLogoImgUrl(){
		return this.logoImgUrl;
	}
	
	public void setMemberCount(int memberCount){
		this.memberCount = memberCount;
	}
	
	public int getMemberCount(){
		return this.memberCount;
	}
}
