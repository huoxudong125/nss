<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script type="text/javascript">
	function addAttention(_userId, _targetId, _type) {		
		$.post( '${base}/ajax/ajaxAddAttention.action',
				{ userId: _userId, targetId: _targetId, type:_type},
				function(data) {
					if(data.result==1){
						setAttentionDisplay(true);
						art.dialog.tips('关注成功！');						
					}
					else{
					}
			}
		);
	}
	
	function cancleAttention(_userId, _targetId, _type) {		
		$.post( '${base}/ajax/ajaxCancleAttention.action',
				{ userId: _userId, targetId: _targetId, type:_type},
				function(data) {
					if(data.result==1){	
						setAttentionDisplay(false);
						art.dialog.tips('取消关注成功！');						
					}
					else{
					}
			}
		);
	}
	
	function setAttentionDisplay( hasAtt ){
		if( !hasAtt ){
			$("#btnAttention").html('<a style="font-weight: normal"	href="javascript:addAttention(${requestScope.LoginUserId },${param.id } ,${requestScope.TargetUserType })">[我要关注]</a>');
		}else{
			$("#btnAttention").html('<a style="font-weight: normal"	href="javascript:cancleAttention(${requestScope.LoginUserId },${param.id } ,${requestScope.TargetUserType })">[取消关注]</a>');
		}
	}
</script>


<div class="mainleft wide">
	<ul class="b-list-3">
		<li class="separator-1" />
			<li>
				<img src="${base}/${requestScope.imageUrl}" class="porfiledetailimg" />
			</li>
			<li class="separator-1" />
				<li>
					<p>
						<b>${requestScope.curUserName }</b>
                    <span id="btnAttention">
						<c:if test="${requestScope.hasAttention==0}" var="result"
							scope="request">
							<a style="font-weight: normal"
								href="javascript:addAttention(${requestScope.LoginUserId },${param.id } ,${requestScope.TargetUserType })">[我要关注]</a>
						</c:if>
						<c:if test="${requestScope.hasAttention==1}" var="result"
							scope="request">
							<a style="font-weight: normal"
								href="javascript:cancleAttention(${requestScope.LoginUserId },${param.id } ,${requestScope.TargetUserType })">[取消关注]</a>
						</c:if>
						</span>
					</p>
				</li>
				<li class="separator-1" />
					<li>
						<p>
							<b>注册日期：</b>${requestScope.regDate }
						</p>
						<p>
							<b>最后登录：</b>${requestScope.lastLoginDate }
						</p>
						<p>
							<b>访问：</b> ${requestScope.viewCount }次 |
							<b>排名：</b>${requestScope.viewSortNo }
						</p>
						<p>
							<b>分享：</b> ${requestScope.sharedCount }个 |
							<b>排名：</b>${requestScope.sharedSortNo }
						</p>
					</li>
					<li class="separator-1" />
						<li>
							<p>
								<b>简介：</b> ${requestScope.description }
							</p>
						</li>
	</ul>
</div>