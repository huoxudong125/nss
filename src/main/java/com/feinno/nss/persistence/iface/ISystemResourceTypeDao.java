package com.feinno.nss.persistence.iface;

import com.feinno.nss.model.beans.TYySystemResourceType;

public interface ISystemResourceTypeDao extends IBaseDao {

	String getTypeNameById( int id );
}
