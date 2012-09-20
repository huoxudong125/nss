package com.feinno.nss.framework.controller.action.UserView;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.framework.controller.helper.UserSessionObj;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserGroup;

public abstract class UserViewAction extends CommonAction {

	private static final long serialVersionUID = 1L;
	protected String type; // 个人用户：user 群： group
	protected int typeVal; // 1个人  2群
	protected int id; // 用户或群id

	protected void SetBasicInfo() {
		SetLoginInfo();
		SetMenuInfo();
		SetAttentionInfo();
	}

	private void SetMenuInfo() {
		type = this.getRequest().getParameter("type");
		id = Integer.parseInt(this.getRequest().getParameter("id"));

		String curNickName = "UNDEFINED";
		String curUserName = "UNDEFINED";
		String imageUrl = "";
		String regDate = "";
		String lastLoginDate = "";
		String description = "";
		int viewCount = 0;
		int viewSortNo = 0;
		int sharedCount = 0;
		int sharedSortNo = 0;

		int attensCount = 0;
		int fansCount = 0;

		if (type.equalsIgnoreCase("user")) {
			typeVal = 1;
			TYyUser curUser = Factory.getUserService().getUserById(id);
			if (curUser != null) {
				curNickName = curUser.getNickName();
				curUserName = curUser.getUserName();
				imageUrl = curUser.getPhotoImage();

				regDate = curUser.getCreateDate().toString();
				lastLoginDate = curUser.getLastLoginDate().toString();
				viewCount = curUser.getHomePageViewCount();
				description = curUser.getDescription();

				sharedCount = Factory.getResourceTypeMappingService()
						.getSharedResCount(id, 0);
				sharedSortNo = Factory.getResourceTypeMappingService()
						.getSharedSortNo(id, 0);
				viewSortNo = Factory.getNssUserService().getViewSortNo(id);
			}

			attensCount = Factory.getNssUserService()
					.getAttentionUsersCount(id);
			fansCount = Factory.getNssUserService().getFansCount(id, 1);
		} else {
			typeVal = 2;
			TYyUserGroup curGroup = Factory.getUserGroupService()
					.getSingleGroup(id);
			if (curGroup != null) {
				curNickName = curGroup.getName();
				curUserName = curGroup.getGroupCode();
				imageUrl = curGroup.getLogoImage();

				regDate = curGroup.getCreateDate().toString();
				description = curGroup.getDescription();

				sharedCount = Factory.getResourceTypeMappingService()
						.getSharedResCount(id, 1);
				sharedSortNo = Factory.getResourceTypeMappingService()
						.getSharedSortNo(id, 1);
			}

			fansCount = Factory.getNssUserService().getFansCount(id, 1);
		}

		this.getRequest().setAttribute("curNickName", curNickName);
		this.getRequest().setAttribute("curUserName", curUserName);
		this.getRequest().setAttribute("attensCount", attensCount);
		this.getRequest().setAttribute("fansCount", fansCount);
		this.getRequest().setAttribute("imageUrl", imageUrl);

		this.getRequest().setAttribute("regDate", regDate);
		this.getRequest().setAttribute("lastLoginDate", lastLoginDate);
		this.getRequest().setAttribute("viewCount", viewCount);
		this.getRequest().setAttribute("description", description);

		this.getRequest().setAttribute("sharedCount", sharedCount);
		this.getRequest().setAttribute("sharedSortNo", sharedSortNo);
		this.getRequest().setAttribute("viewSortNo", viewSortNo);
	}

	private void SetLoginInfo() {
		UserSessionObj userInfo = getUserSessionInfo();
		if (userInfo == null) {
			this.getRequest().setAttribute("IsLogon", false);
		} else {
			this.getRequest().setAttribute("IsLogon", true);
			this.getRequest().setAttribute("NickName", userInfo.getNickName());
			this.getRequest().setAttribute("UserName", userInfo.getUserName());
		}
	}

	private void SetAttentionInfo() {
		int hasAttention = -1; // -1未登录 0未关注 1已关注

		UserSessionObj userInfo = getUserSessionInfo();
		if (userInfo != null) {
			this.getRequest().setAttribute("LoginUserId", userInfo.getId());

			int targetUserType = type.equalsIgnoreCase("user") ? 1 : 2;
			this.getRequest().setAttribute("TargetUserType", targetUserType);

			if (Factory.getUserAttentionService().hasAttention(
					userInfo.getId(), id, targetUserType)) {
				hasAttention = 1;
			} else {
				hasAttention = 0;
			}
		}

		this.getRequest().setAttribute("hasAttention", hasAttention);
	}

}
