package com.feinno.nss.framework.business.iface;

import java.util.List;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.framework.exception.BusinessException;
import com.feinno.nss.model.beans.TYyUser;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserQuery;

public interface IUserService
{
	void createUser(User user);
	void createTYyUser(TYyUser user);
	void updateUser(User user);
	void updateTYyUser(TYyUser user);
	void deleteUser(int userId);
	User getSigleUser(int userId);
	TYyUser getUserByUserName( String userName);
	TYyUser getUserById( int userId);
	List<User> getAll();
	List<User> getByCondition(UserQuery uq);
	
	long getCount(UserQuery uq);
	Page getPage(int pagenum, int pagesize, User u) throws Exception ;
	List<User> getPlanList(Page page, User u) throws Exception;
}
