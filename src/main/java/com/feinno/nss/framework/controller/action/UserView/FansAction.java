package com.feinno.nss.framework.controller.action.UserView;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.helper.UserSessionObj;
import com.feinno.nss.model.beans.AttentionEntity;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserGroup;
import com.opensymphony.xwork2.Action;

public class FansAction extends UserViewAction {

	private static final Log logger = LogFactory.getLog(FansAction.class);
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
			int recordCount = Factory.getUserAttentionService().getFansCount(
					id, typeVal);
			Page page = new Page(recordCount, PageSize);
			page.setPage(pageIndex);

			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("recordCount", recordCount);

			List<TYyUserAttention> uaList = Factory.getUserAttentionService()
					.getFans(id, typeVal, pageIndex, PageSize);
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
			ae.setTargetId(ua.getId().getUserId());
			ae.setFansCount(Factory.getUserAttentionService().getFansCount(
					ae.getTargetId(), 1));
			ae.setSharedCount(Factory.getResourceTypeMappingService()
					.getSharedResCount(ua.getId().getUserId(), 1));

			ae.setType("user");
			TYyUser usr = Factory.getUserService()
					.getUserById(ae.getTargetId());
			if (usr != null) {
				ae.setNickName(usr.getNickName());
				ae.setDescription(usr.getDescription());
				ae.setLogoImgUrl(usr.getPhotoImage());
			}
			ae.setAttendCount(Factory.getUserAttentionService()
					.getAttentionCount(ua.getId().getUserId()));

			if (loginedUserId > -1) {
				ae.setLoginedUserId(loginedUserId);
				boolean hasAttented = Factory.getUserAttentionService()
						.hasAttention(loginedUserId, ua.getId().getUserId(), 1);
				ae.setIHaveAttented(hasAttented ? 1 : 0);
			} else {
				ae.setIHaveAttented(-1);
			}

			list.add(ae);
		}

		this.getRequest().setAttribute("list", list);
	}

}
