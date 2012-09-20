for(var i = 0; i < 322; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u254', 'pd2u254','none','',500,'none','',500);

	SetPanelState('u109', 'pd4u109','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u210','hidden','none',500);

	SetPanelVisibility('u228','hidden','none',500);

}

});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u36'] = 'center';document.getElementById('u180_img').tabIndex = 0;
HookHover('u180', false);

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u136_img').tabIndex = 0;
HookHover('u136', false);

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u216'] = 'top';u194.tabIndex = 0;

u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u194'] = 'top';
u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
document.getElementById('u152_img').tabIndex = 0;
HookHover('u152', false);

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

	SetPanelVisibility('u228','hidden','fade',500);

}
});
gv_vAlignTable['u60'] = 'center';document.getElementById('u166_img').tabIndex = 0;
HookHover('u166', false);

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u139'] = 'center';u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelVisibility('u228','','fade',500);

	BringToFront("u228");

}
});
gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u1'] = 'center';u215.tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

	SetPanelVisibility('u210','hidden','fade',500);

}
});
gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u193'] = 'top';document.getElementById('u126_img').tabIndex = 0;
HookHover('u126', false);

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u151'] = 'center';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u165'] = 'center';document.getElementById('u138_img').tabIndex = 0;
HookHover('u138', false);

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'top';
u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
u269.tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u269'] = 'top';document.getElementById('u150_img').tabIndex = 0;
HookHover('u150', false);

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
u287.tabIndex = 0;

u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', u287Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u287LinksClick'></div>")
var u287LinksClick = document.getElementById('u287LinksClick');
function u287Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u287LinksClick');
}

InsertBeforeEnd(u287LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u287Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u287Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u287LinksClick');
}

InsertBeforeEnd(u287LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u287Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u287Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u287LinksClick');
}
gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u274'] = 'top';u227.tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

	SetPanelVisibility('u210','hidden','fade',500);

	SetPanelVisibility('u228','','fade',500);

}
});
gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u93'] = 'top';document.getElementById('u112_img').tabIndex = 0;
HookHover('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u285'] = 'top';u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u18'] = 'top';document.getElementById('u162_img').tabIndex = 0;
HookHover('u162', false);

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u79'] = 'center';document.getElementById('u176_img').tabIndex = 0;
HookHover('u176', false);

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u55.tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelState('u50', 'pd0u50','none','',500,'none','',500);

}
});
gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u175'] = 'center';document.getElementById('u148_img').tabIndex = 0;
HookHover('u148', false);

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
document.getElementById('u110_img').tabIndex = 0;
HookHover('u110', false);

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u305'] = 'center';
u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u124_img').tabIndex = 0;
HookHover('u124', false);

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
u279.tabIndex = 0;

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u241'] = 'top';document.getElementById('u160_img').tabIndex = 0;
HookHover('u160', false);

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u123'] = 'center';u278.tabIndex = 0;

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u281'] = 'top';document.getElementById('u122_img').tabIndex = 0;
HookHover('u122', false);

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
document.getElementById('u295_img').tabIndex = 0;

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', u295Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u295LinksClick'></div>")
var u295LinksClick = document.getElementById('u295LinksClick');
function u295Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u295LinksClick');
}

InsertBeforeEnd(u295LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u295Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u295Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u295LinksClick');
}

InsertBeforeEnd(u295LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u295Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u295Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u295LinksClick');
}

InsertBeforeEnd(u295LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u295Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u295Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u295LinksClick');
}
gv_vAlignTable['u19'] = 'top';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelVisibility('u228','hidden','fade',500);

	SetPanelVisibility('u210','','fade',500);

}
});
document.getElementById('u172_img').tabIndex = 0;
HookHover('u172', false);

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u267'] = 'top';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u266'] = 'top';u64.tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u239'] = 'top';document.getElementById('u120_img').tabIndex = 0;
HookHover('u120', false);

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u315'] = 'top';
u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
document.getElementById('u134_img').tabIndex = 0;
HookHover('u134', false);

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u251'] = 'center';document.getElementById('u170_img').tabIndex = 0;
HookHover('u170', false);

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u265'] = 'top';u82.tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	SetPanelState('u77', 'pd0u77','none','',500,'none','',500);

}
});
document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u200.tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

	BringToFront("u210");

}
});
gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u147'] = 'center';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

}
});
gv_vAlignTable['u90'] = 'center';document.getElementById('u164_img').tabIndex = 0;
HookHover('u164', false);

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u95'] = 'center';u255.tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u255'] = 'top';document.getElementById('u146_img').tabIndex = 0;
HookHover('u146', false);

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u125'] = 'center';u263.tabIndex = 0;

u263.style.cursor = 'pointer';
$axure.eventManager.click('u263', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u145'] = 'center';document.getElementById('u118_img').tabIndex = 0;
HookHover('u118', false);

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u262.tabIndex = 0;

u262.style.cursor = 'pointer';
$axure.eventManager.click('u262', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u131'] = 'center';u276.tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u276'] = 'top';document.getElementById('u130_img').tabIndex = 0;
HookHover('u130', false);

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u144_img').tabIndex = 0;
HookHover('u144', false);

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u248'] = 'top';
u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	SetPanelVisibility('u210','hidden','fade',500);

	SetPanelState('u191', 'pd1u191','none','',500,'none','',500);

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u189'] = 'center';document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	SetPanelState('u29', 'pd1u29','none','',500,'none','',500);

}
});
gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u223'] = 'center';document.getElementById('u142_img').tabIndex = 0;
HookHover('u142', false);

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u237'] = 'top';document.getElementById('u156_img').tabIndex = 0;
HookHover('u156', false);

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u155'] = 'center';u209.tabIndex = 0;

