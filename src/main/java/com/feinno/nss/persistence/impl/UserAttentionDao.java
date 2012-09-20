package com.feinno.nss.persistence.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;

import com.feinno.nss.model.beans.TYyUserAttention;
import com.feinno.nss.model.beans.TYyUserAttentionId;
import com.feinno.nss.model.beans.UserExt;
import com.feinno.nss.persistence.iface.IUserAttentionDao;

public class UserAttentionDao extends BaseDao<TYyUserAttention> implements
		IUserAttentionDao {

	public void addAttention(int userId, int targetId, int targetType) {
		TYyUserAttentionId id = new TYyUserAttentionId();
		id.setUserId(userId);
		id.setTargetId(targetId);
		id.setType(targetType);

		TYyUserAttention obj = new TYyUserAttention();
		obj.setId(id);
		this.saveOrUpdate(obj);
	}

	public void cancleAttention(int userId, int targetId, int targetType) {
		TYyUserAttentionId id = new TYyUserAttentionId(userId, targetId,
				targetType);
		TYyUserAttention obj = new TYyUserAttention(id);

		this.delete(obj);
	}

	public boolean hasAttention(int userId, int targetId, int targetType) {
		TYyUserAttentionId id = new TYyUserAttentionId(userId, targetId,
				targetType);
		TYyUserAttention ua = this.getById(id);
		return ua != null;
	}

	public int getAttentionCount(int userId) {
		int count = 0;
		String sql = "SELECT COUNT(*) FROM T_YY_UserAttention WHERE UserID=?";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		count = Integer.parseInt(query.uniqueResult().toString());
		return count;
	}

	public int getFansCount(int userId, int type) {
		int count = 0;
		String sql = "SELECT COUNT(*) FROM T_YY_UserAttention WHERE TargetId=? and Type=?";
		Query query = this.getSession().createSQLQuery(sql);
		query.setParameter(0, userId);
		query.setParameter(1, type);
		count = Integer.parseInt(query.uniqueResult().toString());
		return count;
	}

	public List<TYyUserAttention> getAttentions(int userId, int pageIndex, int pageSize) {
		String hql = "from TYyUserAttention where UserId=?";
		Object[] params = new Object[1];
		params[0] = userId;
		return this.getPageList(hql, params, pageIndex, pageSize);
	}
	
	public List<TYyUserAttention> getFans(int userId, int type, int pageIndex, int pageSize) {
		String hql = "from TYyUserAttention where TargetId=? and Type=?";
		Object[] params = new Object[2];
		params[0] = userId;
		params[1] = type;
		return this.getPageList(hql, params, pageIndex, pageSize);
	}
}
