package com.feinno.nss.persistence.impl;

import java.util.List;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import com.feinno.nss.model.beans.*;
import com.feinno.nss.persistence.iface.*;

public class TestDaoImpl extends HibernateDaoSupport implements ITestDao
{
	public List<Test> findTest()
	{
		String hql="from Test where 1=1 ";
		return this.getHibernateTemplate().find(hql);
	}
}
