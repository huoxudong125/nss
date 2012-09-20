// 复制和移动 tree
$(document).ready(function() {
    $("#rtcontainer").jstree({
        "plugins" : ["themes", "json_data", "ui"],
        "themes" : {
            "theme" : "apple",
            "dots" : true,
            "icons" : true
        },
        "core" : { "initially_open" : [ "-1" ] }, 
        "json_data" : {
            "data" : {
                "data" : "我的文件",
                "attr" : { 
                    "id" : -1
                },
                "state" : "closed" 
            },
            "ajax":{
                "url":"/nss/feipan/ajaxFileTree.action",
                "data":function(n){
                    return {
                        "id" : n.attr ? n.attr("id") : -1
                    }
                }
            }

        }
    })
    .bind("copy.jstree",function(e,data){
        alert("copy"+data.rslt.obj.attr("id"));
    })
    .bind("move.jstree",function(e,data){
        alert("move" +data.rslt.obj.attr("id"));
    });
    
         var parent = art.dialog.parent,   // 父页面window对象
         api = art.dialog.open.api;  //art.dialog.open扩展方法 
         var op, title;
         if (art.dialog.data('op'))
         {
             op=art.dialog.data('op');
             if(op=="copy")
             {
                 title="复制到";
             }
             else{
                 title="移动到";
             }
         };
           
         api.title(title).button(
                    {
                        name: "新建文件夹",
                    },
                    {
                        name: "确定",
                        callback:function(){
                            $("#rtcontainer").jstree(op); // 触发
                            },
                        focus:true
                    },
                    {
                        name: "取消",
                    }

                );
})
