<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
    <title>飞盘</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="Stylesheet" type="text/css" href="css/common.css" />
    <link rel="Stylesheet" type="text/css" href="css/gheader.css" />
    <link rel="Stylesheet" type="text/css" href="css/main.css" />
    <link rel="Stylesheet" type="text/css" href="js/artDialog/skins/default.css" />
    <script language="javascript" type="text/javascript" src="js/artDialog/artDialog.js?skin=default"></script>
    <script language="javascript" type="text/javascript" src="js/artDialog/plugins/iframeTools.source.js"></script>
    <script language="javascript" type="text/javascript" src="js/jquery-1.6.3.min.js"></script>
    <script language="javascript" type="text/javascript" src="js/jimpl_cloud.js"></script>
    <script type="text/javascript">
    	$(document).ready(
    		function(){
    			var isLogon = ${requestScope.IsLogon};
    			if( isLogon ){
    				onLogonSuccess( "${requestScope.UserName}", "${requestScope.NickName}" );
    			}
    		}
    	);
    
        $(function () {
            $('#tagcloud').tagCloud({ separator: '#' });
        });
        
        function onLogonSuccess(userName, nickName)
        {
        	$("#unLogonArea").hide();
        	$("#logonArea").show();
        	$("#nickName").text(nickName);        	
        }
        
        function onLogoutSuccess(){
        	$("#unLogonArea").show();
        	$("#logonArea").hide();
        }
        
		function logon()
		{
			var dialog = art.dialog({id: 'logonWin',title: false});
	
			// jQuery ajax   
			$.ajax({
			    url: 'frame/logon.jsp',
			    success: function (data) {
			        dialog.content(data);
			    },
			    cache: false
			});				
		}
		
		function logout(){		
			art.dialog.confirm('你确定要退出系统吗？', 
								processLogout,null);
		}

		function processLogout() {
			$.post("ajax/ajaxLogout.action", {}, function(data) {
				if (data.result == 0) {
					onLogoutSuccess();
				}
			});
		}
		
		function register(){
			var dialog = art.dialog({id: 'regWin',title: false});
	
			// jQuery ajax   
			$.ajax({
			    url: 'frame/register.jsp',
			    success: function (data) {
			        dialog.content(data);
			    },
			    cache: false
			});		
		}
</script>
</head>
<body>
    <!--顶部导航-->
    <div class="global_header">
        <div class="header clearfix">
            <div class="logo">
                <img src="images/logo_new.gif" alt="飞盘" />
            </div>
            <ul class="list">
                <li><a href="my.htm" class="link">我的网盘</a> </li>
                <li><a href="group.htm" class="link">我所在的群</a> </li>
                <li><a href="javascript:;" class="link">我的关注</a> </li>
            </ul>
            <div class="right">
                <ul class="person" id="unLogonArea">
                    <li><a href="javascript:void(0)" class="link">帮助</a> </li>
                    <li><a href="javascript:register()" class="link">注册</a> </li>
                    <li><a href="javascript:logon()" class="link">登录</a></li>
                </ul>
                
                <ul class="person" id="logonArea" style="display:none">
                    <li><a href="javascript:void();" class="link">帮助</a> </li>
                    <li><a href="javascript:logout(0)" class="link">退出</a> </li>                    
                    <li><label style="color:white; font-size:9pt;">欢迎您：</label><a style="color:orange;font-weight:bold;" href="javascript:void(0)" id="nickName" class="link">登录</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--/顶部导航-->
    <div class="search">
        <div>
            <input type="text" id="searchtxt" />
            <select style="height: 30px; width: 70px">
                <option>文件</option>
                <option>用户</option>
                <option>群组</option>
            </select>
            <input type="button" value="搜    索" id="searchbtn" />
        </div>
    </div>
    <div class="typelist">
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">开发类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">产品设计类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">软件测试类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">数据库类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">项目管理类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">移动开发类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">大数据类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">技术大讲堂类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
        <div class="onetype">
            <div class="typetitle">
                <span class="typename">人力行政类</span> <span class="typemore">更多>></span>
            </div>
            <ul>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
                <li><a href="#">深入浅出设计模式设计模式模式.pdf</a>&nbsp;&nbsp;<a href="#">刘海涛</a>&nbsp;&nbsp; <span>
                    50M</span> &nbsp;&nbsp;<span>下载200次</span> </li>
            </ul>
        </div>
    </div>
    <div class="sharetops">
        <div class="typetitle">
            <span class="typename">分享达人</span> <span class="typemore topuser">更多>></span>
        </div>
        <dl>
            <dt>
                <img src="images/profile1.jpg" />
            </dt>
            <dd>
                <p>
                    刘海涛 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件500个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile2.jpg" />
            </dt>
            <dd>
                <p>
                    潘玉峰 <a title="已关注" class="followeddiv">x已关注</a>
                </p>
                <p class="sharecount">
                    分享文件400个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile3.jpg" />
            </dt>
            <dd>
                <p>
                    人力资源部 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件300个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile4.jpg" />
            </dt>
            <dd>
                <p>
                    .net俱乐部 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件280个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile1.jpg" />
            </dt>
            <dd>
                <p>
                    钱红红 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件240个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile3.jpg" />
            </dt>
            <dd>
                <p>
                    冯伟伟 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件220个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile2.jpg" />
            </dt>
            <dd>
                <p>
                    孔庆涛 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件210个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile4.jpg" />
            </dt>
            <dd>
                <p>
                    陈祥 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件200个
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="images/profile1.jpg" />
            </dt>
            <dd>
                <p>
                    王维 <a class="followBtn" href="javascript:;">+加关注 </a>
                </p>
                <p class="sharecount">
                    分享文件190个
                </p>
            </dd>
        </dl>
    </div>
    <div class="tags">
        <div class="typetitle">
            <span class="typename">标签</span> <span class="typemore topuser">更多>></span>
        </div>
        <div id="tagcloud" class="tagcloud">java# 产品# JS# html5# 架构#hadoop#android#mysql# oracle#缓存#公积金#社保#asp.net#php#jQuery#云计算#csharp#C++#IT服务#敏捷开发#CSS3#
        </div>
    </div>
    <div class="foot">
     &nbsp;
    </div>
</body>
</html>
