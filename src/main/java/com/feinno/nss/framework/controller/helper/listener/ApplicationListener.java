package com.feinno.nss.framework.controller.helper.listener;

import com.feinno.nss.factory.Factory;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.util.Log4jWebConfigurer;

import javax.servlet.ServletContextEvent;

/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 11-12-27
 * Time: 上午11:46
 * To change this template use File | Settings | File Templates.
 */
public class ApplicationListener extends ContextLoaderListener {
    protected transient final Log log = LogFactory.getLog(this.getClass());

    /**
     * 初始化日志记录器和spring的应用上下文
     */
    public void contextInitialized(ServletContextEvent sce) {

        Log4jWebConfigurer.initLogging(sce.getServletContext());
        if (log.isDebugEnabled()) {
            log.debug("StartupListener start....");
        }

        System.out.println("*****************************************************************");
        System.out.println("*****************************************************************");
        System.out.println("**	Copyright &copy; 2009 www.feinno.com ALL Rights Reserved 	");
        System.out.println("**	WGY Business Support System  ");
        System.out.println("**	System Version : 2.1.0	");
        System.out.println("**	OS Name : " + System.getProperty("os.name"));
        System.out.println("**	OS Version : " + System.getProperty("os.version"));
        System.out.println("**	JAVA_HOME :	" + System.getProperty("java.home"));
        System.out.println("**	JDK Version : " + System.getProperty("java.version"));
        System.out.println("**	User Account : " + System.getProperty("user.name")); // 用户帐号名
        System.out.println("**	Directory of users : " + System.getProperty("user.home")); // 用户目录
        System.out.println("**	The current working directory : " + System.getProperty("user.dir")); // 用户当前的工作目录
        System.out.println("**	System directory of temporary files : " + System.getProperty("java.io.tmpdir"));// 默认临时文件目录
        System.out.println("*****************************************************************");


        super.contextInitialized(sce);
        // to add some code

        //通过监听器直接获取上下文，引擎spring
        ApplicationContext applicationContext = WebApplicationContextUtils.getWebApplicationContext(sce.getServletContext());
        Factory.setApplicationContext(applicationContext);

        System.out.println("** Init Spring ApplicationContext to Factory finished !");
        System.out.println("*****************************************************************");


    }

      /**
     * 销毁spring的应用上下文和日志记录器
     */
    public void contextDestroyed(ServletContextEvent sce) {

        super.contextDestroyed(sce);
        if (log.isDebugEnabled()) {
            log.debug("StartupListener end....");
        }
        Log4jWebConfigurer.shutdownLogging(sce.getServletContext());
    }
}
