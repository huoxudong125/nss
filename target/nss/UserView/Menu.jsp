<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<script language="javascript" type="text/javascript">
        $(function () {       
            var type = '<%= request.getParameter("type")%>';
        	var menutag = '<%= request.getParameter("menutag")%>';
        	var id = '<%= request.getParameter("id")%>';        	
        	
        	var menus;
        	if( type == "group" ){
        		menus = ["main","share","info","fans"];
        	}
        	else{
        		menus = ["main","share","info","atte","fans"];
        	}
        	
        	var selectedIndx = 0;
        	for( var i=0; i<menus.length;i++){
        		if( menus[i]==menutag ){
        			selectedIndx = i;
        		}
        	}
        	
        	$("#tabs").tabs({ selected: selectedIndx });  
        	
        	$("#tabs a").click( 
        						function(){
        								var tagName = $(this).attr("tag");
        								var url = $(this).attr("url");
        								var targetUrl = url+"?type="+type+"&id="+id+"&menutag="+tagName;
        								location.replace(targetUrl);
        							}
        					);         
        });
    </script>
	
		
	
		<div id="tabs" style="border:solid 0px red; margin:0px;height:36px; padding:2px 0px 0px 0px;" >
			<ul>	
				<li style="margin-top:2px; margin-left:10px;margin-right:170px;">				
						<span class="grouptitle">${requestScope.curNickName }</span><img src="../images/groupflag.jpg" class="groupflag" />
				</li>			
				<li>
					<a href="main" tag="main" url="main.action">个人主页</a>
				</li>
				<li>
					<a href="share" tag="share" url="share.action">所有分享</a>
				</li>
				<li>
					<a href="info" tag="info" url="info.action">个人资料</a>
				</li>
				
				
				<c:if test="${param.type=='user'}" var="result" scope="request">
					<li>
						<a href="atte" tag="atte" url="attention.action">关注(${requestScope.attensCount })</a>
					</li>
				</c:if>
				
				<li>
					<a href="fans" tag="fans" url="fans.action">粉丝(${requestScope.fansCount })</a>
				</li>
			</ul>	
		</div>
		
