package com.feinno.nss.core.utils;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

public class Text {
	/**
	 * 判断指定对象是否存在与指定数组中。
	 * 
	 * @param oo
	 * @param o
	 * @return
	 */
	public static boolean contains(Object[] oo, Object o) {
		if (oo != null && oo.length > 0) {
			for (int i = 0; i < oo.length; i++) {
				if (oo[i] != null && oo[i].equals(o))
					return true;
			}
		}
		return false;
	}

	public static int parseInt(HttpServletRequest req, String name,
			int defaultValue) {
		String str = req.getParameter(name);
		int intVal = defaultValue;
		if (!isEmpty(str)) {
			try {
				intVal = Integer.parseInt(str);
			} catch (NumberFormatException e) {
			}
		}
		return intVal;
	}

	public static String getString(HttpServletRequest req, String name,
			String defaultValue) {
		String str = req.getParameter(name);
		return isEmpty(str) ? defaultValue : str.trim();
	}
	
	public static Integer parseInteger(HttpServletRequest req, String name,
			Integer defaultValue) {
		String str = req.getParameter(name);
		Integer intVal = defaultValue;
		if (!isEmpty(str)) {
			try {
				intVal = new Integer(str);
			} catch (NumberFormatException e) {
			}
		}
		return intVal;
	}

	public static boolean isEmpty(String str) {
		return (str == null || str.trim().length() == 0);
	}

	public static boolean isNumber(String strNum) {
		if (strNum.matches("^[0-9]*[1-9][0-9]*$")) {
			return true;
		}
		return false;
	}

	public static String parseUA(String userAgent) {
		int index = userAgent.indexOf(' ');
		if (index == -1) {
			index = userAgent.indexOf('/');
		}
		if (index == -1) {
			index = (userAgent.length() >= 30 ? 30 : userAgent.length());
		}
		return userAgent.substring(0, index);
	}

	/**
	 * 获取指定长度的字符串
	 * 
	 * @param str
	 *            String 指定字符串
	 * @param len
	 *            int 指定长度
	 * @return 指定长度的字符串
	 */
	public static String getSubstring(String str, int len) {
		if (str != null && str.trim().length() > 0) {
			char[] cs = str.toCharArray();
			int count = 0;
			int last = cs.length;
			for (int i = 0; i < cs.length; i++) {
				if (cs[i] > 255) {
					count += 2;
				} else {
					count++;
				}
				if (count > len) {
					last = i + 1;
					break;
				}
			}
			if (count < len) {
				return str;
			}
			len -= 2;
			for (int i = last - 1; i >= 0; i--) {
				if (cs[i] > 255) {
					count -= 2;
				} else {
					count--;
				}
				if (count <= len) {
					return str.substring(0, i) + "…";
				}
			}
			return "…";
		}
		return null;
	}

	/**
	 * 获取上个月的今天
	 * 
	 * @return sysDate String yyyy.MM.dd格式系统时间
	 */
	public static String getToDayBeforeMonth() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MONTH, cal.get(Calendar.MONTH) - 1);
		Date dt = cal.getTime();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		return sdf.format(dt);
	}

	/**
	 * 对字符排序
	 * 
	 * @param str
	 * @return
	 */
	public static Object[] sort(Object[] str) {
		if (str != null && str.length > 0) {

			int[] fm = new int[str.length];
			Object[] file = new Object[str.length];
			for (int i = 0; i < str.length; i++) {
				String key = (String) str[i];
				int num = key.lastIndexOf("e");
				fm[i] = Integer.parseInt(key.substring(num + 1));
			}
			Arrays.sort(fm);
			for (int i = 0; i < fm.length; i++) {
				file[i] = "file" + String.valueOf(fm[i]);
			}
			return file;
		}
		return null;
	}

	/**
	 * 利用正则表达式判断是否含有某字符
	 * 
	 * @param str
	 *            需要判断的字符
	 * @param regEx
	 *            正则表达式
	 * @return
	 */
	public static boolean ifRegEx(String str, String regEx) {
		Pattern p = Pattern.compile(regEx);
		Matcher m = p.matcher(str);
		boolean rs = m.find();
		return rs;

	}

	/**
	 * 从paramter和attribute中获取指定name的参数
	 * 
	 * 
	 * @author zhangyan
	 * @since 2008.06.11
	 * @param request
	 * @param name
	 * @param defaultValue
	 * @return
	 */
	public static int getInt(HttpServletRequest request, String name,
			int defaultValue) {
		int intVal = parseInt(request, name, defaultValue);
		if (intVal == defaultValue) {
			Object o = request.getAttribute(name);
			if (o != null) {
				try {
					intVal = ((Integer) o).intValue();
				} catch (Exception e) {
				}
			}
		}
		return intVal;
	}

	public static String getAllString(HttpServletRequest request, String name,
			String defaultValue) {
		String intVal = getString(request, name, defaultValue);
		if (defaultValue.equals(intVal)) {
			Object o = request.getAttribute(name);
			if (o != null) {
				try {
					intVal = String.valueOf(o);
				} catch (NumberFormatException e) {
				}
			}
		}
		return intVal;
	}

	public static void coo(String s) {
		try {
			System.out.println(s);// 1
//			System.out.println(s.getBytes().toString());// 2
//			System.out.println(s.getBytes("GB2312"));// 3
//			System.out.println(s.getBytes("ISO8859_1").toString());// 4
			System.out.println(new String(s.getBytes()));// 5
			System.out.println(new String(s.getBytes(), "GB2312"));// 6
			System.out.println(new String(s.getBytes(), "ISO8859_1"));// 7
			System.out.println(new String(s.getBytes("GB2312")));// 8
			System.out.println(new String(s.getBytes("GB2312"), "GB2312"));// 9
			System.out.println(new String(s.getBytes("GB2312"), "ISO8859_1"));// 10
			System.out.println(new String(s.getBytes("ISO8859_1")));// 11
			System.out.println(new String(s.getBytes("ISO8859_1"), "GB2312"));// 12
			System.out
					.println(new String(s.getBytes("ISO8859_1"), "ISO8859_1"));// 13
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
