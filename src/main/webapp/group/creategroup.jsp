<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}"/>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>creategroup</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="Stylesheet" type="text/css" href="../css/common.css" />
    <link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
    <link rel="Stylesheet" type="text/css" href="../css/main.css" />
     <script language="javascript" type="text/javascript" src="${base}/common/js/jquery.min.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery-1.6.3.min.js"></script>
    <link rel="Stylesheet" type="text/css" href="../js/artDialog/skins/default.css" />
    <script language="javascript" type="text/javascript" src="../js/artDialog/artDialog.js?skin=default"></script>
    <script language="javascript" type="text/javascript" src="../js/artDialog/plugins/iframeTools.source.js"></script>
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
                <li class="current_page"><a href="/nss/userGroup/userGroupInfo.action" class="link">我所在的群</a> </li>
                <li><a href="javascript:;" class="link">我的关注</a> </li>
            </ul>
            <div class="search">
                <input title="搜索文本框" type="text" class="input" maxlength="40" value="查找文件" onfocus="javascript: if(this.value == '查找文件') this.value=''"
                    onblur="javascript: if(this.value == '') this.value='查找文件'" /><a title="搜索按钮" href="javascript:void(0)"
                        onclick="return false" class="btn"></a>
            </div>
            <div class="right">
                <ul class="person">
                    <li><a href="javascript:;" id="logout" class="link">退出</a> </li>
                    <li><a href="javascript:void(0)" class="link">帮助</a> </li>
                    <li><a href="javascript:void(0)" class="link">消息</a> </li>
                    <li><a href="javascript:void(0)" class="link">刘海涛</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--/顶部导航-->
    
   <div class="main">
        <div class="mainleft">
            <ul class="b-list-3">
                <li><a href="/nss/userGroup/userGroupInfo.action" class="on"><span class="text1"><span /></span>我所在的群</a> </li>
                <li class="separator-1" />
                <li><a href="#" id="creategroup"><span class="text1"><span /></span>创建群</a> </li>
            </ul>
        </div>
        
        
        <div class="mainright">
        <s:form action="../userGroup/userGroupAdd" method="post">
        
        <s:textfield name="userGroup.name" label="群组名" />
			<s:textfield name="userGroup.groupCode" label="群组编号" />
			<s:textfield name="userGroup.bulletin" label="群组公告" />
			<s:textfield name="userGroup.tag" label="群组标签" />
			<s:textfield name="userGroup.description" label="群组简介" />
			<s:textfield name="userGroup.freeSize" label="网盘空间" />
			<s:textfield name="userGroup.maxSize" label="最大允许上传" />
			<s:radio name="userGroup.isSmsNotice" list="#{'1':'是','0':'否'}" label="是否短信提醒"  value="0" ></s:radio>
			<s:radio name="userGroup.isEmailNotice" list="#{'1':'是','0':'否'}" label="是否邮件提醒"  value="0"></s:radio>
			<s:radio name="userGroup.isFreeAddUser" list="#{'1':'是','0':'否'}" label="是否允许添加成员"  value="1" ></s:radio>
			<s:radio name="userGroup.isFreeUpdateInfo" list="#{'1':'是','0':'否'}" label="是否允许修改群信息"  value="1" ></s:radio>
			<s:radio name="userGroup.isOpen" list="#{'1':'是','0':'否'}" label="是否允许任何人加入本群"  value="1"></s:radio>
			
			<s:submit value="提交" />
	  </s:form>
        </div>
    </div>
    <div class="foot">
        &nbsp;
    </div>
	  
</body>
