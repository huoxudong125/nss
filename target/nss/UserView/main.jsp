<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ include file="Top.jsp"%>

<!-- End Top -->



<div class="main">


	<%@ include file="Menu.jsp"%>
	<%@include file="Left.jsp"%>

	<div style="float: left; margin-top: 15px; margin-left: 16px; line-height:28px;">
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>基本信息</b><br/>
		<hr style="width:800px;" />
		</p>
		
		<p>
			<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp账号：${requestScope.UserName}</label>			
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp昵称：${requestScope.NickName}</label>
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp电话：${requestScope.Tel}</label></p>
		
		<p></p>
		<p align="center"><a href='${base}/UserView/info.action?type=<%= request.getParameter("type")%>&id=<%= request.getParameter("id")%>&menutag=info'>更多个人资料</a></p>
		
		<p></p>
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp>>最新分享</b><br/>
		<hr style="width:800px;align=left"/>
		</p>
		
		
		
		<c:choose>
				 <c:when test="${empty requestScope.list}">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该用户最新无分享。
			     </c:when>
				<c:otherwise>
					<table width="800px" border="0" cellspacing="0" cellpadding="0"
						id="tab" class="tableborder" style="margin-top:15px;margin-left:30px;">
						<tbody>
						<tr>
							<th  width="35%">文件名</th>
							<th  width="15%">大小</th>
							<th  width="20%">分享时间</th>
							<th  width="10%">类别</th>
							<th  width="20%">操作</th>
						</tr>
							<c:forEach var="res" items="${requestScope.list}">
								<tr  height="25">
									<td>${res.resourceName}</td>
									<td>${res.size }byte</td>
									<td>${res.createDate }</td>
									<td>${res.systemResourceTypeName }</td>
									<td align="center">下载 &nbsp;&nbsp;保存到我的网盘 </td>
								</tr>
								
							</c:forEach>
						</tbody>
						</table>
						<p></p>
						<p align="center"><a href='${base}/UserView/share.action?type=<%= request.getParameter("type")%>&id=<%= request.getParameter("id")%>&menutag=share'>所有分享</a></p>
					</c:otherwise>
				</c:choose>
				
	</div>


</div>



</body>
</html>
