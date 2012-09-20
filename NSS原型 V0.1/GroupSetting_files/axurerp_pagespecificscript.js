for(var i = 0; i < 252; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u164', 'pd2u164','none','',500,'none','',500);

	SetPanelState('u19', 'pd5u19','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u115','hidden','none',500);

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelVisibility('u138','hidden','none',500);

}

});
gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u241'] = 'top';document.getElementById('u32_img').tabIndex = 0;
HookHover('u32', false);

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u222'] = 'top';
u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	SetPanelVisibility('u120','hidden','fade',500);

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u212'] = 'center';document.getElementById('u42_img').tabIndex = 0;
HookHover('u42', false);

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u55'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u186'] = 'top';document.getElementById('u48_img').tabIndex = 0;
HookHover('u48', false);

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u235'] = 'top';document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
document.getElementById('u20_img').tabIndex = 0;
HookHover('u20', false);

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	SetPanelVisibility('u120','','fade',500);

	BringToFront("u120");

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u6'] = 'top';document.getElementById('u205_img').tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', u205Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u205LinksClick'></div>")
var u205LinksClick = document.getElementById('u205LinksClick');
function u205Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u205LinksClick');
}

InsertBeforeEnd(u205LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u205Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u205Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u205LinksClick');
}

InsertBeforeEnd(u205LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u205Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u205Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u205LinksClick');
}

InsertBeforeEnd(u205LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u205Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u205Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u205LinksClick');
}

$axure.eventManager.mouseover('u108', function(e) {
if (!IsTrueMouseOver('u108',e)) return;
if (true) {

	SetPanelVisibility('u115','','fade',500);

}
});
gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelVisibility('u138','hidden','fade',500);

}
});
gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'top';document.getElementById('u34_img').tabIndex = 0;
HookHover('u34', false);

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u185'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u233'] = 'top';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u112'] = 'top';document.getElementById('u44_img').tabIndex = 0;
HookHover('u44', false);

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u179.tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u57'] = 'center';u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', u197Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u197LinksClick'></div>")
var u197LinksClick = document.getElementById('u197LinksClick');
function u197Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u197Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u197Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u197LinksClick');
}
gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u16'] = 'center';u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	SetPanelVisibility('u120','hidden','fade',500);

}
});
gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u41'] = 'center';u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u149'] = 'top';document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u67'] = 'center';u189.tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u189'] = 'top';document.getElementById('u38_img').tabIndex = 0;
HookHover('u38', false);

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u176'] = 'top';document.getElementById('u26_img').tabIndex = 0;
HookHover('u26', false);

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u174'] = 'top';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u119', function(e) {
if (!IsTrueMouseOut('u119',e)) return;
if (true) {

	SetPanelVisibility('u115','hidden','fade',500);

}
});
gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u23'] = 'center';u166.tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', u166Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u166LinksClick'></div>")
var u166LinksClick = document.getElementById('u166LinksClick');
function u166Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u166LinksClick');
}

InsertBeforeEnd(u166LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u166Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u166Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u166LinksClick');
}

InsertBeforeEnd(u166LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u166Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u166Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u166LinksClick');
}
gv_vAlignTable['u166'] = 'top';document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u75'] = 'center';document.getElementById('u30_img').tabIndex = 0;
HookHover('u30', false);

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u158'] = 'top';document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u33'] = 'center';u157.tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

	SetPanelVisibility('u138','hidden','fade',500);

}
});
gv_vAlignTable['u157'] = 'top';document.getElementById('u46_img').tabIndex = 0;
HookHover('u46', false);

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u126'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u181'] = 'top';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', u198Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u198LinksClick'></div>")
var u198LinksClick = document.getElementById('u198LinksClick');
function u198Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u198LinksClick');
}

InsertBeforeEnd(u198LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u198Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u198Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u198LinksClick');
}

InsertBeforeEnd(u198LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u198Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u198Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u198LinksClick');
}
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'top';document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u187'] = 'top';
u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u138','hidden','fade',500);

}
});
u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', u168Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u168LinksClick'></div>")
var u168LinksClick = document.getElementById('u168LinksClick');
function u168Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u168LinksClick');
}

InsertBeforeEnd(u168LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u168Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u168Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u168LinksClick');
}

InsertBeforeEnd(u168LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u168Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u168Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u168LinksClick');
}
gv_vAlignTable['u168'] = 'top';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
document.getElementById('u40_img').tabIndex = 0;
HookHover('u40', false);

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u109'] = 'top';document.getElementById('u84_img').tabIndex = 0;
HookHover('u84', false);

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u170'] = 'top';document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelVisibility('u120','hidden','fade',500);

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u128'] = 'top';document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u147'] = 'top';u163.tabIndex = 0;

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	SetPanelVisibility('u138','hidden','fade',500);

	SetPanelVisibility('u120','','fade',500);

}
});
gv_vAlignTable['u91'] = 'center';document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
document.getElementById('u70_img').tabIndex = 0;
HookHover('u70', false);

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
document.getElementById('u24_img').tabIndex = 0;
HookHover('u24', false);

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u117'] = 'center';u210.tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u29'] = 'center';u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	SetPanelVisibility('u138','','fade',500);

	BringToFront("u138");

}
});
gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u175'] = 'top';document.getElementById('u86_img').tabIndex = 0;
HookHover('u86', false);

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u183'] = 'top';document.getElementById('u36_img').tabIndex = 0;
HookHover('u36', false);

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'top';u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', u196Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u196LinksClick'></div>")
var u196LinksClick = document.getElementById('u196LinksClick');
function u196Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u196LinksClick');
}

InsertBeforeEnd(u196LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u196Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u196Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u196LinksClick');
}

InsertBeforeEnd(u196LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u196Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u196Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u196LinksClick');
}
gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u124'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u93'] = 'center';u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', u167Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u167LinksClick'></div>")
var u167LinksClick = document.getElementById('u167LinksClick');
function u167Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u167LinksClick');
}

InsertBeforeEnd(u167LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u167Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u167Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u167LinksClick');
}

InsertBeforeEnd(u167LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u167Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u167Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u120','','fade',500);

	ToggleLinks(e, 'u167LinksClick');
}
gv_vAlignTable['u167'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u201'] = 'top';u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u215'] = 'center';u137.tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	SetPanelVisibility('u120','hidden','fade',500);

	SetPanelVisibility('u138','','fade',500);

}
});
document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'center';document.getElementById('u22_img').tabIndex = 0;
HookHover('u22', false);

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u107'] = 'center';u182.tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u218'] = 'center';u180.tabIndex = 0;

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u180'] = 'top';document.getElementById('u28_img').tabIndex = 0;
HookHover('u28', false);

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u194'] = 'center';