<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="base"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>群详细信息</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link rel="Stylesheet" type="text/css" href="../css/common.css" />
<link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
<link rel="Stylesheet" type="text/css" href="../css/main.css" />
<link rel="Stylesheet" type="text/css" href="../css/jquery.ui.all.css" />
<script language="javascript" type="text/javascript"
	src="../js/jquery-1.6.3.min.js"></script>
<script language="javascript" type="text/javascript"
	src="../js/jquery.ui.core.js"></script>
<script language="javascript" type="text/javascript"
	src="../js/jquery.ui.widget.js"></script>
<script language="javascript" type="text/javascript"
	src="../js/jquery.ui.tabs.js"></script>
<script language="javascript" type="text/javascript"
	src="../js/artDialog/artDialog.js?skin=default"></script>
<script language="javascript" type="text/javascript"
	src="../js/artDialog/plugins/iframeTools.source.js"></script>
<script language="javascript" type="text/javascript">
	$(function() {
		$("#tabs").tabs({
			selected : 0
		});

		$("#toGroupInfoTag").bind("click", function() {
			selectTag(2);
		});

		var tagIndex = $("#tagIndex").val();
		if (tagIndex == "" || tagIndex == null) {
			tagIndex = 0;
		}
		selectTag(tagIndex);

		$(":checkbox").bind("click", function() {
			var ti = $("#tagIndex").val();
			if (ti == 1 || ti==0) {
				if ($(this).attr("checked") == "checked") {
					$("#fileActionHeader").show();
					$("#sortColsHeader").hide();
				} else {
					$("#fileActionHeader").hide();
					$("#sortColsHeader").show();
				}
			}
			if (ti == 2) {
				if ($(this).attr("checked") == "checked") {
					$("#fileActionHeader2").show();
					$("#sortColsHeader2").hide();
				} else {
					$("#fileActionHeader2").hide();
					$("#sortColsHeader2").show();
				}
			}
		});

		$("#addMember").bind(
				"click",
				function() {
					var groupId = $(this).attr("groupId");
					art.dialog.open(
							'../userGroup/openAddGroupMember.action?groupId='
									+ groupId, {
								title : '添加群成员',
								width : 400,
								height : 150
							});
				});

		$("#addBulletin").bind(
				"click",
				function() {
					var groupId = $(this).attr("groupId");
					art.dialog.open(
							'../userGroup/openaddBulletinJsp.action?groupId='
									+ groupId, {
								title : '添加群公告',
								width : 400,
								height : 150
							});
				});
		$("#addIsVerify").bind(
				"click",
				function() {
					var groupId = $(this).attr("groupId");
					art.dialog.open(
							'../userGroup/openaIsVerifyJsp.action?groupId='
									+ groupId, {
								title : '申请认证',
								width : 400,
								height : 150
							});
				});
	});

	function selectTag(tagNum) {
		$("#tabs").tabs({
			selected : tagNum
		});
		$("#tagIndex").val(tagNum);
	}

	function setTagIndex(tagNum) {
		$("#tagIndex").val(tagNum);
	}
</script>

