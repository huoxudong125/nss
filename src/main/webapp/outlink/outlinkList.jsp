<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<c:set var="base" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>外链管理</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<link rel="Stylesheet" type="text/css" href="${base}/css/common.css" />
		<link rel="Stylesheet" type="text/css" href="${base}/css/gheader.css" />
		<link rel="Stylesheet" type="text/css" href="${base}/css/main.css" />
		<script language="javascript" type="text/javascript" src="${base}/js/jquery-1.6.3.min.js"></script>
		<script language="javascript" type="text/javascript" src="${base}/js/artDialog/artDialog.js?skin=default"></script>
		<script language="javascript" type="text/javascript" src="${base}/js/artDialog/plugins/iframeTools.source.js"></script>
		<script language="javascript" type="text/javascript">
		function openEditDialog(outlinkId)
		{
			art.dialog.open(
					'/nss/outlink/edit.action?outLink.id='+ outlinkId, 
					{
						title : '外链编辑',
						width : 400,
						height : 300
					});
		}

		function openAddDialog(resourceId)
		{
			art.dialog.open(
					'/nss/outlink/edit.action?outLink.resourceId='+ resourceId, 
					{
						title : '外链编辑',
						width : 400,
						height : 300
					});
		}
		
		function goPage(pageNum) {
			if (pageNum != "") {
				if (isInteger(pageNum, "请使用整型")) {
					$("#outLinkListForm").attr(
							"action",
							"/nss/outlink/list.action?pageIndex=" + pageNum);
					$("#outLinkListForm").submit();
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

		<style type="text/css">
.outLinkTable,.outLinkTable td,.outLinkTable th {
	padding: 10px;
}

.outLinkTableTitle {
	font-weight: bold;
	text-align: center;
}
</style>
	</head>
	<body>
		<s:form action="#" name="outLinkListForm" id="outLinkListForm" method="post" theme="simple">
			<!--top-->
			<div class="global_header">
				<div class="header clearfix">
					<div class="logo">
						<img src="../images/logo_new.gif" alt="飞盘" />
					</div>
					<ul class="list">
						<li>
							<a href="index.htm" class="link">首页</a>
						</li>
						<li>
							<a href="my.htm" class="link">我的网盘</a>
						</li>
						<li>
							<a href="group.htm" class="link">我所在的群</a>
						</li>
						<li class="current_page">
							<a href="javascript:;" class="link">我的关注</a>
						</li>
					</ul>
					<div class="search">
						<input title="搜索文本框" type="text" class="input" maxlength="40" value="查找文件" onfocus="javascript: if(this.value == '查找文件') this.value=''" onblur="javascript: if(this.value == '') this.value='查找文件'" />
						<a title="搜索按钮" href="javascript:void(0)" onclick="return false" class="btn"></a>
					</div>
					<div class="right">
						<ul class="person">
							<li>
								<a href="javascript:;" id="logout" class="link">退出</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="link">帮助</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="link">消息</a>
							</li>
							<li>
								<a href="javascript:void(0)" class="link">刘海涛</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--main-->
			<div class="main">
				<!--main left-->
				<div class="mainleft">
					<ul class="b-list-3">
						<li>
							<a href="/nss/userGroup/userAttentionGroups.action?userId=1"><span class="text1">我关注的群</span> </a>
						</li>
						<li class="separator-1" />
							<li>
								<a href="/nss/nssUser/attentionUsers.action?userId=1"><span class="text1">我关注的用户</span> </a>
							</li>
							<li>
								<a href="/nss/outlink/list.action" class="on"><span class="text1">外链管理</span> </a>
							</li>
					</ul>
				</div>
				<!--main right-->
				<div class="mainright">
					<div style="margin: 10px;">
						<img src="${base}/images/outlink1.jpg" alt="" align="middle" />
						&nbsp;&nbsp;
						<span style="font-weight: bold;">外链管理</span>
					</div>
					<div style="margin: 10px; height: 5px; border-bottom: #dedede 1px dotted;">
					</div>
					<div style="margin: 10px;">
						<div>
							<table class="outLinkTable" align="center" border="0" width="100%">
								<tr style="border-bottom: #dedede 1px solid;">
									<td class="outLinkTableTitle">
										外链名称
									</td>
									<td class="outLinkTableTitle">
										外链地址
									</td>
									<td class="outLinkTableTitle" width="70">
										发布时间
									</td>
									<td class="outLinkTableTitle" width="70">
										过期时间
									</td>
									<td class="outLinkTableTitle" width="70">
										下载次数
									</td>
									<td class="outLinkTableTitle" width="120">
										操作
									</td>
								</tr>
								<s:iterator value="outLinkList" id="outLinkList">
									<tr style="border-bottom: #dedede 1px dotted;">
										<td>
											<s:property value='title' />
										</td>
										<td>
											<a href="<s:property value='address' />" target="_blank"><s:property value='address' /> </a>
										</td>
										<td style="text-align: center;">
											<s:property value="%{getText('{0,date,yyyy-MM-dd }',{createDate})}" />
										</td>
										<td style="text-align: center;">
											<s:property value="%{getText('{0,date,yyyy-MM-dd }',{endDate})}" />
										</td>
										<td style="text-align: center;">
											<s:property value='downloadCount' />
											次
										</td>
										<td style="text-align: center;">
											<a href="javascript:clipboardData.setData('Text','<s:property value='address' />');window.alert('外链地址已被复制到剪切板');">复制</a>&nbsp;&nbsp;
											<a href="/nss/outlink/deleting.action?outLink.id=<s:property value='id' />" onclick="javascript:return confirm('确定要删除吗？');">删除</a>&nbsp;&nbsp;
											<a href="javascript:openEditDialog(<s:property value='id' />);">编辑</a>
											<a href="javascript:openAddDialog('123');">+</a>
										</td>
									</tr>
								</s:iterator>
							</table>
							<div>
								<%@ include file="../common/page.jsp"%>
							</div>
						</div>
					</div>
				</div>
			</div>
		</s:form>
	</body>
</html>