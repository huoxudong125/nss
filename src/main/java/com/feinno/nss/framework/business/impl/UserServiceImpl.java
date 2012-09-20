package com.feinno.nss.framework.business.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.framework.business.iface.IUserService;
import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserQuery;
import com.feinno.nss.persistence.iface.IUserDao;

public class UserServiceImpl implements IUserService {
	private static final Logger logger = LoggerFactory
			.getLogger(UserServiceImpl.class);
	private IUserDao userDao;

	public void setUserDao(IUserDao userDao) {
		this.userDao = userDao;
	}

	public IUserDao getUserDao() {
		return userDao;
	}

	public void createUser(User user) {
		try {
			getUserDao().createUser(user);
		} catch (BusinessException e) {
			logger.error("插入用户失败", e);
		}
	}

	public void createTYyUser(TYyUser user) {
		try {
			getUserDao().createTYyUser(user);
		} catch (BusinessException e) {
			logger.error("插入用户失败", e);
		}
	}

	
	public void deleteUser(int userId) {
		try {
			getUserDao().deleteUser(userId);
		} catch (BusinessException e) {
			logger.error("删除用户失败", e);
		}
	}

	public List<User> getAll() {
		return getUserDao().getAll();
	}

	public List<User> getByCondition(UserQuery uq) {
		return getUserDao().getByCondition(uq);
	}

	public Page getPage(int pagenum, int pagesize, User u) throws Exception {

		Page vpage = null;

		UserQuery uq = new UserQuery();
		uq.setName(u.getName());

		long count = getCount(uq);

		vpage = new Page(count, pagesize);

		if (pagenum != 0) {
			vpage.setPage(pagenum);
		}
		return vpage;
	}

	public List<User> getPlanList(Page page, User u) throws Exception {
		int pageSize = page.getPageSize();
		int pageNow = page.getPage();
		int offset = (pageNow * pageSize - pageSize);

		UserQuery uq = new UserQuery();
		uq.setName(u.getName());

		List<User> listUser = new ArrayList<User>();

		List rs = getUserDao().findByPage(uq, offset, pageSize);

		if (rs == null || rs.size() == 0) {
			return null;
		}

		User vuser = null;
		for (int i = 0; i < rs.size(); i++) {
			vuser = (User) rs.get(i);

			listUser.add(vuser);
		}
		return listUser;
	}

	public long getCount(UserQuery uq) {
		try {
			return getUserDao().getUserCount(uq);
		} catch (BusinessException e) {
			logger.error("查询用户失败", e);
		}
		return 0;

	}

	public User getSigleUser(int userId) {
		return getUserDao().getSigleUser(userId);
	}

	public void updateUser(User user) {
		try {
			getUserDao().updateUser(user);
		} catch (BusinessException e) {
			logger.error("更新用户失败。", e);
		}
	}
	
	public void updateTYyUser(TYyUser user) {
		try {
			getUserDao().updateTYyUser(user);
		} catch (BusinessException e) {
			logger.error("更新用户失败。", e);
		}
	}

	public TYyUser getUserByUserName(String userName) {
		try {
			TYyUser ret = getUserDao().getUserByUserName(userName);
			return ret;
		} catch (Exception ex) {
			return null;
		}
	}
	
	public TYyUser getUserById(int userId) {
		try {
			TYyUser ret = getUserDao().getUserById(userId);
			return ret;
		} catch (Exception ex) {
			return null;
		}
	}

}
