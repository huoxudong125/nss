package com.feinno.nss.framework.controller.action.userGroup;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.TYyUserGroup;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class AddMemberAction extends CommonAction {

	
	private static final Log logger =LogFactory.getLog(AddMemberAction.class);
	
	private int groupId;//要查看的群ID
	private int isVerify;//申请认证
	private String userName;//要添加的成员名称
	private String bulletin;//要添加的公告内容
	int result;//发回结果值
	
	public int getIsVerify() {
		return isVerify;
	}
	public void setIsVerify(int isVerify) {
		this.isVerify = isVerify;
	}
	
	public String getBulletin() {
		return bulletin;
	}
	public void setBulletin(String bulletin) {
		this.bulletin = bulletin;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}
	
	public int getResult()
	{
		return result;
	}

	public void setResult(int result)
	{
		this.result = result;
	}
	
	public String openaddMemberJsp()
	{
		String returnValue = SUCCESS;
		System.out.println("openaddMemberJsp 的 参数是 groupId:"+groupId);
		return returnValue;
	}
	
	public String openaddBulletinJsp()
	{
		String returnValue = SUCCESS;
		System.out.println("openaddBulletinJsp 的 参数是 groupId:"+groupId);
		return returnValue;
	}
	public String openaIsVerifyJsp()
	{
		String returnValue = SUCCESS;
		System.out.println("openaIsVerifyJsp 的 参数是 groupId:"+groupId);
		return returnValue;
	}
	
	
	// 0失败 1 成功    2 不存在  3群组不明  4已添加了用户
	public String addMember()
	{
		String returnValue = SUCCESS;
		try
		{
			if(groupId ==0)
			{
				result =3;
				return returnValue;
			}
			result =Factory.getUserGroupService().addMember(this.userName,groupId);
		}
		catch (Exception e)
		{
			result=0;
			returnValue=ERROR;
			logger.error("添加群成员失败");
		}
		return returnValue;
	}
	
	// 0失败 1 成功  2群组不明
	public String updateIsVerify()
	{
		String returnValue = SUCCESS;
		try
		{
			if(groupId ==0)
			{
				result =2;
				return returnValue;
			}
			TYyUserGroup tug =Factory.getUserGroupService().getSingleGroup(this.groupId);
		    tug.setIsVerify(this.isVerify);//申请认证
		    
			result =Factory.getUserGroupService().updateGroup(tug);
		}
		catch (Exception e)
		{
			result=0;
			returnValue=ERROR;
			logger.error("添加公告失败"+e);
		}
		return returnValue;
	}
	
	// 0失败 1 成功  2群组不明
	public String updateBulletin()
	{
		String returnValue = SUCCESS;
		try
		{
			if(groupId ==0)
			{
				result =2;
				return returnValue;
			}
		    TYyUserGroup tug =Factory.getUserGroupService().getSingleGroup(this.groupId);
		    tug.setBulletin(this.bulletin);//公告
			
			result =Factory.getUserGroupService().updateGroup(tug);
		}
		catch (Exception e)
		{
			result=0;
			returnValue=ERROR;
			logger.error("添加公告失败"+e);
		}
		return returnValue;
	}
	
	
	
	
	
	
}
