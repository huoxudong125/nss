<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>添加Bulletin </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<link rel="Stylesheet" type="text/css" href="../css/common.css" />
	<link rel="Stylesheet" type="text/css" href="../css/gheader.css" />
	<link rel="Stylesheet" type="text/css" href="../css/main.css" />
	<link rel="Stylesheet" type="text/css" href="../css/jquery.ui.all.css" />
	<script language="javascript" type="text/javascript"	src="../js/jquery-1.6.3.min.js"></script>
	<script language="javascript" type="text/javascript"	src="../js/jquery.ui.core.js"></script>
	<script language="javascript" type="text/javascript"	src="../js/jquery.ui.widget.js"></script>
	<script language="javascript" type="text/javascript"	src="../js/jquery.ui.tabs.js"></script>
	<script language="javascript" type="text/javascript" src="../js/artDialog/artDialog.js?skin=default"></script>
    <script language="javascript" type="text/javascript" src="../js/artDialog/plugins/iframeTools.source.js"></script>

<script language="javascript" type="text/javascript" >
  $(function()
  {
       $("#submitAdd").bind("click",function(){

        $("#showMsg").val(' ');
        var bulletin =$("#Bulletin").attr("value");
        
        
        if(bulletin.length >100)
        {
          $("#showMsg").html("<font color=red> 总长为："+bulletin.length+" 不能大于100个字！</font>");
          return false;
        }
        var groupId=$("#groupId").attr("value")
        
        $.post('../group/updateBulletin.action',{groupId:groupId,bulletin:bulletin},callbackfunction);
       
       });
       
       $("#cancelAdd").bind("click",function(){
       	 art.dialog.close();// 关闭并返回数据到主页面
       });
  });
  
  function callbackfunction(data)
  {
     if(data.result ==0)
     {
	     $("#showMsg").html('<font color =red>添加失败！</font>');
     }
     if(data.result==1)
     {
       $("#showMsg").html("<font color =red>添加成功！</font>");
       parent.window.location.href=parent.window.location.href;
       art.dialog.close();// 关闭并返回数据到主页面
     }
     if(data.result ==2)
     {
      $("#showMsg").html('<font color =red>用户组出错！</font>');

     }
  }

</script>

  </head>
  
  <body>
  <form id="form1" action="#">
  <div>
  <br>
  <table  align="center" width="80%" >
				<tr>
					<td  align="left" cols ="2"> 
					请输入公告内容：
					
					
					
					</td>
				</tr>
				<tr>
					<td  align="left" cols ="2"> 

					<textarea name="Bulletin" id="Bulletin" cols="60" rows="5"></textarea>
					<input name="groupId" id="groupId" type="hidden"  value="<s:property value='groupId'/>" >
					
					</td>
				</tr>

				<tr>
					<td align="center"><input type="button" value="提交" id="submitAdd" name="submitAdd"/></td>
					<td align="center"><input type="button" value="取消" id="cancelAdd" name="cancelAdd"/></td>
				</tr>
	</table>
  </div>
  <div id="showMsg" align="center">
  
  </div>
    <br>
    </form>
  </body>
</html>
