package com.feinno.nss.framework.controller.action.UserView;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.user.NssUserAction;
import com.feinno.nss.framework.controller.helper.UserSessionObj;
import com.feinno.nss.model.beans.AttentionEntity;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.opensymphony.xwork2.Action;

public class AttentionAction extends UserViewAction {

	private static final Log logger = LogFactory.getLog(AttentionAction.class);
	private final int PageSize = 10;

	public String execute() {
		SetBasicInfo();

		try {
			// 分页参数
			String pageIndexStr = getRequest().getParameter("pageIndex");
			int pageIndex = 1;
			if (pageIndexStr != null) {
				pageIndex = Integer.parseInt(pageIndexStr);
			}

			// 保存分页信息
			int recordCount = Factory.getUserAttentionService()
					.getAttentionCount(id);
			Page page = new Page(recordCount, PageSize);
			page.setPage(pageIndex);

			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("recordCount", recordCount);

			List<TYyUserAttention> uaList = Factory.getUserAttentionService()
					.getAttentions(id, pageIndex, PageSize);
			SetList(uaList);
		} catch (Exception e) {
			logger.error("获取用户关注用户失败", e);
		}

		return Action.SUCCESS;
	}

	private void SetList(List<TYyUserAttention> uaList) {

		int loginedUserId = -1;
		UserSessionObj loginedUser = getUserSessionInfo();
		if (loginedUser != null) {
			loginedUserId = loginedUser.getId();
		}

		List<AttentionEntity> list = new ArrayList<AttentionEntity>();
		for (TYyUserAttention ua : uaList) {
			AttentionEntity ae = new AttentionEntity();
			ae.setTargetId(ua.getId().getTargetId());
			ae.setFansCount(Factory.getUserAttentionService().getFansCount(
					ae.getTargetId(), ua.getId().getType()));
			ae.setSharedCount(Factory.getResourceTypeMappingService()
					.getSharedResCount(ua.getId().getTargetId(),
							ua.getId().getType() - 1));

			if (ua.getId().getType() == 1) {
				ae.setType("user");
				TYyUser usr = Factory.getUserService().getUserById(
						ae.getTargetId());
				if (usr != null) {
					ae.setNickName(usr.getNickName());
					ae.setDescription(usr.getDescription());
					ae.setLogoImgUrl(usr.getPhotoImage());
				}
				ae.setAttendCount(Factory.getUserAttentionService()
						.getAttentionCount(ua.getId().getTargetId()));
			} else {
				ae.setType("group");
				TYyUserGroup grp = Factory.getUserGroupService()
						.getSingleGroup(ae.getTargetId());
				if (grp != null) {
					ae.setNickName(grp.getName());
					ae.setDescription(grp.getDescription());
					ae.setLogoImgUrl(grp.getLogoImage());
				}

				List<TYyUser> adminList = Factory.getUserGroupService()
						.getAdmins(ae.getTargetId());
				ae.setAdmins(adminList);
				ae.setMemberCount(Factory.getUserGroupService().getGroupMemberCount(ua.getId().getTargetId()));
			}

			if (loginedUserId > -1) {
				ae.setLoginedUserId(loginedUserId);
				boolean hasAttented = Factory.getUserAttentionService()
						.hasAttention(loginedUserId, ua.getId().getTargetId(),
								ua.getId().getType());
				ae.setIHaveAttented(hasAttented ? 1 : 0);
			} else {
				ae.setIHaveAttented(-1);
			}

			list.add(ae);
		}

		this.getRequest().setAttribute("list", list);
	}

}
