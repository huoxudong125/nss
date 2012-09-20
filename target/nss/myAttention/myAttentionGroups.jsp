<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="base"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>我关注的群</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link rel="Stylesheet" type="text/css" href="../css/common.css" />
<link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
<link rel="Stylesheet" type="text/css" href="../css/main.css" />
<script language="javascript" type="text/javascript"
	src="../js/jquery-1.6.3.min.js"></script>
<link rel="Stylesheet" type="text/css"
	href="../js/artDialog/skins/default.css" />
<script language="javascript" type="text/javascript"
	src="../js/artDialog/artDialog.js?skin=default"></script>
<script language="javascript" type="text/javascript"
	src="../js/artDialog/plugins/iframeTools.source.js"></script>

<script language="javascript" type="text/javascript">
	$(function() {
		$(".cancelAttention").bind("click", function() {
			var targetId = $(this).attr("targetId");
			art.dialog.confirm('你确定要取消关注吗？', function() {
				$.post("/nss/userGroup/cancelAttentionGroup.action", {
					groupId : targetId
				}, processQuitResult);
			}, function() {
				art.dialog.tips('你取消了操作');
			});
		});
	});

	function processQuitResult(data) {
		var result = data.toString();
		if (result == '{"result":1}') {
			art.dialog("操作成功！");
			parent.window.location.href = parent.window.location.href;
		}
		if (data.result == 1) {
			art.dialog("操作成功！");
			parent.window.location.href = parent.window.location.href;
		}
		if (data.result == 0) {
			art.dialog("操作失败！");
		}
	}
</script>

<script type="text/javascript" src="${base}/common/js/jquery.min.js"></script>
<script language="javascript" type="text/javascript">
	function goPage(pageNum) {
		if (pageNum != "") {
			if (isInteger(pageNum, "请使用整型")) {
				$("#ugListPage").attr("action",
						"queryUserAttentionGroups.action?pageIndex=" + pageNum);
				$("#ugListPage").submit();
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
	<s:form action="#" name="ugListPage" id="ugListPage" method="post"
		theme="simple">
		<!--顶部导航-->
		<div class="global_header">
			<div class="header clearfix">
				<div class="logo">
					<img src="../images/logo_new.gif" alt="飞盘" />
				</div>
				<ul class="list">
					<li><a href="index.htm" class="link">首页</a></li>
					<li><a href="my.htm" class="link">我的网盘</a></li>
					<li><a href="group.htm" class="link">我所在的群</a></li>
					<li class="current_page"><a href="javascript:;" class="link">我的关注</a>
					</li>
				</ul>
				<div class="search">
					<input title="搜索文本框" type="text" class="input" maxlength="40"
						value="查找文件"
						onfocus="javascript: if(this.value == '查找文件') this.value=''"
						onblur="javascript: if(this.value == '') this.value='查找文件'" /><a
						title="搜索按钮" href="javascript:void(0)" onclick="return false"
						class="btn"></a>
				</div>
				<div class="right">
					<ul class="person">
						<li><a href="javascript:;" id="logout" class="link">退出</a></li>
						<li><a href="javascript:void(0)" class="link">帮助</a></li>
						<li><a href="javascript:void(0)" class="link">消息</a></li>
						<li><a href="javascript:void(0)" class="link">刘海涛</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!--/顶部导航-->
		<div class="main">
			<div class="mainleft">
				<ul class="b-list-3">
					<li><a href="/nss/userGroup/queryUserAttentionGroups.action"
						class="on"><span class="text1">我关注的群</span></a></li>
					<li class="separator-1" />
					<li><a href="/nss/nssUser/quaryAttentionUsers.action"><span
							class="text1">我关注的用户</span></a></li>
				</ul>
			</div>
			<div class="mainright">
				<div class="mygrouptitle">
					<span>我关注的群 (${recordCount})</span>
				</div>
				<div class="mygrouplist">
					<s:iterator value="ugList" id="ugs">
						<dl>
							<dt>
								<img src="../images/profile2.jpg" />
							</dt>
							<dd>
								<p>
									<a
										href="querySingleGroup.action?groupId=<s:property value='id' />"><s:property
											value="name" /></a> &nbsp; &nbsp; &nbsp; &nbsp; 创建人:
									<s:property value="creator" />
									&nbsp; &nbsp; &nbsp; &nbsp; 管理员:
									<s:property value="managers" />
									&nbsp; &nbsp; &nbsp; &nbsp; 创建时间:
									<s:property value="createDate" />
									&nbsp; &nbsp; &nbsp; &nbsp; <input type="button" value="取消关注"
										targetId="<s:property value='id' />" class="cancelAttention" />
								</p>
								<p>
									成员:
									<s:property value="membersCount" />
									&nbsp; &nbsp; 粉丝:
									<s:property value="attentionCount" />
									&nbsp; &nbsp; 分享文件数：
									<s:property value="opencnt" />
								</p>
								<p>
									简介：
									<s:property value="description" />
								</p>
							</dd>
						</dl>
					</s:iterator>
					<%@ include file="../common/page.jsp"%>
				</div>

			</div>
		</div>
		<div class="foot">&nbsp;</div>

	</s:form>
</body>
</html>
