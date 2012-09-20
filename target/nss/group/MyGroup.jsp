<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}"/>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>MyGroup</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="Stylesheet" type="text/css" href="../css/common.css" />
    <link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
    <link rel="Stylesheet" type="text/css" href="../css/main.css" />
     <script language="javascript" type="text/javascript" src="${base}/common/js/jquery.min.js"></script>
    <script language="javascript" type="text/javascript" src="../js/jquery-1.6.3.min.js"></script>
    <link rel="Stylesheet" type="text/css" href="../js/artDialog/skins/default.css" />
    <script language="javascript" type="text/javascript" src="../js/artDialog/artDialog.js?skin=default"></script>
    <script language="javascript" type="text/javascript" src="../js/artDialog/plugins/iframeTools.source.js"></script>

    <script language="javascript" type="text/javascript">
        $(function () {
            $(".dropgroup").bind("click", function () {
            
             var vgroupId = $(this).attr("groupId");
             
                art.dialog.confirm('你确定要销毁此群吗？', function () {
                      
                	  $.post("../group/groupDelete.action",{groupId:vgroupId},processResult);
                   
                }, function () {
                    art.dialog.tips('你取消了操作');
                });
            });

            $(".quitgroup").bind("click", function () {
            
                var vgroupId = $(this).attr("groupId");
             
                art.dialog.confirm('你确定要退出此群吗？', function () {
                
                    $.post("../group/groupQuit.action",{groupId:vgroupId},processQuitResult);
                    
                }, function () {
                    art.dialog.tips('你取消了操作');
                });
            });
        });
        
        
 function processQuitResult(data)
 {
      if (data.result== 1) {
           art.dialog("退出成功！");
          parent.window.location.href = parent.window.location.href;
       }
       if(data.result== 0) 
       {
        art.dialog("退出失败！");
       }
 
 }
function processResult(data) 
{
      if (data.result== 1) {
         art.dialog("销毁成功！");
          parent.window.location.href = parent.window.location.href;
       }
       if(data.result== 0) 
       {
         art.dialog("添加失败！");
       }
}
    </script>
    
<script language="javascript" type="text/javascript">

function goPage(pageNum) {
	if(pageNum != ""){
		if(isInteger(pageNum, "请使用整型")){
			$("#grouplist").attr("action","/nss/userGroup/userGroupInfo.action?pageNum=" + pageNum);
			$("#grouplist").submit();
		}
	}
}
function isInteger(strNum, msg) {
	if (strNum.search(/^(0|[1-9]\d*)$/) != -1) {
		return true;
	} else {
		alert(msg);
		return false;
	}
}
</script>

</head>
<body>
<form action="#" method="post" name="grouplist"  id="grouplist">

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
                <li><a href="../group/creategroup.jsp" id="creategroup"><span class="text1"><span /></span>创建群</a> </li>
            </ul>
        </div>
        
        
        <div class="mainright">
         <c:choose>
				 <c:when test="${empty requestScope.groupList}">
						还没有创建群或加入群！
			     </c:when>
					<c:otherwise>
			<div class="mygrouptitle">
            <span>我所在的群 (${pageInfo.resultCount})</span>
            </div>
              <div class="mygrouplist">
            	<c:forEach var="group" items="${requestScope.groupList}">
                <dl>
                    <dt>
                        <img src="../images/profile2.jpg" />${group.groupCode}
                    </dt>
                    <dd>
                        <p>
                            <a href="querySingleGroup.action?groupId=${group.id}">${group.name}</a> &nbsp; &nbsp; &nbsp; &nbsp; 创建人: ${group.createrUserName} &nbsp; &nbsp; &nbsp;
                            &nbsp; 管理员: ${group.managers}&nbsp; &nbsp; &nbsp; &nbsp; 加入时间: ${group.createDate} 
                             <c:choose>
                            
                             
          	                 <c:when test="${group.createrUserId==requestScope.userIDV}">
									<input type="button" value="销毁群" class="dropgroup" groupId="${group.id}" />
											</c:when>
											<c:otherwise>
												<input type="button" value="退出群" class="quitgroup" groupId="${group.id}" />
									</c:otherwise>
							</c:choose>
                        </p>
                        <p>
                           	成员: ${group.membersCount} &nbsp; &nbsp; &nbsp; &nbsp;粉丝: ${group.attentionCount}&nbsp; &nbsp; &nbsp; &nbsp;分享文件数：${group.opencnt}
                        </p>
                        <p>
                                                                          简介： ${group.description}
                        </p>
                    </dd>
                </dl>
               </c:forEach>
                <table height="100%" width="85%"><%@ include file="../common/page.jsp" %></table>
             </div>
          	</c:otherwise>
		</c:choose>
        </div>
    </div>
    <div class="foot">
        &nbsp;
    </div>
		</form>
</body>
