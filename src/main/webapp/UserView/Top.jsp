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
    <link rel="Stylesheet" type="text/css" href="../css/common.css" />
    <link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
    <link rel="Stylesheet" type="text/css" href="../css/main.css" />
    <link rel="Stylesheet" type="text/css" href="../css/jquery.ui.all.css" />
    <link rel="Stylesheet" type="text/css" href="../js/artDialog/skins/default.css" />
    <script language="javascript" type="text/javascript" src="../js/artDialog/artDialog.js?skin=default"></script>
    <script language="javascript" type="text/javascript" src="../js/artDialog/plugins/iframeTools.source.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery-1.6.3.min.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery.ui.core.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery.ui.widget.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery.ui.tabs.js"></script>
    
     <script type="text/javascript">
     
    
    	$(document).ready(
    		function(){
    			var isLogon = ${requestScope.IsLogon};
    			if( isLogon ){
    				onLogonSuccess( "${requestScope.UserName}", "${requestScope.NickName}" );
    			}
    		}
    	);
     
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
			    url: '../frame/logon.jsp',
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
			$.post("${base}/ajax/ajaxLogout.action", {}, function(data) {
				if (data.result == 0) {
					onLogoutSuccess();
				}
			});
		}
		
		function register(){
			var dialog = art.dialog({id: 'regWin',title: false});
	
			// jQuery ajax   
			$.ajax({
			    url: '../frame/register.jsp',
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
                <img src="../images/logo_new.gif" alt="飞盘" />
            </div>
            <ul class="list">
             	<li><a href="index.htm" class="link">首页</a></li>
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