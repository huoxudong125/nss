<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
	<head>
		<title>我的网盘</title>
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
		<script language="javascript" type="text/javascript"
			src="../js/my/fuc.js"></script>
		
	</head>
	<body>
		<div>
			<%@ include file="mainleft.jsp"%>

			<div class="mainright">

				<div id="header-shaw">
					<div class="location clearfix b-header b-bdr-7">
						<ul class="bar-cmd-view-list clearfix">
							<li>
								<a title="列表模式" class="select" id="barCmdViewList"
									href="javascript:;"></a>
							</li>
							<li class="end">
								<a title="缩略图模式" id="barCmdViewSmall" href="javascript:;"></a>
							</li>
						</ul>
						<ul class="b-list-2 bar-cmd-list">
							<li>
								<a title="新建文件夹" class="icon-btn-createfile"
									id="barCmdNewFolder" href="javascript:;"> </a>
							</li>
						</ul>
						<ul class="list-loc dir-path clearfix" label="全部文件">
							<li>
								<a class="a-back disabled " id="parentDir" href="javascript:"><span
									class="" />
								</a>
							</li>
							<li id="dirPath">
								<a class="b-no-ln disabled" id="dirRoot" href="javascript:;"
									style="color: #000"> 全部文件 </a>
							</li>
						</ul>
					</div>
				</div>
				<section class="files" sizcache="3" sizset="35">
				<div class="all-files-headers" style="display: block;">
					<!--文件的操作-->
					<header class="files-header b-header b-bdr-7" id="fileActionHeader"
						style="display: none;">
					<p>
						<span class="b-fl input-cbx selectionArbitrate"> <dfn>
								<s class="sprite"></s>
							</dfn> </span>
						<span class="check-all"> 全选 </span>
						<span id="file_action_word"> 已选中1个文件/文件夹 </span>
						<span class="clearfix" id="file_action_buttons"> <a
							class="bbtn disabled" id="barCmdPublicAll" href="#"
							onclick=javascript:void(0);;
> <b>分享到OA</b> </a> <a class="bbtn disabled"
							id="barCmdShareAll" href="#" onclick=javascript:void(0);;
> <b>分享给指定用户</b> </a>
							<a class="bbtn disabled" id="A1" href="#" onclick=javascript:void(0);;
>
								<b>分享到群</b> </a>
							<a class="bbtn disabled" id="A2" href="#" onclick=javascript:void(0);;
> <b>生成外链</b> </a>
							<a class="bbtn disabled" id="barCmdDownload" href="#"
							onclick=javascript:void(0);;
> <b>下载</b> </a> <a class="bbtn disabled"
							id="barCmdCopy" href="#" onclick=javascript:void(0);;
> <b>复制</b> </a> <a
							class="bbtn disabled" id="A4" href="#" onclick=javascript:void(0);;
>
								<b>移动</b> </a>
							<a class="bbtn disabled" id="A6" href="#" onclick=javascript:void(0);;
> <b>重命名</b> </a>
							<a class="bbtn" id="barCmdDelete" href="#"
							onclick=javascript:void(0);;
> <b>删除</b> </a> </span>
					</p>
					</header>
					<!--文件的头-->
					<header class="files-header b-header b-bdr-7" id="sortColsHeader"
						style="display:block;">
					<div class="clearfix">
						<div class="c1 col">
							<a class="indicator b-ig-ln indicator-name desc"
								id="nameCompareTrigger" href="javascript:;"> <s
								class="indicator-cols clearfix"> <!--  <span class="b-fl input-cbx selectionArbitrate" >
                   <dfn><s class="sprite"></s> </dfn>
                     
                      </span>--> <span style="margin-left: 15px;"><input
											type="checkbox" flag="allckb" /> </span> <span class="itt-10">
										文件名 </span> </s> </a>
						</div>

						<div class="c2 col">
							<a class="indicator b-ig-ln" id="sizeCompareTrigger" hideFocus=""
								href="javascript:;"> <s class="indicator-cols clearfix">
									<span class="itt-10"> 大小 </span> </s> </a>
						</div>

						<div class="c3 col">
							<a class="indicator b-ig-ln" id="timeCompareTrigger" hideFocus=""
								href="javascript:;"> <s class="indicator-cols clearfix">
									<span>修改日期</span> </s> </a>
						</div>
					</div>
					</header>

				</div>

				<form name="fileList" class="file-list b-rlv" id="fileList"
					style="height: 514px;" action="#">
					<c:forEach var="list" items="${requestScope.resources}">
						<dl class="infinite-listview" id="infiniteListView"
							style="margin-top: 0px; display: block;">
							<dd class="clearfix file-item">
								<div title=${list.fileName } class="file-col col">
									<span class="inline-commands b-btn clearfix"></span>
									<span class="inline-file-col"> <input type="checkbox"
											style="margin-left: 15px; margin-top: 15px"
											srt=${list.type.name} sid= ${list.id} /> <span
										class="b-in-blk sprite-list-ic b-ic-book"
										sid="/nss/feipan/resourceQuery.action?id=${list.id}"
										style="cursor: pointer; background-position-x:${list.type.x}; background-position-y: ${list.type.y}; position: absolute; margin-top: 11px; margin-left: 10px;">
									</span> <a title=${list.fileName
										}
										class="file-handler b-no-ln dir-handler"
										style="cursor: pointer;"
										href="/nss/feipan/resourceQuery.action?id=${list.id}">
											${list.fileName} </a> </span>
								</div>
								<div class="size-col col">
									<span style="line-height: 37px;"> ${list.size} </span></div>
								<div class="time-col col">
										<span style="line-height: 37px;"> ${list.createDate} </span>
								</div>
								
							</dd>
						</dl>
					</c:forEach>
				</form>
				</section>

			</div>
		</div>

	</body>
</html>