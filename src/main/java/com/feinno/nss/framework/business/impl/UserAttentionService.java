package com.feinno.nss.framework.business.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feinno.nss.framework.business.iface.IUserAttentionService;
import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserAttentionId;
import com.feinno.nss.persistence.iface.INssUserDao;
import com.feinno.nss.persistence.iface.IUserAttentionDao;
import com.feinno.nss.persistence.iface.IUserAttentionMappingDao;
import com.feinno.nss.persistence.iface.IUserGroupMappingDao;

public class UserAttentionService implements IUserAttentionService {

	private static final Logger logger = LoggerFactory
			.getLogger(UserAttentionService.class);
	private IUserAttentionDao userAttentionDao;

	public void setUserAttentionDao(IUserAttentionDao userAttentionDao) {
		this.userAttentionDao = userAttentionDao;
	}

	public IUserAttentionDao getUserAttentionDao() {
		return this.userAttentionDao;
	}

	public void addAttention(int userId, int targetId, int targetType) {
		this.userAttentionDao.addAttention(userId, targetId, targetType);
	}

	public void deleteAttention(int userId, int targetId, int targetType) {
		this.userAttentionDao.cancleAttention(userId, targetId, targetType);
	}

	public boolean hasAttention(int userId, int targetId, int targetType) {
		return this.userAttentionDao.hasAttention(userId, targetId, targetType);
	}

	public int getAttentionCount(int userId) {
		return this.userAttentionDao.getAttentionCount(userId);
	}

	public int getFansCount(int userId, int type) {
		return this.userAttentionDao.getFansCount(userId, type);
	}

	public List<TYyUserAttention> getAttentions(int userId, int pageIndex,
			int pageSize) {
		return this.userAttentionDao.getAttentions(userId, pageIndex, pageSize);
	}

	public List<TYyUserAttention> getFans(int userId, int type, int pageIndex,
			int pageSize) {
		return this.userAttentionDao.getFans(userId, type, pageIndex, pageSize);
	}
}
