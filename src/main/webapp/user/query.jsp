<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>查询用户</title>
	</head>
	<body>
		<s:actionerror/> 
		<s:form action="userQuery" method="post">
			<s:textfield name="uq.userId" label="编号" value="0"/>
			<s:textfield name="uq.name" label="姓名" />
			<s:select list="sexs" name="uq.sex" label="性别" headerKey="" headerValue="请选择"/>
			<s:textfield name="uq.age" label="年龄最小值" value="0"/>
			<s:textfield name="uq.age2" label="年龄最大值" value="0"/>
			<s:submit value="查询" />
		</s:form>
	</body>
</html>
