package com.feinno.nss.model.beans;

import java.awt.Point;

/**
 * @author ; kongqingtao
 * @Description : TODO
 * @CreateDate ; 2012-9-6 下午03:21:24
 * @lastModified ; 2012-9-6 下午03:21:24
 * @version ; 1.0
 */
public class ResourceType
{
	private String extendName;
	private String x; //图像X坐标
	private String y; //图像Y坐标
	private String name;
	
	public void setExtendName(String extendName)
	{
		this.extendName = extendName;
	}
	public String getExtendName()
	{
		return extendName;
	}
	
	public void setX(String x)
	{
		this.x = x;
	}
	public String getX()
	{
		return x;
	}
	
	
	public void setY(String y)
	{
		this.y = y;
	}
	public String getY()
	{
		return y;
	}
	
	public void setName(String name)
	{
		this.name = name;
	}
	public String getName()
	{
		return name;
	}

}
