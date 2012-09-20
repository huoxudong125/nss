<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<style>table img
{
 cursor:pointer;
}
</style>

<div style="text-align:right; padding-right:20px; padding-top:20px;background:none; height:22px;font-size:12px;position: relative; float:right; ">
[总计:${pageInfo.resultCount}条]第${pageInfo.page}页/共${pageInfo.totalPage}页 | 
<img src="${base}/common/images/navLeft.gif" onclick="JavaScript:goPage('1');" width="14" height="16" title="第一页"/>
<img src="${base}/common/images/left.gif" onclick="JavaScript:goPage('${pageInfo.previousPage}');" width="16" height="16" title="上一页" />
<img src="${base}/common/images/right.gif"  onclick="JavaScript:goPage('${pageInfo.nextPage}');" width="16" height="16"  title="下一页"/>
<img src="${base}/common/images/navRight.gif"  onclick="JavaScript:goPage('${pageInfo.totalPage}');" width="14" height="16"  title="最后一页" />
<input type="text" id="toPage" name="toPage" size="3" style="width:25px;" maxlength="9"/>
<input type="button" class="button" value="GO" onclick="JavaScript:goPage($('#toPage').val());" onmouseover="this.className='buttonhover'" onmouseout="this.className='button'"/>
</div>
