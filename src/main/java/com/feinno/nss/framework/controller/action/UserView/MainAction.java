package com.feinno.nss.framework.controller.action.UserView;

import java.util.ArrayList;
import java.util.List;

import com.feinno.nss.factory.Factory;
import com.feinno.nss.model.beans.SharedResource;
import com.feinno.nss.model.beans.TYyResourceTypeMapping;
import com.feinno.nss.model.beans.TYyUser;
import com.opensymphony.xwork2.Action;

public class MainAction extends UserViewAction {
	public String execute() {
		SetBasicInfo();

		TYyUser userInfo = Factory.getUserService().getUserById(id);
		if (userInfo != null) {
			userInfo.setHomePageViewCount(userInfo.getHomePageViewCount() + 1);
			Factory.getUserService().updateTYyUser(userInfo);

			this.getRequest().setAttribute("UserName", userInfo.getUserName());
			this.getRequest().setAttribute("NickName", userInfo.getNickName());
			this.getRequest().setAttribute("Tel", userInfo.getTel());
		}

		// 最近分享
		List<TYyResourceTypeMapping> mapList = Factory
				.getResourceTypeMappingService().GetRecentShare(id,
						type == "user" ? 0 : 1);
		List<SharedResource> list = new ArrayList<SharedResource>();
		if (mapList != null && mapList.size() > 0) {
			for (TYyResourceTypeMapping mp : mapList) {
				SharedResource res = new SharedResource();
				res.setResourceId(mp.getResource().getId());
				res.setResourceName(mp.getResource().getTitle());
				res.setSize(mp.getResource().getSize());
				res.setCreateDate(mp.getCreateDate());
				res.setSystemResourceTypeName(Factory
						.getSystemResourceTypeService().getTypeNameById(
								mp.getResource().getSystemResourceTypeId()));

				list.add(res);
			}
		}

		this.getRequest().setAttribute("list", list);
		return Action.SUCCESS;
	}

}
