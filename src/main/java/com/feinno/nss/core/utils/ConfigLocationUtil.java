package com.feinno.nss.core.utils;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.lang.StringUtils;

/**
 * 配置文件搜索类
 * 
 * @author wanghui
 * 
 * @version $Revision$
 * 
 * @since Oct 8, 2008
 */
public class ConfigLocationUtil {

	/**
	 * static configuration folder name.
	 */
	private static final String WEB_CONFIG_ROOT_NAME = "/WEB-INF";

	private static final String WEB_CONFIG_ROOT_NAME_WITH_CLASSPATH = WEB_CONFIG_ROOT_NAME
			+ "/classes";

	/**
	 * 配置文件目录名称
	 */
	public static final String CONFIG_ROOT_NAME = "/config";

	/**
	 * 获得classpath
	 * 
	 * @param name
	 *            The resource name
	 * 
	 * @return
	 */
	public static String getClassPath(String name) {
		try {
			return URLDecoder.decode(ConfigLocationUtil.class.getClassLoader()
					.getResource(name).getPath(), Charset.defaultCharset()
					.toString());
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 根据提供的参数获取应用配置 的绝对路径
	 * 
	 * @param webdir
	 *            应用的web路径
	 * @return String
	 */
	public static String getWebApplicationConfigPath(String webdir) {
		String classPath = getClassPath(webdir);
		return StringUtils.substringBefore(classPath, WEB_CONFIG_ROOT_NAME)
				+ WEB_CONFIG_ROOT_NAME;
	}

	/**
	 * 获得应用配置文件所在的绝对路径
	 * 
	 * @param webdir
	 *            应用的web路径
	 * @return String
	 */
	public static String getConfigPath(String webdir) {
		return getWebApplicationConfigPath(webdir) + CONFIG_ROOT_NAME;
	}

	/**
	 * 获取配置文件的全路径，即绝对路径
	 * 
	 * @param cfgFileName
	 * @return configuration files
	 */
	public static String[] getFullPathOfConfigLocationArray(String cfgFileName) {
		return getConfigLocationArrayWithSamePrefix(cfgFileName,
				getWebApplicationConfigPath(""));
	}

	/**
	 * 获取配置文件的全路径，即绝对路径
	 * 
	 * @param cfgFileName
	 * @param parent
	 * @return configuration files
	 */
	public static String[] getFullPathOfConfigLocationArray(String cfgFileName,
			String parent) {
		return getConfigLocationArrayWithSamePrefix(cfgFileName, parent);
	}

	/**
	 * 获取配置文件的路径，默认classpath同级的路径
	 * 
	 * @param cfgFileName
	 * @return configuration files
	 */
	public static String[] getConfigLocationArray(String cfgFileName) {
		return getConfigLocationArray(cfgFileName, null, null);
	}

	/**
	 * 获取配置文件路径
	 * 
	 * @param cfgFileName
	 * @param parent
	 * @return configuration files
	 */
	public static String[] getConfigLocationArray(String cfgFileName,
			String parent) {
		return getConfigLocationArray(cfgFileName, parent, null);
	}

	/**
	 * 获取配置文件路径
	 * 
	 * @param cfgFileName
	 * @param parent
	 * @return configuration files
	 */
	public static String[] getConfigLocationArrayWithSamePrefix(
			String cfgFileName, String parent) {
		return getConfigLocationArray(cfgFileName, parent, parent);
	}

	/**
	 * 获取配置文件路径
	 * 
	 * @param cfgFileName
	 * @param parent
	 * @param prefix
	 * @return configuration files
	 */
	public static String[] getConfigLocationArray(String cfgFileName,
			String parent, String prefix) {
		prefix = StringUtils.defaultIfEmpty(prefix, "");
		// the path should not be contained WEB-INF
		prefix = StringUtils.removeEnd(prefix, WEB_CONFIG_ROOT_NAME);
		if (StringUtils.isEmpty(parent) || StringUtils.isBlank(parent))
			// havn't parent folder? use the classpath by default.
			parent = getWebApplicationConfigPath("");

		parent = StringUtils.replaceChars(parent, '\\', '/');

		// remove end of the path who end with a slash.
		parent = StringUtils.removeEnd(parent, "/");
		if (StringUtils.endsWith(parent, WEB_CONFIG_ROOT_NAME))
			parent = StringUtils.removeEnd(parent, WEB_CONFIG_ROOT_NAME);
		else if (StringUtils.endsWith(parent,
				WEB_CONFIG_ROOT_NAME_WITH_CLASSPATH))
			parent = StringUtils.removeEnd(parent,
					WEB_CONFIG_ROOT_NAME_WITH_CLASSPATH);

		Set<String> files = new HashSet<String>();
		// search from parent root path directly.
		File root = new File(parent);
		getConfigLocations(root, "", cfgFileName, prefix, files);
		return files.toArray(new String[0]);
	}

	private static void getConfigLocations(File rootDir, String currentPath,
			String cfgFileName, String prefix, Set<String> files) {
		String[] fileNames = rootDir.list();
		if (fileNames == null)
			return;
		String filePath = rootDir.getPath();
		for (int i = 0; i < fileNames.length; i++) {
			if (fileNames[i].equals(".") || fileNames[i].equals(".."))
				continue;
			if (fileNames[i].startsWith(cfgFileName)
					&& fileNames[i].endsWith(".xml")) {
				files.add(StringUtils.replaceChars(prefix + currentPath
						+ File.separator + fileNames[i], '\\', '/'));
				continue;
			}
			File file = new File(filePath + File.separator + fileNames[i]);
			if (file.isDirectory()) {
				// recursion
				getConfigLocations(file, currentPath + File.separator
						+ fileNames[i], cfgFileName, prefix, files);
			}
		}
	}
}
