<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ include file="Top.jsp"%>

<!-- End Top -->

<script language="javascript" type="text/javascript">
	function goPage(pageNum) {
		if (pageNum != "") {
			if (isInteger(pageNum, "请使用整型")) {
				var url = location.href;
				var pos = url.indexOf("&pageIndex");
				if (pos >= 0) {
					url = url.substring(0, pos);
				}

				url = url + "&pageIndex=" + pageNum;
				window.location.replace(url);
			}
		}
	}

	function isInteger(strNum, msg) {
		if (strNum.search(/^(0|[1-9]\d*)$/) != -1) {
			return true;
		} else {
			alert(msg);
			return false;
		}
	}
	
	function attend( _userId, _targetId, _type) {		
		$.post( '${base}/ajax/ajaxAddAttention.action',
				{ userId: _userId, targetId: _targetId, type:_type},
				function(data) {
					if(data.result==1){						
						art.dialog.tips('关注成功！');	
						var id = "A"+_type+"_"+_targetId;
						var html = '<font color="red">我已关注</font> | <a href="javascript:delAttend(' + _userId + ','+ _targetId +','+ _type +');"><font color="green">取消</font></a>';
						$("#"+id).parent().html(html);					
					}
					else{
					}
			}
		);
	}
	
	function delAttend(_userId, _targetId, _type) {		
		$.post( '${base}/ajax/ajaxCancleAttention.action',
				{ userId: _userId, targetId: _targetId, type:_type},
				function(data) {
					if(data.result==1){	
						art.dialog.tips('取消关注成功！');	
						var id = "A"+_type+"_"+_targetId;
						var html = '<a href="javascript:attend(' + _userId + ','+ _targetId +','+ _type +');"><font color="green">我要关注</font></a>';
						$("#"+id).parent().html(html);						
					}
					else{
					}
			}
		);
	}
</script>


<div class="main">


	<%@ include file="Menu.jsp"%>
	<%@include file="Left.jsp"%>

	<div
		style="float: left; margin-top: 15px; margin-left: 16px; line-height: 28px;">
		<p>
			<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>他的关注</b>
			<br />
			<hr style="width: 800px;" />
		</p>

		<c:choose>
			<c:when test="${empty requestScope.list}">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该用户未关注其他用户。
			     </c:when>
			<c:otherwise>
				<table width="800px" border="0" cellspacing="0" cellpadding="0"
					id="tab" class="tableborder"
					style="margin-top: 15px; margin-left: 30px;">
					<tbody>
						<c:forEach var="ae" items="${requestScope.list}">
							<tr">
								<td width="62">
								<a target='_blank' href='main.action?type=${ae.type }&id=${ae.targetId }&menutag=main'><img width=50 height=50 src='${base}/${ae.logoImgUrl }'/></a><br/>
									&nbsp;									
								</td>
								<td align="left" valign="top" style="line-height:22px;padding-right:25px;">
								<a target='_blank' href='main.action?type=${ae.type }&id=${ae.targetId }&menutag=main'><font color="#000099">${ae.nickName}</font></a> &nbsp;&nbsp;
									<c:if test='${ae.type=="user"}' var="result" scope="request">
										<img src="../images/maleflag.jpg" valign="bottom" /> <br/>
										关注&nbsp;<a target='_blank' href='attention.action?type=${ae.type }&id=${ae.targetId }&menutag=atte'><font color="#990033"><b>${ae.attendCount }</b></font></a>
										 &nbsp;|&nbsp;粉丝&nbsp;<a target='_blank' href='fans.action?type=${ae.type }&id=${ae.targetId }&menutag=fans'><font color="#990033"><b>${ae.fansCount }</b></font></a>&nbsp;|&nbsp;分享&nbsp;<a target='_blank' href='share.action?type=${ae.type }&id=${ae.targetId }&menutag=share'><font color="#990033"><b>${ae.sharedCount }</b></font></a> <br/>
										<b>简介:</b>${ae.description }
									</c:if>
									
									<c:if test='${ae.type=="group"}' var="result" scope="request">
										<img src="../images/groupflag.jpg" valign="bottom" width=14 height=13 /> &nbsp;管理员：
										<c:forEach var="admin" items="${ae.admins}">
											<font color="#0000FF">${admin.nickName }</font>&nbsp;
										</c:forEach>
										<br/>
										粉丝&nbsp;<a target='_blank' href='fans.action?type=${ae.type }&id=${ae.targetId }&menutag=fans'><font color="#990033"><b>${ae.fansCount }</b></font></a>&nbsp;|&nbsp;分享&nbsp;<a target='_blank' href='share.action?type=${ae.type }&id=${ae.targetId }&menutag=share'><font color="#990033"><b>${ae.sharedCount }</b></font></a>&nbsp;&nbsp;成员&nbsp;<font color="#990033"><b>${ae.memberCount }</b></font> <br/>
										<b>简介:</b>${ae.description }										
									</c:if>
						
								</td>
								<td width="100">
									<c:if test='${ae.IHaveAttented==1}' var="result" scope="request">
									     <font color="red">我已关注</font> | <a id="A${ae.type=='user'?1:2}_${ae.targetId }" href="javascript:delAttend(${ae.loginedUserId},${ae.targetId },${ae.type=='user'?1:2});"><font color="green">取消</font></a>
									</c:if>
									<c:if test='${ae.IHaveAttented==0}' var="result" scope="request">
									     <a id="A${ae.type=='user'?1:2}_${ae.targetId }" href="javascript:attend(${ae.loginedUserId},${ae.targetId },${ae.type=='user'?1:2});"><font color="green">我要关注</font></a>
									</c:if>
								</td>
							</tr>
							
							<tr>
								<td colspan=3 align="center" height="18">
									<hr width="80%" />
								</td>
							</tr>

						</c:forEach>

						<tr>
							<td colspan="1">
								<br>
								<br>
							</td>
							<td colspan="2"">
								<table height="100%" width="100%"><%@ include
										file="/common/page.jsp"%></table>
							</td>
						</tr>
					</tbody>
				</table>
			</c:otherwise>
		</c:choose>




	</div>
</div>


</body>
</html>
