/*
 * 文件名： PasswordEncoderMD5Impl.java
 * 
 * 创建日期： 2009-3-25
 *
 * Copyright(C) 2009, by xiaozhi.
 *
 * 原始作者: <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 *
 */
package com.feinno.nss.core.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * IPasswordEncoder接口的实现
 * 
 * @author <a href="mailto:xiaozhi19820323@hotmail.com">xiaozhi</a>
 * 
 * @version $Revision: 20314 $
 * 
 * @since 2009-3-25
 */
public class PasswordEncoderMD5Impl {

	/*
	 * 
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.feinno.dp.framework.util.encrypt.interfaces.IPasswordEncoder#encode(java
	 * .lang.String)
	 */
	public String encode(String inStr) {
		MessageDigest md = null;
		String outStr = null;
		try {
			md = MessageDigest.getInstance("MD5"); // 可以选中其他的算法如SHA
			byte[] digest = md.digest(inStr.getBytes()); // 返回的是byet[]，要转化为String存储比较方便
			String str = "";
			String tempStr = "";
			for (int i = 1; i < digest.length; i++) {
				tempStr = (Integer.toHexString(digest[i] & 0xff));
				if (tempStr.length() == 1) {
					str = str + "0" + tempStr;
				} else {
					str = str + tempStr;
				}
			}
			outStr = str;
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return outStr;
	}

}
