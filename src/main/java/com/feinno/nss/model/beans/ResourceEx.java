package com.feinno.nss.model.beans;

public class ResourceEx extends TYyResource {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private TYySystemResourceType systemResourceType;
	
	public void setSystemResourceType(TYySystemResourceType systemResourceType){
		this.systemResourceType =systemResourceType;
	}
	
	public TYySystemResourceType getSystemResourceType(){
		return this.systemResourceType;
	}

}