u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u209', function(e) {
if (!IsTrueMouseOut('u209',e)) return;
if (true) {

	SetPanelVisibility('u205','hidden','fade',500);

}
});
gv_vAlignTable['u209'] = 'top';u272.tabIndex = 0;

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u235'] = 'top';u208.tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u98'] = 'top';document.getElementById('u158_img').tabIndex = 0;
HookHover('u158', false);

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'center';
u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
u270.tabIndex = 0;

u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u270'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u319'] = 'top';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u102'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	SetPanelState('u50', 'pd1u50','none','',500,'none','',500);

}
});
u300.tabIndex = 0;

u300.style.cursor = 'pointer';
$axure.eventManager.click('u300', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u300'] = 'top';document.getElementById('u116_img').tabIndex = 0;
HookHover('u116', false);

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u233'] = 'top';u247.tabIndex = 0;

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	SetPanelVisibility('u228','hidden','fade',500);

}
});
gv_vAlignTable['u247'] = 'top';
u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u226'] = 'top';
$axure.eventManager.mouseover('u198', function(e) {
if (!IsTrueMouseOver('u198',e)) return;
if (true) {

	SetPanelVisibility('u205','','fade',500);

}
});
gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u313'] = 'top';
u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	SetPanelVisibility('u228','hidden','fade',500);

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u246'] = 'top';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
document.getElementById('u132_img').tabIndex = 0;
HookHover('u132', false);

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u114_img').tabIndex = 0;
HookHover('u114', false);

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u218'] = 'top';u286.tabIndex = 0;

u286.style.cursor = 'pointer';
$axure.eventManager.click('u286', u286Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u286LinksClick'></div>")
var u286LinksClick = document.getElementById('u286LinksClick');
function u286Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u286LinksClick');
}

InsertBeforeEnd(u286LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u286Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u286Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u286LinksClick');
}

InsertBeforeEnd(u286LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u286Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u286Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u286LinksClick');
}
gv_vAlignTable['u286'] = 'top';document.getElementById('u168_img').tabIndex = 0;
HookHover('u168', false);

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u127'] = 'center';document.getElementById('u83_img').tabIndex = 0;

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	SetPanelState('u77', 'pd1u77','none','',500,'none','',500);

}
});
gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u243'] = 'top';u257.tabIndex = 0;

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', u257Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u257LinksClick'></div>")
var u257LinksClick = document.getElementById('u257LinksClick');
function u257Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u257LinksClick');
}

InsertBeforeEnd(u257LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u257Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u257Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u257LinksClick');
}

InsertBeforeEnd(u257LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u257Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u257Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u257LinksClick');
}
gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u289'] = 'top';
u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u291'] = 'top';u256.tabIndex = 0;

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', u256Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u256LinksClick'></div>")
var u256LinksClick = document.getElementById('u256LinksClick');
function u256Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u256LinksClick');
}

InsertBeforeEnd(u256LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u256Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u256Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u256LinksClick');
}

InsertBeforeEnd(u256LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u256Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u256Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u256LinksClick');
}
gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u129'] = 'center';document.getElementById('u174_img').tabIndex = 0;
HookHover('u174', false);

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u10'] = 'top';u288.tabIndex = 0;

u288.style.cursor = 'pointer';
$axure.eventManager.click('u288', u288Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u288LinksClick'></div>")
var u288LinksClick = document.getElementById('u288LinksClick');
function u288Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u288LinksClick');
}

InsertBeforeEnd(u288LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u288Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u288Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u288LinksClick');
}

InsertBeforeEnd(u288LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u288Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u288Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u288LinksClick');
}
gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u197'] = 'center';document.getElementById('u39_img').tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u71'] = 'top';document.getElementById('u128_img').tabIndex = 0;
HookHover('u128', false);

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u204.tabIndex = 0;

u204.style.cursor = 'pointer';
$axure.eventManager.click('u204', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u178_img').tabIndex = 0;
HookHover('u178', false);

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u140_img').tabIndex = 0;
HookHover('u140', false);

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
document.getElementById('u154_img').tabIndex = 0;
HookHover('u154', false);

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u264.tabIndex = 0;

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u84'] = 'center';u258.tabIndex = 0;

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', u258Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u258LinksClick'></div>")
var u258LinksClick = document.getElementById('u258LinksClick');
function u258Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u258LinksClick');
}

InsertBeforeEnd(u258LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u258Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u258Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u258LinksClick');
}

InsertBeforeEnd(u258LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u258Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u258Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u210','','fade',500);

	ToggleLinks(e, 'u258LinksClick');
}
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u320'] = 'top';
u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u217'] = 'top';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	SetPanelState('u191', 'pd0u191','none','',500,'none','',500);

}
});
gv_vAlignTable['u195'] = 'top';
u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

	SetPanelVisibility('u210','hidden','fade',500);

}
});
u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u153'] = 'center';