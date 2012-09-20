<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.feinno.nss.core.utils.DateUtil"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
	<head>
		<title>回收站</title>
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
		<style type="text/css">
		.file-col,#sortcolsheader .c1{width:50%;}
		.size-col,.c2{width:14%;}
	    .time-col,.c3{width:22%;}
	    .remaining-col,.c4{width:13%;text-align:center;}
	    .input-cbx,.input-cbx:link,.input-cbx:visited, .input-cbx:hover,.input-cbx:active {padding: 11px 15px 11px 15px;position: relative;}
		</style>
	</head>
	<body>
		<div>
			<%@ include file="mainleft.jsp"%>
			<div class="mainright">		
					<div id="header-shaw">
						<div class="location clearfix b-header b-bdr-7">
							<ul class="list-loc dir-path clearfix" label="回收站">
								<li id="dirPath">
									<a class="b-no-ln disabled" href="javascript:;" id="dirRoot">回收站</a>
									<span id="dirLocation"> </span>
								</li>
							</ul>
							<ul class="menu_btn">
								<li class="b-list-item">
									<a _i="2" class="bbtn icon-pl" href="javascript:;"
										id="barCmdPersistClear"><em class="icon-clear-file"></em><b>清空回收站</b>
									</a>
								</li>
								<li class="b-list-item public-zhuanhua">
									<em>提示：</em>回收站文件不占用您的空间，文件保存10天后将被服务器清除。
								</li>
							</ul>
						</div>
					</div>
					<div class="b-rlv clearfix">
						<div class="property-trs clearfix" id="propertyFilePathContainer"
							style="display: none">
							<span class="property-spans property-stable">路径：</span>
							<span class="property-spans property-data"
								id="property-file-path"
								style="work-break: break-all; width: 140px; word-wrap: break-word"></span>
						</div>
						<section class="files">
						<div class="all-files-headers">
							<header class="files-header b-header b-bdr-7"
								id="fileActionHeader" style="display: none; ">
							<p>
								<span class="b-fl input-cbx selectionArbitrate"><dfn>
										<s class="sprite"></s>
									</dfn>
								</span>
								<span class="check-all">全选</span>
								<span id="file_action_word">已选中1个文件/文件夹</span>
								<span class="clearfix" id="file_action_buttons"> <a
									class="bbtn" hidefocus="true" href="javascript:;"
									id="barCmdRestore" _i="0"><b>还原</b>
								</a> <a class="bbtn" hidefocus="true" href="javascript:;"
									id="barCmdPersistDelete" _i="1"><b>彻底删除</b>
								</a> </span>
							</p>
							<ul class="pull-down-menu" style="display: none">
								<li>
									<a _data="rename" href="javascript:;" id="barCmdRename">重命名</a>
								</li>
								<li>
									<a _data="copy" href="javascript:;" id="barCmdCopy">复制到</a>
								</li>
								<li>
									<a _data="move" href="javascript:;" id="barCmdMove">移动到</a>
								</li>
							</ul>
							</header>
							<header class="files-header b-header b-bdr-7"
								id="fileThumbHeader" style="display: none; ">
							<p>
								<span class="b-fl input-cbx selectionArbitrate"><dfn>
										<s class="sprite"></s>
									</dfn>
								</span>
								<span class="check-all">全选</span>
							</p>
							</header>
							<header class="files-header b-header b-bdr-7" id="sortColsHeader"
								style="display: block; ">
							<div class="clearfix">
							<div class="c1 col">
								<a class="indicator b-ig-ln indicator-name" hidefocus="true"
									href="javascript:;" id="nameCompareTrigger"> <s
									class="indicator-cols clearfix"> <span
										class="b-fl input-cbx selectionArbitrate"><dfn>
												<s class="sprite"></s>
											</dfn> </span> <span class="itt-10">文件名</span> <span
										class="b-in-blk sprite-ic action-dd"></span> </s> </a>
							</div>
							<div class="c2 col">
									<a class="indicator b-ig-ln" hidefocus="true"
										href="javascript:;" id="sizeCompareTrigger"> <s
										class="indicator-cols clearfix"> <span class="itt-10">大小</span>
											<span class="b-in-blk sprite-ic action-dd"></span> </s> </a>
								</div>
								<div class="c3 col">
									<a class="indicator b-ig-ln" hidefocus="true"
										href="javascript:;" id="timeCompareTrigger"> <s
										class="indicator-cols clearfix"> <span>删除时间</span> <span
											class="b-in-blk sprite-ic action-dd"></span> </s> </a>
								</div>
								<div class="c4 col">
									<a class="indicator b-ig-ln" hidefocus="true"
										href="javascript:;" id="remainingCompareTrigger"> <s
										class="indicator-cols clearfix"> <span>有效时间</span> <span
											class="b-in-blk sprite-ic action-dd"></span> </s> </a>
								</div>
							</div>
							</header>
						</div>
						<form action="javascript:void(0)" class="file-list b-rlv"
							id="fileList" method="get" name="fileList"
							onsubmit="return false" unselectable="on" style="height: 644px;">
							<div class="center loading-data clearfix"
								id="inifiniteListViewEmptyNote" style="display: none;">
								没有数据
							</div>
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
									</span> <a title=${list.fileName}
										class="file-handler b-no-ln dir-handler"
										style="cursor: pointer;">${list.fileName} </a> </span>
								</div>
									<div class="size-col col">
										<span style="line-height: 37px;"> ${list.size}</span>
									</div>
									<div class="time-col col">
										<span style="line-height: 37px;">${list.createDate}</span>
									</div>
									<div class="remaining-col col">
										<span style="line-height: 37px;">${list.recycleDayLeft}</span>
									</div>
								</dd>
							</dl>
							</c:forEach>
							<dl class="infinite-gridview" id="infiniteGridView"
								style="display: none">
								<dd class="center loading-data">
									正在加载数据，请稍候…
								</dd>
							</dl>
						</form>
						</section>
					</div>
			</div>
		</div>
	</body>
</html>