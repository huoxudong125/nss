package com.feinno.nss.persistence.iface;

import java.util.List;

import com.feinno.nss.model.beans.Test;

public interface ITestDao
{

	List<Test> findTest();

}
