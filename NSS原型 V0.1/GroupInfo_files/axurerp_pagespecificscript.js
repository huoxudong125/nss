for(var i = 0; i < 247; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u23', 'pd2u23','none','',500,'none','',500);

	SetPanelState('u168', 'pd2u168','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u119','hidden','none',500);

	SetPanelVisibility('u124','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

}

});
u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u122'] = 'top';document.getElementById('u32_img').tabIndex = 0;
HookHover('u32', false);

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u212'] = 'center';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u186'] = 'top';document.getElementById('u48_img').tabIndex = 0;
HookHover('u48', false);

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u27'] = 'center';
u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

	SetPanelState('u105', 'pd1u105','none','',500,'none','',500);

}
});
document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u20'] = 'center';document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u205'] = 'top';u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u238'] = 'top';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

	SetPanelVisibility('u142','','fade',500);

}
});
u200.tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', u200Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u200LinksClick'></div>")
var u200LinksClick = document.getElementById('u200LinksClick');
function u200Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u200LinksClick');
}

InsertBeforeEnd(u200LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u200Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u200Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u200LinksClick');
}

InsertBeforeEnd(u200LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u200Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u200Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u200LinksClick');
}
gv_vAlignTable['u200'] = 'top';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u47'] = 'center';u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u185'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u233'] = 'top';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u214.tabIndex = 0;

u214.style.cursor = 'pointer';
$axure.eventManager.click('u214', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u214'] = 'top';
$axure.eventManager.mouseover('u112', function(e) {
if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelVisibility('u119','','fade',500);

}
});
document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u41'] = 'center';u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', u172Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u172LinksClick'></div>")
var u172LinksClick = document.getElementById('u172LinksClick');
function u172Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u172LinksClick');
}

InsertBeforeEnd(u172LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u172Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u172Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u172LinksClick');
}

InsertBeforeEnd(u172LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u172Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u172Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u172LinksClick');
}
gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u149'] = 'top';document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u189'] = 'top';document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u176'] = 'top';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u144'] = 'center';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', u202Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u202LinksClick'></div>")
var u202LinksClick = document.getElementById('u202LinksClick');
function u202Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u202LinksClick');
}

InsertBeforeEnd(u202LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u202Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u202Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u202LinksClick');
}

InsertBeforeEnd(u202LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u202Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u202Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u202LinksClick');
}
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u166'] = 'top';document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u195'] = 'top';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u116'] = 'top';document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
u123.tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u123', function(e) {
if (!IsTrueMouseOut('u123',e)) return;
if (true) {

	SetPanelVisibility('u119','hidden','fade',500);

}
});
gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u223'] = 'top';u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelVisibility('u124','','fade',500);

	BringToFront("u124");

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u157'] = 'top';document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
document.getElementById('u46_img').tabIndex = 0;
HookHover('u46', false);

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u43'] = 'center';u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u169'] = 'top';gv_vAlignTable['u240'] = 'top';document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u106'] = 'top';document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u227'] = 'top';
u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';u193.tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u193'] = 'top';gv_vAlignTable['u104'] = 'top';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u155'] = 'top';u109.tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	SetPanelState('u105', 'pd0u105','none','',500,'none','',500);

}
});
gv_vAlignTable['u109'] = 'top';document.getElementById('u84_img').tabIndex = 0;
HookHover('u84', false);

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';u170.tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', u170Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u170LinksClick'></div>")
var u170LinksClick = document.getElementById('u170LinksClick');
function u170Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u170LinksClick');
}

InsertBeforeEnd(u170LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u170Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u170Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u170LinksClick');
}

InsertBeforeEnd(u170LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u170Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u170Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u170LinksClick');
}
gv_vAlignTable['u170'] = 'top';document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'top';u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u177'] = 'top';document.getElementById('u209_img').tabIndex = 0;

u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', u209Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u209LinksClick'></div>")
var u209LinksClick = document.getElementById('u209LinksClick');
function u209Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u209LinksClick');
}

InsertBeforeEnd(u209LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u209Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u209Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u209LinksClick');
}

InsertBeforeEnd(u209LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u209Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u209Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u209LinksClick');
}

InsertBeforeEnd(u209LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u209Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u209Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u209LinksClick');
}
gv_vAlignTable['u128'] = 'top';document.getElementById('u94_img').tabIndex = 0;
HookHover('u94', false);

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u242'] = 'center';document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u70_img').tabIndex = 0;
HookHover('u70', false);

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u24_img').tabIndex = 0;
HookHover('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u175'] = 'top';u129.tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

}
});
gv_vAlignTable['u129'] = 'top';document.getElementById('u86_img').tabIndex = 0;
HookHover('u86', false);

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u183'] = 'top';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u39'] = 'center';u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', u171Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u171LinksClick'></div>")
var u171LinksClick = document.getElementById('u171LinksClick');
function u171Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u171LinksClick');
}

InsertBeforeEnd(u171LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u171Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u171Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u171LinksClick');
}

InsertBeforeEnd(u171LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u171Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u171Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u171LinksClick');
}
gv_vAlignTable['u171'] = 'top';
u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

}
});
gv_vAlignTable['u83'] = 'center';u178.tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'top';
u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

}
});
gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u49'] = 'center';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelVisibility('u142','','fade',500);

	BringToFront("u142");

}
});
gv_vAlignTable['u115'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u93'] = 'center';u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

	SetPanelVisibility('u124','','fade',500);

}
});
gv_vAlignTable['u237'] = 'top';u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', u201Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u201LinksClick'></div>")
var u201LinksClick = document.getElementById('u201LinksClick');
function u201Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u201LinksClick');
}

InsertBeforeEnd(u201LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u201Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u201Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u201LinksClick');
}

InsertBeforeEnd(u201LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u201Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u201Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u124','','fade',500);

	ToggleLinks(e, 'u201LinksClick');
}
gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u161.tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

}
});
gv_vAlignTable['u161'] = 'top';document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u180'] = 'top';document.getElementById('u28_img').tabIndex = 0;
HookHover('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u194'] = 'top';