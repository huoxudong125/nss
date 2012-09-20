package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserQuery;

public interface IUserDao
{
	void createUser(User user)throws BusinessException;
	void createTYyUser(TYyUser user)throws BusinessException;
	void updateUser(User user)throws BusinessException;
	void updateTYyUser(TYyUser user)throws BusinessException;
	void deleteUser(int userId)throws BusinessException;
	User getSigleUser(int userId);
	TYyUser getUserById(int userId);
	TYyUser getUserByUserName(String userName);
	List<User> getAll();
	List<User> getByCondition(UserQuery uq);
	
	long getUserCount(UserQuery uq)throws BusinessException;
	List findByPage(UserQuery uq, final int offset, final int pageSize);
}
