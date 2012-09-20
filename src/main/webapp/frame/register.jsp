<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<c:set var="base"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}" />

<form id="login-form">
<p>
	<label>帐号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<input id="userName" name="userName" type="text"></label>
	<label style="color:red">*</label>&nbsp;账号请使用有效Email。
	<label style="color: red;" id="userNameTip"></label>
</p>
<p>
	<label>
		密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="password" name="password" type="password">
	</label><label style="color:red">*</label>
	&nbsp;
	<label style="color: red;" id="passwordTip"></label>
</p>
<p>
	<label>
		确认密码：&nbsp;
		<input id="rePassword" name="rePassword" type="password">
	</label><label style="color:red">*</label>
	&nbsp;
	<label style="color: red;" id="rePasswordTip"></label>
</p>
<p>
	<label>
		昵称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="nickName" name="nickName" type="text">
	</label><label style="color:red">*</label>
	&nbsp;
	<label style="color: red;" id="nickNameTip"></label>
</p>

<p>
	<label>
		简介：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<textarea rows="3" cols="60" id="description" name="description" ></textarea>
	</label>	
</p>

<p>
	<label>
		验证码：&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="checkCode" name="checkCode" type="text"
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

	userName = $("#userName"),
	password = $("#password"),
	rePassword = $("#rePassword"),
	checkCode = $("#checkCode"),
	nickName = $("#nickName"),
	description = $("#description"),
	
	userNameTip = $("#userNameTip"),
	passwordTip = $("#passwordTip"),
	rePasswordTip = $("#rePasswordTip"),
	checkCodeTip = $("#checkCodeTip");
 	
	// Popup window
	api.title('用户注册')
	.button(
		{	name: '注册',	callback: register,	focus: true	},
		{	name: '取消'		}	
	)	
	.lock();	
	
	userName.focus();

	function register(){	
		clearTips();
		if (checkUserName() && checkPassword() && checkCheckCode()) 
		{
			enableCtrls( false );
			$.post(	"${base}/ajax/ajaxRegister.action",
					{UserName:userName.val(), Password:password.val(), CheckCode:checkCode.val(),
					 NickName:nickName.val(), Description: description.val() } ,	
					 processRegisterResult
			  	  );
		}				
	
		return false;
	}

	function processRegisterResult( data )
	{
		var res = data.registerResult;

		if( res == 0 )
		{
			api.close();

			art.dialog({
    				title: '用户注册',
    				content: "用户【" + data.userName + "】注册成功！",
    				icon: 'succeed',
    				ok: function(){
        					return true;
    					}
				});
		}
		else
		{
			enableCtrls( true );
			reloadCheckCode();

			if( res==1 )
			{
				inputError(userName,userNameTip,"该用户名已被使用！");
			}
			else if( res == 2)
			{
				inputError(checkCode,checkCodeTip,"验证码输入错误！");						
			}			
		}	
	}

	function clearTips()
	{
		userNameTip.empty();
		passwordTip.empty();
		rePasswordTip.empty();
		checkCodeTip.empty();		
	}

	function enableCtrls( flag )
	{
		userName.attr("disabled",!flag);
		password.attr("disabled",!flag);
		rePassword.attr("disabled",!flag);
		checkCode.attr("disabled",!flag);
		nickName.attr("disabled",!flag);
		description.attr("disabled",!flag);
	}
 
	var checkCheckCode = function( )
	{
		return hasInputValue( checkCode, checkCodeTip, "请输入验证码！");	
	}
	
	var checkPassword = function()
	{
		if(!hasInputValue( password, passwordTip, "请输入密码！"))
		{
			return false;
		}
		if( rePassword.val()!=password.val())
		{
			inputError(rePassword, rePasswordTip, "两次输入的密码不一致！" );
			return false;
		}
		
		return true;		
	}

	var checkUserName = function()
	{
		if( !hasInputValue( userName, userNameTip, "请输入用户名！"))
		{
			return false;
		}

		if(!IsEmail(userName.val()))
		{
			inputError(userName, userNameTip, "用户名必须是Email。");			
			return false;
		}

		return true;		
	}

	function hasInputValue( input, inputTip, emptyMsg )
	{
		if( input.val()=='' )
		{
			inputTip.html(emptyMsg);
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
			register();
		}
	}

	$(document).ready(
		function(){
			reloadCheckCode();
			$("#imageInfo").click( reloadCheckCode );
			$("input").keydown(keyDown);

			$(userName).change(
				function(){
					if( $(this).val()!=''){
						$.post(	"ajax/ajaxCheckUserName.action",
								{UserName:$(this).val()} ,	
								function(data){
									if( data.userNameHaveUsed ){
										inputError(userName,userNameTip,"该用户名已被使用！");
									}
									else{
										userNameTip.empty();
									}
								}
			  	  			  );
					}
				}
			);
		}
	);

	function reloadCheckCode()
	{
		$("#imageInfo").attr("src", "${base}/codeImage?r="+Math.random());
	}
	
</script>


