package com.feinno.nss.model.beans;

import java.sql.Timestamp;

public class SharedResource implements java.io.Serializable {

	private String resourceName;
	private int resourceId;
	private int size;
	private Timestamp createDate;
	private String systemResourceTypeName;

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourceName() {
		return this.resourceName;
	}
	
	public void setResourceId(int resourceId){
		this.resourceId = resourceId;
	}
	
	public int getResourceId(){
		return this.resourceId;
	}
	
	public void setSize( int size ){
		this.size = size;
	}
	
	public int getSize(){
		return this.size;
	}
	
	public void setCreateDate(Timestamp createDate){
		this.createDate = createDate;
	}
	
	public Timestamp getCreateDate(){
		return this.createDate;
	}
	
	public void setSystemResourceTypeName(String systemResourceTypeName){
		this.systemResourceTypeName = systemResourceTypeName;
	}
	
	public String getSystemResourceTypeName(){
		return this.systemResourceTypeName;
	}
}
