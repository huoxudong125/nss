package com.feinno.nss.framework.controller.action.user;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.feinno.nss.core.utils.Page;
import com.feinno.nss.factory.Factory;
import com.feinno.nss.framework.controller.action.CommonAction;
import com.feinno.nss.model.beans.User;
import com.feinno.nss.model.beans.UserQuery;
import com.feinno.nss.persistence.impl.UserDao;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends CommonAction
{
	private static final Log logger = LogFactory.getLog(UserAction.class);

	// ----------------列出所有用户-----------------------
	private List<User> list;

	public void setList(List<User> list)
	{
		this.list = list;
	}

	public List<User> getList()
	{
		return list;
	}

	public String getAll()
	{
		String res = SUCCESS;
		try
		{
			list = Factory.getUserService().getAll();
		}
		catch (Exception e)
		{
			logger.error("获取用户失败", e);
		}
		return res;
	}

	// ------------------转向添加用户页面----------------------
	private String[] sexs = new String[]
	{"男", "女"};

	public String[] getSexs()
	{
		return sexs;
	}

	public void setSexs(String[] sexs)
	{
		this.sexs = sexs;
	}

	public String toAdd()
	{
		return "toAdd";
	}

	// -----------------提交添加用户-----------------------
	private User user;

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public String add()
	{
		String returnValue = SUCCESS;
		try
		{
			Factory.getUserService().createUser(user);
		}
		catch (Exception e)
		{
			returnValue = ERROR;
			logger.error("创建用户失败");
		}
		return this.getAll();
	}
	
	// -----------------转向修改用户-----------------------
	public String toUpdate()
	{
		user =  Factory.getUserService().getSigleUser(user.getUserId());
		return "toUpdate";
	}
	
	// -----------------修改用户-----------------------
	public String update()
	{
		Factory.getUserService().updateUser(user);
		return this.getAll();
	}	
	// -----------------删除用户-----------------------
	public String delete()
	{
		Factory.getUserService().deleteUser(user.getUserId());
		return this.getAll();
	}	
	
	// -----------------转向查询用户-----------------------
	public String toQuery()
	{
		return "toQuery";
	}
	// -----------------查询用户-----------------------

	private UserQuery uq;
	public void setUq(UserQuery uq)
	{
		this.uq = uq;
	}

	public UserQuery getUq()
	{
		return uq;
	}
	
//	public String query()
//	{
//		list =Factory.getUserService().getByCondition(uq);
//		return "toList";
//	}
	
	public String query() {
		String returnValue = "toList";
		try {
			User u = new User();
			String pagenumO = getRequest().getParameter("pageNum");
			int pagenum = 0;
			String userName = getRequest().getParameter("userName");
			if (pagenumO != null) {
				pagenum = Integer.parseInt(pagenumO);
			}
			u.setName(userName);
			Page page = Factory.getUserService().getPage(pagenum, 10, u);
			List<User> planList = Factory.getUserService().getPlanList(page, u);
			getRequest().setAttribute("userList", planList);
			getRequest().setAttribute("pageInfo", page);
			getRequest().setAttribute("userNameV", userName);

		} catch (Exception e) {
			returnValue = "toList";
			logger.error("查询数据错误！", e);
		}
		return "toList";

	}
}
