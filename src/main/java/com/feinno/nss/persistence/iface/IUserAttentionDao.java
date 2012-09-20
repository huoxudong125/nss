package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.model.beans.TYyUserAttention;

public interface IUserAttentionDao extends IBaseDao {

	boolean hasAttention(int userId, int targetId, int targetType);

	void addAttention(int userId, int targetId, int targetType);

	void cancleAttention(int userId, int targetId, int targetType);

	int getAttentionCount(int userId);

	int getFansCount(int userId, int type);
	
	List<TYyUserAttention> getAttentions( int userId, int pageIndex, int pageSize );
	
	List<TYyUserAttention> getFans(int userId, int type, int pageIndex, int pageSize);
}
