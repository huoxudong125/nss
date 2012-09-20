package com.feinno.nss.core.utils;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * 
 * @author Jeff
 * 
 * @since Nov 18, 2009
 * 
 * @version 1.0
 */
public class ClassUtils extends org.springframework.util.ClassUtils {

	public static Class<?> getSuperClassGenricType(Class<?> clazz) {
		Type genType = clazz.getGenericSuperclass();
		if (!(genType instanceof ParameterizedType))
			return Object.class;
		Type[] params = ((ParameterizedType) genType).getActualTypeArguments();
		if (!(params[0] instanceof Class<?>))
			return Object.class;
		return (Class<?>) params[0];
	}
}
