<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base" value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}"/>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>显示用户信息</title>
<link rel="stylesheet" media="all" type="text/css" href="${base}/common/css/css.css" />
<script type="text/javascript"  src="${base}/common/js/jquery.min.js"></script>
<script language="javascript" type="text/javascript">
$(document).ready(function(){
		$("#queryUser").click(function(){
			queryPlan();
		});

});
function goPage(pageNum) {
	if(pageNum != ""){
		if(isInteger(pageNum, "请使用整型")){
			$("#list").attr("action","userQuery?pageNum=" + pageNum);
			$("#list").submit();
		}
	}
}
function queryPlan(){
	$("#list").attr("action","userQuery");
	$("#list").submit();
	
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

<form action="#" method="post" name="list" class="formcss" id="list">

<table width="98%" border="0" cellspacing="0" cellpadding="0" id="tab"	class="tableborder">
	<tbody>

		<tr class="trHeader">
			<th colSpan="13" class="tdHeader">
			
			<table  border='0' width="100%">
			<tr>
				<td width="80%">
				用户名称：<input name="userName" id="userName" type="text" size="20" value="${requestScope.userNameV}">
			    <input type="button" class="button" value="查询" id="queryUser" />
				</td>
				<td>
					<a href="/nss/user/userToAdd.action">添加用户</a> 
			<a  href="/nss/user/userToQuery.action">查询用户</a>
			</td> 
			</tr>
		   </table>

		<c:choose>
				 <c:when test="${empty requestScope.userList}">
						无指定条件数据！
			     </c:when>
					<c:otherwise>
					<table width="100%" border="0" cellspacing="0" cellpadding="0"
						id="tab" class="tableborder">
						<tbody>
						<tr>
							<th  width="8%">编号</th>
							<th  width="12%">姓名</th>
							<th  width="15%">性别</th>
							<th  width="8%">年龄</th>
							<th  width="15%">操作</th>
						</tr>
							<c:forEach var="user" items="${requestScope.userList}">
								<tr>
									<td>${user.userId}</td>
									<td>${user.name}</td>
									<td>${user.sex}</td>
						            <td>${user.age}</td>
								   <td>
								   		<a href="/nss/user/userToUpdate.action?user.userId=${user.userId}">修改</a> |
						                <a href="javascript:if(confirm('确认删除吗?')) window.location.href='/nss/user/userDelete.action?user.userId=${user.userId}'">删除</a> 
			   					  </td>
								</tr>
							</c:forEach>

							<tr>
								<td colspan="1"><br><br></td>
								<td colspan="4" ">
									<table height="100%" width="100%"><%@ include file="/common/page.jsp" %></table>
								</td>
							</tr>
						</tbody>
					</table>
					</c:otherwise>
				</c:choose>
		   <hr />
		
			</table>
		</form>
	</body>
</html>
