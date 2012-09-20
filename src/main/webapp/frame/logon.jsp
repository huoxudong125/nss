<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />

<form id="login-form">
<p>
	<label>
		帐号：&nbsp;&nbsp;&nbsp;
		<input id="login-form-username" name="username" type="text">
	</label>
	&nbsp;
	<label style="color: red;" id="usernameTip"></label>
</p>
<p>
	<label>
		密码：&nbsp;&nbsp;&nbsp;
		<input id="login-form-password" name="password" type="password">
	</label>
	&nbsp;
	<label style="color: red;" id="passwordTip"></label>
</p>
<p>
	<label>
		验证码：
		<input id="login-form-checkCode" name="checkCode" type="text"
			style="width: 50px">
		<img id="imageInfo" />
	</label>
	&nbsp;
	<label style="color: red;" id="checkCodeTip"></label>
</p>
</form>

<!-- IE8 style 标签写在HTML片段下方才能生效 -->
<style>
#login-form p {
	padding: 5px;
}

#login-form input {
	width: 15em;
	padding: 4px;
	border: 1px solid #CCC;
}

#login-form input:focus {
	border-color: #426DC9;
}

#login-form .login-form-error {
	background: #FFFBFC;
	border-color: #F00 !important;
}
</style>
<!--
	1、 script的类型如果是 text/dialog ，将会在对话框内部执行（类似init参数的回调），变量不会污染全局
    2、 如果使用jquery.artDialog，标准script的标签也能被执行
    3、 本页编码要与对话框所在页面编码保持一致
-->
<script type="text/dialog">

	var api = this,// 对话框扩展方法	

	username = $("#login-form-username"),
	password = $("#login-form-password"),
	checkCode = $("#login-form-checkCode"),
	
	usernameTip = $("#usernameTip"),
	passwordTip = $("#passwordTip"),
	checkCodeTip = $("#checkCodeTip");
 	
	// Popup window
	api.title('系统登录')
	.button(
		{	name: '登录',	callback: login,	focus: true	},
		{	name: '取消'		}	
	)	
	.lock();	
	
	username.focus();

	function login(){	
		clearTips();
		if (checkUserName() && checkPassword() && checkCheckCode()) 
		{
			enableCtrls( false );
			$.post(	"${base}/ajax/ajaxLogon.action",
					{UserName:username.val(), Password:password.val(), CheckCode:checkCode.val()} ,	
					processLoginResult
			  	  );
		}				
	
		return false;
	}

	function processLoginResult( data )
	{
		var res = data.result;

		if( res == 0 )
		{
			onLogonSuccess(data.userName,data.nickName);
			api.close();	
		}
		else
		{
			enableCtrls( true );
			reloadCheckCode();

			if( res==1 )
			{
				inputError(password,passwordTip,"密码输入错误！");
			}
			else if( res == 2)
			{
				inputError(checkCode,checkCodeTip,"验证码输入错误！");						
			}
			else if( res==3 )
			{
				inputError(username,usernameTip,"用户不存在！");
			}
			else if( res==4 )
			{
				inputError(username,usernameTip,"用户已被禁用！");
			}
		}		 
	}

	function clearTips()
	{
		usernameTip.empty();
		passwordTip.empty();
		checkCodeTip.empty();		
	}

	function enableCtrls( flag )
	{
		username.attr("disabled",!flag);
		password.attr("disabled",!flag);
		checkCode.attr("disabled",!flag);
	}
 
	var checkCheckCode = function( )
	{
		return hasInputValue( checkCode, checkCodeTip, "请输入验证码！");	
	}
	
	var checkPassword = function()
	{
		return hasInputValue( password, passwordTip, "请输入密码！");		
	}

	var checkUserName = function()
	{
		if( !hasInputValue( username, usernameTip, "请输入用户名！"))
		{
			return false;
		}

		if(!IsEmail(username.val()))
		{
			inputError(username, usernameTip, "用户名必须是email。");			
			return false;
		}

		return true;		
	}

	function hasInputValue( input, inputTip, emptyMsg )
	{
		if( input.val()=='' )
		{
			inputError(input, inputTip, emptyMsg );			
			return false;
		}
		return true;
	}

	function IsEmail(email){
  		var reg=/^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/gi;
  		if(!reg.test(email)){   		
   			return false;
  		}
		return true;
	}
 
	// 输入错误提示
	var inputError = function (input, inputTip, errorMsg ) {
		inputTip.html(errorMsg);
		clearTimeout(inputError.timer);
		var num = 0;
		var fn = function () {
			inputError.timer = setTimeout(
				function () {
					input[0].className = input[0].className === '' ? 'login-form-error' : '';
					if (num === 5) {
						input[0].className === '';
					} else {
						fn(num ++);
					};
				}, 
			150);
		};

		fn();
		input.focus();
	};

	function keyDown(e){
		temp = window.event||e ;
		var code=temp.keyCode||temp.which;
		if(code==13){
			login();
		}
	}

	$(document).ready(
		function(){
			reloadCheckCode();
			$("#imageInfo").click( reloadCheckCode );
			$("input").keydown(keyDown);
		}
	);

	function reloadCheckCode()
	{
		$("#imageInfo").attr("src", "${base}/codeImage?r="+Math.random());
	}
	
</script>