<script language="javascript" type="text/javascript">
	$(function() {

		$(".deleteMember").bind("click", function() {
			var targetUserId = $(this).attr("targetUserId");
			var targetGroupId = $(this).attr("targetGroupId");
			art.dialog.confirm('你确定要删除此成员吗？', function() {
				$.post("../group/groupQuit.action", {
					groupId : targetGroupId,
					userId : targetUserId
				}, processQuitResult);
			}, function() {
				art.dialog.tips('你取消了操作');
			});
		});

		function processQuitResult(data) {
			if (data.result == 1) {
				art.dialog("操作成功！");
				//重定向
				var gId = $("#groupId").val();
				var tIndex = $("#tagIndex").val();
				//parent.window.location.href = parent.window.location.href;
				parent.window.location.href = "/nss/userGroup/querySingleGroup.action?groupId="
						+ gId + "&tagIndex=" + tIndex;
			}
			if (data.result == 0) {
				art.dialog("操作失败！");
			}
		}

		$(".addAttention").bind("click", function() {
			var targetUserId = $(this).attr("targetUserId");
			art.dialog.confirm('你确定要添加关注吗？', function() {
				$.post("/nss/nssUser/addAttentionUser.action", {
					targetId : targetUserId
				}, processQuitResult);

			}, function() {
				art.dialog.tips('你取消了操作');
			});
		});

		$(".setAdmin").bind("click", function() {
			var targetUserId = $(this).attr("targetUserId");
			var targetGroupId = $(this).attr("targetGroupId");

			var msg = "你确定要设置该管理员吗？";
			art.dialog.confirm(msg, function() {
				$.post("/nss/userGroup/updateUserGroupMapping.action", {
					userId : targetUserId,
					groupId : targetGroupId,
					userRoleTypeInGroup : 1
				}, processQuitResult);
			}, function() {
				art.dialog.tips('你取消了操作');
			});
		});

		$(".cancelAdmin").bind("click", function() {
			var targetUserId = $(this).attr("targetUserId");
			var targetGroupId = $(this).attr("targetGroupId");

			var msg = "你确定要取消该管理员吗？";
			art.dialog.confirm(msg, function() {
				$.post("/nss/userGroup/updateUserGroupMapping.action", {
					userId : targetUserId,
					groupId : targetGroupId,
					userRoleTypeInGroup : 0
				}, processQuitResult);
			}, function() {
				art.dialog.tips('你取消了操作');
			});
		});
	});
</script>

