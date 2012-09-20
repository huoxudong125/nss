package com.feinno.nss.framework.utils;


public class FileHelper
{
	public static String getExtentsByFileName(String fileName)
	{
		String prefix=fileName.substring(fileName.lastIndexOf(".")+1);
		return  prefix.toLowerCase();
	}
}
