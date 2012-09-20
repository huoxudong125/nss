package com.feinno.nss.persistence.impl;

import java.io.Serializable;
import java.util.List;

import com.feinno.nss.model.beans.TYySystemResourceType;
import com.feinno.nss.persistence.iface.ISystemResourceTypeDao;

public class SystemResourceTypeDao extends BaseDao<TYySystemResourceType> implements ISystemResourceTypeDao {
	
	public String getTypeNameById( int id )
	{
		TYySystemResourceType srt = this.getById(id);
		if( srt!=null){
			return srt.getName();
		}
		return null;
	}

}