<script language="javascript" type="text/javascript">
	function goMemPage(pageNum) {
		if (pageNum != "") {
			if (isInteger(pageNum, "请使用整型")) {
				$("#membersForm").attr("action",
						"querySingleGroup.action?mPageIndex=" + pageNum);
				$("#membersForm").submit();
			}
		}
	}

	function goFanPage(pageNum) {
		if (pageNum != "") {
			if (isInteger(pageNum, "请使用整型")) {
				$("#fansForm").attr("action",
						"querySingleGroup.action?fPageIndex=" + pageNum);
				$("#fansForm").submit();
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
	<s:hidden id="tagIndex" name="tagIndex" value="%{tagIndex}"></s:hidden>
	<s:hidden name="groupId" value="%{groupId}"></s:hidden>
	<!--顶部导航-->
	<div class="global_header">
		<div class="header clearfix">
			<div class="logo">
				<img src="../images/logo_new.gif" alt="飞盘" />
			</div>
			<ul class="list">
				<li><a href="index.htm" class="link">首页</a></li>
				<li><a href="my.htm" class="link">我的网盘</a></li>
				<li class="current_page"><a
					href="/nss/userGroup/userGroupInfo.action" class="link">我所在的群</a></li>
				<li><a href="/nss/userGroup/queryUserAttentionGroups.action"
					class="link">我的关注</a></li>
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
		<div class="mainleft wide">
			<ul class="b-list-3">
				<li><a href="#"><span class="grouptitle"><s:property
								value="userGroup.name" /><img src="../images/groupflag.jpg"
							class="groupflag" /></a></li>
				<li class="separator-1" />
				<li><img src="../images/userandgroup.jpg"
					class="porfiledetailimg" /></li>
				<li class="separator-1" />
				<li>
					<p>
						<b>创建人：</b>
						<s:property value="userGroup.creator.userName" />
					</p>
				</li>
				<li class="separator-1" />
				<li>
					<p>
						<b>注册日期：</b>
						<s:property
							value="%{getText('{0,date,yyyy-MM-dd }',{userGroup.creator.createDate})}" />
					</p>
					<p>
						<b>加入日期：</b>
						<s:property
							value="%{getText('{0,date,yyyy-MM-dd }',{userGroup.creator.createDate})}" />
					</p>
					<p>
						<b>访问：</b> 153次 | <b>排名：</b>230
					</p>
					<p>
						<b>分享：</b> 183个 | <b>排名：</b>260
					</p>
				</li>
				<li class="separator-1" />
				<li>
					<p>
						<b>简介：</b>
						<s:property value="userGroup.description" />
					</p>
				</li>
			</ul>
		</div>
		<div class="mainright">
			<div id="tabs">
				<ul>
					<li><a href="#tabs-1" onclick="setTagIndex(1)">群主页</a></li>
					<li><a href="#tabs-2" onclick="setTagIndex(2)">群资源</a></li>
					<li><a href="#tabs-3" onclick="setTagIndex(3)">群资料</a></li>
					<li><a href="#tabs-4" onclick="setTagIndex(4)">群成员(<s:property
								value="groupMembersCount" />)
					</a></li>
					<li><a href="#tabs-5" onclick="setTagIndex(5)">群粉丝(<s:property
								value="groupFansCount" />)
					</a></li>
					<li><a href="#tabs-6" onclick="setTagIndex(6)">群设置</a></li>
				</ul>
				<div id="tabs-1">
					<dl>
						<dt class="groupsetdt">
							<p class="groupsettitle">群信息</p>
						</dt>
						<dd>
							<p class="groupsetinfo">
								群&nbsp;&nbsp;名&nbsp;&nbsp;称：
								<s:property value="userGroup.name" />
							</p>
							<p class="groupsetinfo">
								创&nbsp;&nbsp;建&nbsp;&nbsp;人：
								<s:property value="userGroup.creator.userName" />
							</p>
							<p class="groupsetinfo">
								创建日期：
								<s:property
									value="%{getText('{0,date,yyyy-MM-dd }',{userGroup.createDate})}" />
							</p>
							<p class="groupsetinfo">
								群&nbsp;&nbsp;简&nbsp;&nbsp;介：
								<s:property value="userGroup.description" />
							</p>
							<p class="groupsetinfo">
								<a id="toGroupInfoTag" href="#">更多群资料 >></a>
							</p>
							<p class="groupaffiche">
								<span class="groupaffichetitle"><b>群内公告</b></span> <span
									class="groupaffichecontent"> <s:property
										value="userGroup.bulletin" />
								</span><span class="groupafficheadd"> <input type="button"
									value="[发布新公告]" id="addBulletin"
									groupId="<s:property value='groupId' />" />

								</span>
							</p>
						</dd>
					</dl>
					<dt class="groupsetdt">
						<p class="groupsettitle">最新动态</p>
					</dt>
					<dd>
						<div class="all-files-headers" style="display: block;">
							<!--文件的操作-->
							<header class="files-header b-header b-bdr-7"
								id="fileActionHeader" style="display: none;">
							<p>
								<span class="b-fl input-cbx selectionArbitrate"> <dfn>
										<s class="sprite"></s>
									</dfn>
								</span> <span class="check-all"> 全选 </span> <span id="Span1">
									已选中1个文件/文件夹 </span> <span class="clearfix" id="Span2"> <a
									class="bbtn disabled" id="A3" href="#"
									onclick="javascript:void(0);"> <b>分享到OA</b>
								</a> <a class="bbtn disabled" id="A5" href="#"
									onclick="javascript:void(0);"> <b>分享给指定用户</b>
								</a> <a class="bbtn disabled" id="A7" href="#"
									onclick="javascript:void(0);"> <b>分享到群</b>
								</a> <a class="bbtn disabled" id="A8" href="#"
									onclick="javascript:void(0);"> <b>生成外链</b>
								</a> <a class="bbtn disabled" id="A9" href="#"
									onclick="javascript:void(0);"> <b>下载</b>
								</a> <a class="bbtn disabled" id="A10" href="#"
									onclick="javascript:void(0);"> <b>复制</b>
								</a> <a class="bbtn disabled" id="A11" href="#"
									onclick="javascript:void(0);"> <b>移动</b>
								</a> <a class="bbtn disabled" id="A12" href="#"
									onclick="javascript:void(0);"> <b>重命名</b>
								</a> <a class="bbtn disabled" id="A13" href="#"
									onclick="javascript:void(0);"> <b>删除</b>
								</a>
								</span>
							</p>
							</header>
							<!--文件的头-->
							<header class="files-header b-header b-bdr-7" id="sortColsHeader"
								style="display: block;">
							<div class="clearfix">
								<div class="c1 col">
									<a class="indicator b-ig-ln indicator-name desc" id="A14"
										href="javascript:;"> <s class="indicator-cols clearfix">
											<!--  <span class="b-fl input-cbx selectionArbitrate" >
                   <dfn><s class="sprite"></s> </dfn>
                     
                      </span>--> <span style="margin-left: 15px;"><input
												type="checkbox" flag="allckb" /></span> <span class="itt-10">
												文件名 </span>

									</s>
									</a>
								</div>

								<div class="c2 col">
									<a class="indicator b-ig-ln" id="A15" hideFocus=""
										href="javascript:;"> <s class="indicator-cols clearfix">
											<span class="itt-10"> 大小 </span>
									</s>
									</a>
								</div>

								<div class="c3 col">
									<a class="indicator b-ig-ln" id="A16" hideFocus=""
										href="javascript:;"> <s class="indicator-cols clearfix">
											<span>修改日期</span>
									</s>
									</a>
								</div>
							</div>
							</header>
						</div>

						<s:iterator value="resourceTypeMappings" id="res">
							<!-- 循环体begin -->
							<dd class="clearfix file-item">
								<div title="我的视频" class="file-col col">
									<span class="inline-commands b-btn clearfix"></span><span
										class="inline-file-col"> <input type="checkbox"
										style="margin-left: 15px; margin-top: 15px" /> <span
										class="b-in-blk sprite-list-ic b-ic-book"
										style="cursor: pointer; background-position-x: 0px; background-position-y: 0px; position: absolute; margin-top: 11px; margin-left: 10px;">
									</span><a title="我的视频" class="file-handler b-no-ln dir-handler"
										style="cursor: pointer;" href="javascript:;"><s:property
												value="resource.title" /> </a></span>
								</div>
								<div class="size-col col">
									<span style="line-height: 37px;"><s:property
											value="resource.size/1024f" />K</span>
								</div>
								<div class="time-col col">
									<span style="line-height: 37px;"><s:property
											value="%{getText('{0,date,yyyy-MM-dd HH:mm }',{resource.createDate})}" />
									</span>
								</div>
							</dd>
							<!-- 循环体end -->
						</s:iterator>

					</dd>

				</div>
				<div id="tabs-2">
					<div class="all-files-headers" style="display: block;">
						<!--文件的操作-->
						<header class="files-header b-header b-bdr-7"
							id="fileActionHeader2" style="display: none;">
						<p>
							<span class="b-fl input-cbx selectionArbitrate"> <dfn>
									<s class="sprite"></s>
								</dfn>
							</span> <span class="check-all"> 全选 </span> <span id="file_action_word">
								已选中1个文件/文件夹 </span> <span class="clearfix" id="file_action_buttons">
								<a class="bbtn disabled" id="barCmdPublicAll" href="#"
								onclick="javascript:void(0);"> <b>分享到OA</b>
							</a> <a class="bbtn disabled" id="barCmdShareAll" href="#"
								onclick="javascript:void(0);"> <b>分享给指定用户</b>
							</a> <a class="bbtn disabled" id="A1" href="#"
								onclick="javascript:void(0);"> <b>分享到群</b>
							</a> <a class="bbtn disabled" id="A2" href="#"
								onclick="javascript:void(0);"> <b>生成外链</b>
							</a> <a class="bbtn disabled" id="barCmdDownload" href="#"
								onclick="javascript:void(0);"> <b>下载</b>
							</a> <a class="bbtn disabled" id="barCmdCopy" href="#"
								onclick="javascript:void(0);"> <b>复制</b>
							</a> <a class="bbtn disabled" id="A4" href="#"
								onclick="javascript:void(0);"> <b>移动</b>
							</a> <a class="bbtn disabled" id="A6" href="#"
								onclick="javascript:void(0);"> <b>重命名</b>
							</a> <a class="bbtn disabled" id="barCmdDelete" href="#"
								onclick="javascript:void(0);"> <b>删除</b>
							</a>
							</span>
						</p>
						</header>
						<!--文件的头-->
						<header class="files-header b-header b-bdr-7" id="sortColsHeader2"
							style="display: block;">
						<div class="clearfix">
							<div class="c1 col">
								<a class="indicator b-ig-ln indicator-name desc"
									id="nameCompareTrigger" href="javascript:;"> <s
									class="indicator-cols clearfix"> <!--  <span class="b-fl input-cbx selectionArbitrate" >
                   <dfn><s class="sprite"></s> </dfn>
                     
                      </span>--> <span style="margin-left: 15px;"><input
											type="checkbox" flag="allckb" /></span> <span class="itt-10">
											文件名 </span>

								</s>
								</a>
							</div>

							<div class="c2 col">
								<a class="indicator b-ig-ln" id="sizeCompareTrigger"
									hideFocus="" href="javascript:;"> <s
									class="indicator-cols clearfix"> <span class="itt-10">
											大小 </span>
								</s>
								</a>
							</div>

							<div class="c3 col">
								<a class="indicator b-ig-ln" id="timeCompareTrigger"
									hideFocus="" href="javascript:;"> <s
									class="indicator-cols clearfix"> <span>修改日期</span>
								</s>
								</a>
							</div>
						</div>
						</header>
					</div>
					<s:iterator value="resources">
						<!-- 循环体begin -->
						<dd class="clearfix file-item">
							<div title="我的视频" class="file-col col">
								<span class="inline-commands b-btn clearfix"></span><span
									class="inline-file-col"> <input type="checkbox"
									style="margin-left: 15px; margin-top: 15px" /> <span
									class="b-in-blk sprite-list-ic b-ic-book"
									style="cursor: pointer; background-position-x: 0px; background-position-y: 0px; position: absolute; margin-top: 11px; margin-left: 10px;">
								</span><a title="我的视频" class="file-handler b-no-ln dir-handler"
									style="cursor: pointer;" href="javascript:;"><s:property
											value="fileName" /> </a></span>
							</div>
							<div class="size-col col">
								<span style="line-height: 37px;"><s:property
										value="size/1024f" />K</span>
							</div>
							<div class="time-col col">
								<span style="line-height: 37px;"><s:property
										value="createDate" /></span>
							</div>
						</dd>
						<!-- 循环体end -->
					</s:iterator>
				</div>
				<div id="tabs-3">
					<dl>
						<dt class="groupsetdt">
							<p class="groupsettitle">基本资料</p>
						</dt>
						<dd>
							<p class="groupsetinfo">
								群名称：
								<s:property value="userGroup.name" />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">修改群资料</a>&nbsp;&nbsp; <input
									type="button" value="申请V认证" id="addIsVerify"
									groupId="<s:property value='groupId' />" />

							</p>
							<p class="groupsetinfo">
								群简介：
								<s:property value="userGroup.description" />
							</p>
							<p class="groupsetinfo">
								群头像：&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">重新上传图像</a>
							</p>
							<p class="groupsetinfo">
								<img src="../images/userandgroup.jpg" class="porfiledetailimg" />
							</p>
						</dd>
					</dl>
					<dl>
						<dt class="groupsetdt">
							<p class="groupsettitle">其他资料</p>
						</dt>
						<dd>
							<p class="groupsetinfo">
								创建人：
								<s:property value="userGroup.creator.userName" />
							</p>
							<p class="groupsetinfo">
								管理员：
								<s:property value="groupManagersString" />
							</p>
							<p class="groupsetinfo">
								成&nbsp;&nbsp;&nbsp;员：
								<s:property value="groupMembersString" />
							</p>
						</dd>
					</dl>
				</div>
				<div id="tabs-4">
					<s:form action="#" name="membersForm" id="membersForm"
						method="post" theme="simple">
						<s:hidden name="groupId" value="%{groupId}"></s:hidden>
						<div class="mygrouplist">
							<p>
								<input type="button" value="[添加群成员]" id="addMember"
									groupId="<s:property value='groupId' />" class="quitgroup" />
							</p>
							<s:iterator value="groupMembersExts">
								<!-- 循环体begin -->
								<dl>
									<dt>
										<img src="../images/profile2.jpg" />
									</dt>
									<dd>
										<p>
											<a href="#"><s:property value="user.userName" /></a>

											<s:if test="%{roleInGroup==2}">
												<span class="groupcreateflag">创建者</span>
											</s:if>
											<s:if test="%{roleInGroup==1}">
												<span class="groupadminflag">管理员</span>
												<input type="button" value="取消管理员" class="cancelAdmin"
													targetUserId="<s:property value='user.id' />"
													targetGroupId="<s:property value='groupId' />" />
												<input type="button" value="删除成员" class="deleteMember"
													targetUserId="<s:property value='user.id' />"
													targetGroupId="<s:property value='groupId' />" />
											</s:if>
											<s:if test="%{roleInGroup==0}">
												<input type="button" value="设置管理员" class="setAdmin"
													targetUserId="<s:property value='user.id' />"
													targetGroupId="<s:property value='groupId' />" />
												<input type="button" value="删除成员" class="deleteMember"
													targetUserId="<s:property value='user.id' />"
													targetGroupId="<s:property value='groupId' />" />
											</s:if>
											<input type="button" value="加关注" class="addAttention"
												targetUserId="<s:property value='user.id' />" />
										</p>
										<p>
											关注:
											<s:property value="attentionCount" />
											粉丝:
											<s:property value="fansCount" />
											分享文件数：
											<s:property value="shareCount" />
										</p>
										<p>
											简介：
											<s:property value="user.description" />
										</p>
									</dd>
								</dl>
								<!-- 循环体end -->
							</s:iterator>
							<!-- page begin -->
							<div
								style="text-align: right; padding-right: 20px; padding-top: 20px; background: none; height: 22px; font-size: 12px; position: relative; float: right;">
								[总计:${mPageInfo.resultCount}条]第${mPageInfo.page}页/共${mPageInfo.totalPage}页
								| <img src="${base}/common/images/navLeft.gif"
									onclick="JavaScript:goMemPage('1');" width="14" height="16"
									title="第一页" /> <img src="${base}/common/images/left.gif"
									onclick="JavaScript:goMemPage('${mPageInfo.previousPage}');"
									width="16" height="16" title="上一页" /> <img
									src="${base}/common/images/right.gif"
									onclick="JavaScript:goMemPage('${mPageInfo.nextPage}');"
									width="16" height="16" title="下一页" /> <img
									src="${base}/common/images/navRight.gif"
									onclick="JavaScript:goMemPage('${mPageInfo.totalPage}');"
									width="14" height="16" title="最后一页" /> <input type="text"
									id="toMPage" name="toMPage" size="3" style="width: 25px;"
									maxlength="9" /> <input type="button" class="button"
									value="GO" onclick="JavaScript:goMemPage($('#toMPage').val());"
									onmouseover="this.className='buttonhover'"
									onmouseout="this.className='button'" />
							</div>
							<!-- page end -->
						</div>
					</s:form>
				</div>
				<div id="tabs-5">
					<s:form action="#" name="fansForm" id="fansForm" method="post"
						theme="simple">
						<s:hidden name="groupId" value="%{groupId}"></s:hidden>
						<div class="mygrouplist">
							<s:iterator value="groupFans">
								<dl>
									<dt>
										<img src="../images/profile2.jpg" />
									</dt>
									<dd>
										<p>
											<a href="#"><s:property value="user.userName" /></a> <input
												type="button" value="加关注" class="addAttention"
												targetUserId="<s:property value='user.id' />" />
										</p>
										<p>
											关注:
											<s:property value="attentionCount" />
											粉丝:
											<s:property value="fansCount" />
											分享文件数：
											<s:property value="shareCount" />
										</p>
										<p>
											简介：
											<s:property value="user.description" />
										</p>
									</dd>
								</dl>
							</s:iterator>
							<!-- page begin -->
							<div
								style="text-align: right; padding-right: 20px; padding-top: 20px; background: none; height: 22px; font-size: 12px; position: relative; float: right;">
								[总计:${fPageInfo.resultCount}条]第${fPageInfo.page}页/共${fPageInfo.totalPage}页
								| <img src="${base}/common/images/navLeft.gif"
									onclick="JavaScript:goFanPage('1');" width="14" height="16"
									title="第一页" /> <img src="${base}/common/images/left.gif"
									onclick="JavaScript:goFanPage('${fPageInfo.previousPage}');"
									width="16" height="16" title="上一页" /> <img
									src="${base}/common/images/right.gif"
									onclick="JavaScript:goFanPage('${fPageInfo.nextPage}');"
									width="16" height="16" title="下一页" /> <img
									src="${base}/common/images/navRight.gif"
									onclick="JavaScript:goFanPage('${fPageInfo.totalPage}');"
									width="14" height="16" title="最后一页" /> <input type="text"
									id="toFPage" name="toFPage" size="3" style="width: 25px;"
									maxlength="9" /> <input type="button" class="button"
									value="GO" onclick="JavaScript:goFanPage($('#toFPage').val());"
									onmouseover="this.className='buttonhover'"
									onmouseout="this.className='button'" />
							</div>
							<!-- page end -->
						</div>
					</s:form>
				</div>
				<div id="tabs-6">
					<s:form action="groupUpdate.action" name="setGroupForm"
						id="setGroupForm" method="post" theme="simple">
						<s:hidden name="groupId" value="%{groupId}"></s:hidden>
						<dl>
							<dt class="groupsetdt">
								<p class="groupsettitle">群消息设置</p>
							</dt>
							<dd>
								<p class="groupsetinfo">
									<s:checkbox name="userGroupSetting.isSmsNotice"
										label="共享申请短信提醒" value="userGroupSetting.isSmsNotice"
										fieldValue="true" />
									共享申请短信提醒
								</p>
								<p class="groupsetinfo">
									<s:checkbox name="userGroupSetting.isEmailNotice"
										label="共享申请邮件提醒" value="userGroupSetting.isEmailNotice"
										fieldValue="true" />
									共享申请邮件提醒
								</p>
							</dd>
						</dl>
						<dl>
							<dt class="groupsetdt">
								<p class="groupsettitle">群组内设置</p>
							</dt>
							<dd>
								<p class="groupsetinfo">
									<s:checkbox name="userGroupSetting.isFreeAddUser"
										label="允许添加成员" value="userGroupSetting.isFreeAddUser"
										fieldValue="true" />
									是否允许添加成员
								</p>
								<p class="groupsetinfo">
									<s:checkbox name="userGroupSetting.isFreeUpdateInfo"
										label="允许修改群信息" value="userGroupSetting.isFreeUpdateInfo"
										fieldValue="true" />
									是否允许修改群信息
								</p>
							</dd>
						</dl>
						<dl>
							<dt class="groupsetdt">
								<p class="groupsettitle">身份验证</p>
							</dt>
							<dd>
								<p class="groupsetinfo">
									<s:radio name="userGroupSetting.isOpen"
										list="#{true:'任何人都可以加入本群',false:'需管理员同意才能加入本群'}" listKey="key"
										listValue="value" value="userGroupSetting.isOpen" />
								</p>
							</dd>
						</dl>
						<s:submit value="提交" />
					</s:form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
