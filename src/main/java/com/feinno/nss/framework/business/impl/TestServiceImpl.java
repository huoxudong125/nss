package com.feinno.nss.framework.business.impl;

import java.util.List;

import com.feinno.nss.framework.business.iface.ITestService;
import com.feinno.nss.model.beans.Test;
import com.feinno.nss.persistence.iface.*;
import com.feinno.nss.framework.business.iface.*;
import com.feinno.nss.framework.business.impl.*;;

public class TestServiceImpl implements ITestService {

	private ITestDao testDao;
	
	public List<Test> listTests() {
		return testDao.findTest();
	}

	public ITestDao getTestDao() {
		return testDao;
	}

	public void setTestDao(ITestDao testDao) {
		this.testDao = testDao;
	}

	
}
