package com.feinno.nss.framework.utils;

import java.awt.Point;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.feinno.nss.model.beans.ResourceType;
/**
 * 读取消息触发类型
 * @author fuyanqing
 * @since 2012-02-22
 */
public class LoadResouceTypeConfig {
	private static Map<String,ResourceType> resources = new HashMap<String,ResourceType>();
	
	static{
		load();
	}
	public static void load(){

		resources.clear();
		
		SAXReader reader = new SAXReader();
		
		try {
			Document doc = reader.read(LoadConfig.class.getClassLoader()
					.getResourceAsStream("resourceTypeConfig.xml"));
			
			Element root = doc.getRootElement();
			List<Element> list = root.elements();
			
			for(Element emt : list){	
				String name = emt.elementText("name");
				String image = emt.elementText("image");
				String includes = emt.elementText("includes");
				
				for (String element : includes.split(","))
				{
					ResourceType type = new ResourceType();
					type.setName(name);
					type.setExtendName(element);
					type.setX(image.split(",")[0]);
					type.setY(image.split(",")[1]);
					resources.put(element, type);
				}
			}	
		} catch (DocumentException e) {
			throw new RuntimeException(e);
		}
		
	}
	

	public static Map<String, ResourceType> getResources() {
		return resources;
	}
	
}

