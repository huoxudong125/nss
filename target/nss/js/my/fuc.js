$(document).ready(function() {
 
    // 单击checkbox事件
		$(":checkbox").bind("click", function() {
		    var selected = 0;
            $(":checkbox").each(function(){
                if($(this).attr("checked"))
                {
                    $("#fileActionHeader").show();
                    $("#sortColsHeader").hide();
                    selected++;
                }
            });
            if(selected==0){
			     $("#fileActionHeader").hide();
			     $("#sortColsHeader").show();
			}
			if(selected>1){ 
			    $("#A6").removeClass(); // 重命名按钮
			    $("#A6").addClass("bbtn disabled");
		
			}
			else{
			      $("#A6").removeClass();
                  $("#A6").addClass("bbtn");
			}
			if(selected>0){ 
                $("#barCmdCopy").removeClass();
                $("#barCmdCopy").addClass("bbtn");
                $("#A4").removeClass();
                $("#A4").addClass("bbtn");
            }
            else{
                $("#barCmdCopy").removeClass();
                $("#barCmdCopy").addClass("bbtn disabled");
                $("#A4").removeClass();
                $("#A4").addClass("bbtn disabled");
            }
		});

		$("#barCmdDelete").bind("click", function() {
		    var paramV="["
		    var selected= $(":checkbox:checked").each(function(){
		       var isrt= $(this).attr("srt")=="FORDER";
		       var id =$(this).attr("sid");
		       var item= "{'id':"+id+",'isResourceType':"+isrt+"}";
		       paramV=paramV+item+",";
		    })
		    paramV=paramV.substring(0,paramV.length-1) +"]";

			art.dialog.confirm('你确认要把所选文件放入回收站吗？', function() {
				$.ajax(
				    {
				        url:"/nss/ajax/resourceDelete.action",
				        type:"post",
				        dataType:"json",
				        data:{params:paramV,state:1},
				        timeout:20000,
				        success: function (data) {
                           if(data.result=="success")
                           {
                               window.location.reload();
                           }
                           else{
                              art.dialog.tips("放入回收站失败，请联系管理员！");
                           }
                        }
				    }
				)
			}, function() {
				//  art.dialog.tips('你取消了操作');
			});
		});
		
		// 彻底删除回收站选中的东西
		$("#barCmdPersistDelete").bind("click", function() {
            var paramV="["
            var selected= $(":checkbox:checked").each(function(){
               var isrt= $(this).attr("srt")=="FORDER";
               var id =$(this).attr("sid");
               var item= "{'id':"+id+",'isResourceType':"+isrt+"}";
               paramV=paramV+item+",";
            })
            paramV=paramV.substring(0,paramV.length-1) +"]";

            art.dialog.confirm('你确认要彻底删除所选文件吗？', function() {
                $.ajax(
                    {
                        url:"/nss/ajax/resourceDelete.action",
                        type:"post",
                        dataType:"json",
                        data:{params:paramV,state:2},
                        timeout:20000,
                        success: function (data) {
                           if(data.result=="success")
                           {
                               window.location.reload();
                           }
                           else{
                              art.dialog.tips("彻底删除文件失败，请联系管理员！");
                           }
                        }
                    }
                )
            }, function() {
                //  art.dialog.tips('你取消了操作');
            });
        });

        // 还原回收站选中的东西
        $("#barCmdRestore").bind("click", function() {
            var paramV="["
            var selected= $(":checkbox:checked").each(function(){
               var isrt= $(this).attr("srt")=="FORDER";
               var id =$(this).attr("sid");
               var item= "{'id':"+id+",'isResourceType':"+isrt+"}";
               paramV=paramV+item+",";
            })
            paramV=paramV.substring(0,paramV.length-1) +"]";

                $.ajax(
                    {
                        url:"/nss/ajax/resourceDelete.action",
                        type:"post",
                        dataType:"json",
                        data:{params:paramV,state:0},
                        timeout:20000,
                        success: function (data) {
                           if(data.result=="success")
                           {
                               window.location.reload();
                           }
                           else{
                              art.dialog.tips("还原文件失败，请联系管理员！");
                           }
                        }
                    }
                );
        });
        
        // 重命名文件
       $("#A6").bind("click",function(){
           // 重命名表单
           var formhtml='<form style="margin-left: 45px;float:right;margin-top:10px;margin-right:98px" action="javascript:;" method="get" name="folderGeneratorForm" id="folderGeneratorFormId" class="folder-generator file-handler">'+
           '<input id="folderGeneratorHandler" autocomplete="off" spellcheck="false" type="text" name="generator" size="35"></input>'+
           '<a title="确定" class="b-in-blk img-ico ic-chname-ok" style="float:right" href="javascript:; "></a>'+
           '<a title="取消" class="b-in-blk img-ico ic-chname-failure"  style="float:right" href="javascript:;"></a></form>';
           var paramV="["
           
           $(":checkbox:checked").each(function(){
               var a1=$(this).parents(".file-col").find("a.file-handler");
               a1.css("display","none");
               var s1=$(this).next("span");
               s1.css("margin-left","17px"); //修复错位
               $(this).parents("span.inline-file-col").append(formhtml); // 添加表单
               $("#folderGeneratorHandler").val($(this).parents(".file-col").find("a.file-handler").text().trim()); // 赋值
               $("#A6").toggleClass("disabled");
    
                $("a[title='取消']").click(function(){
                   $("#folderGeneratorFormId").remove();
                   a1.removeAttr("style");
                   a1.css("cursor","pointer");
                   s1.css("margin-left","10px");
                   $("#A6").toggleClass("disabled");
               });
               
               // 取值
               var isrt= $(this).attr("srt")=="FORDER";
               var id =$(this).attr("sid");
               var item= "{'id':"+id+",'isResourceType':"+isrt+"}";
               paramV=paramV+item+",";
           });
           
            paramV=paramV.substring(0,paramV.length-1) +"]"
            
           $("a[title='确定']").click(function(){
                     $.ajax(
                       {
                        url:"/nss/ajax/resourceDelete.action",
                        type:"post",
                        dataType:"json",
                        data:{params:paramV,name:$("#folderGeneratorHandler").val()},
                        timeout:20000,
                        success: function (data) {
                           if(data.result=="success")
                           {
                               window.location.reload();
                           }
                           else{
                              art.dialog.tips("重命名失败，请联系管理员！");
                           }
                        }
                    }
                );       
           });
       });
        
		$("#uploadfileBtn").bind("click", function() {
			//iframe
				art.dialog.open('uploadfile.htm', {
					title : '上传文件',
					width : 500,
					height : 400
				});
			});

		// 全部文件导航
		$(".b-in-blk.sprite-list-ic.b-ic-book").bind("click", function() {
			window.location.href = $(this).attr("sid");
		});
		
		// 向上按钮
		if (window.location.search.length>1) {
			$("#parentDir").removeClass();
			$("#parentDir").addClass("a-back");
		} else {
			$("#parentDir").removeClass();
			$("#parentDir").addClass("a-back disabled ");
		}
		$("#parentDir").bind("click", function() {
			window.history.go(-1);
		});
		
		
		// 复制或者移动
	    $("#barCmdCopy").bind("click", function() {
	        art.dialog.data('op','copy');
            art.dialog.open('../my/resourceTypeTree.html', {title: '复制到'});
        });
        
                // 复制或者移动
        $("#A4").bind("click", function() {
            art.dialog.data('op','move');
            art.dialog.open('../my/resourceTypeTree.html', {title: '移动到'})
        });
		
	});
	
