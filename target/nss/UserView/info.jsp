<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="Top.jsp"%>

<!-- End Top -->



<div class="main">


   <%@ include file="Menu.jsp" %>
	<%@include file="Left.jsp" %>	
	
	<div style="float: left; margin-top: 15px; margin-left: 16px; line-height:28px;">
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>个人资料</b><br/>
		<hr style="width:800px;" />
		</p>
		
		<p>
			<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号：${requestScope.UserName}</label>			
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昵称：${requestScope.NickName}</label>
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册时间：${requestScope.regDate }</label>
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后登录：${requestScope.lastLoginDate }</label>
		</p>
		
		
		<p></p>
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>联系方式</b><br/>
		<hr style="width:800px;align=left"/>
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：${requestScope.Tel}</label></p>
		
		<p></p>
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>其他资料</b><br/>
		<hr style="width:800px;align=left"/>
		</p>
		
		<p><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简介：${requestScope.description}</label></p>
		
		
		
		 
				
	</div>
</div>


</body>
</html>
