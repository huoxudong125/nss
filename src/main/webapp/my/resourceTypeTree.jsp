<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>添加用户</title>
	</head>
	<body>
		<s:form action="userAdd" method="post">
			<s:textfield name="user.userId" label="编号" readonly="true"/>
			<s:textfield name="user.name" label="姓名" />
			<s:select list="sexs" name="user.sex" label="性别" />
			<s:textfield name="user.age" label="年龄" />
			<s:submit value="添加" />
		</s:form>
	</body>
</html>
