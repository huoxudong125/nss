for(var i = 0; i < 305; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

	SetPanelState('u168', 'pd4u168','none','',500,'none','',500);

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
gv_vAlignTable['u122'] = 'top';u241.tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u32'] = 'top';
u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u140'] = 'top';
u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u42'] = 'center';document.getElementById('u256_img').tabIndex = 0;

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	SetPanelState('u250', 'pd1u250','none','',500,'none','',500);

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u27'] = 'center';document.getElementById('u235_img').tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelState('u229', 'pd1u229','none','',500,'none','',500);

}
});

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

	SetPanelState('u105', 'pd1u105','none','',500,'none','',500);

}
});

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

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
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u295'] = 'center';document.getElementById('u48_img').tabIndex = 0;
HookHover('u48', false);

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u108'] = 'top';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u292'] = 'center';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelVisibility('u124','hidden','fade',500);

	SetPanelVisibility('u142','','fade',500);

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u21'] = 'center';u200.tabIndex = 0;

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
gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u34'] = 'top';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u89'] = 'center';
u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u47'] = 'center';u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u185'] = 'top';u264.tabIndex = 0;

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u264'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u233'] = 'center';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});

$axure.eventManager.mouseover('u112', function(e) {
if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelVisibility('u119','','fade',500);

}
});
gv_vAlignTable['u44'] = 'top';document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u57'] = 'center';document.getElementById('u283_img').tabIndex = 0;

u283.style.cursor = 'pointer';
$axure.eventManager.click('u283', function(e) {

if (true) {

	SetPanelState('u277', 'pd1u277','none','',500,'none','',500);

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u203'] = 'top';u172.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u231'] = 'center';document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u189'] = 'top';u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u174'] = 'top';document.getElementById('u216_img').tabIndex = 0;

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u265'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u144'] = 'center';u202.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';u282.tabIndex = 0;

u282.style.cursor = 'pointer';
$axure.eventManager.click('u282', function(e) {

if (true) {

	SetPanelState('u277', 'pd0u277','none','',500,'none','',500);

}
});
gv_vAlignTable['u195'] = 'top';u116.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

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
gv_vAlignTable['u123'] = 'top';u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelVisibility('u124','','fade',500);

	BringToFront("u124");

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u157'] = 'top';
u221.style.cursor = 'pointer';
$axure.eventManager.click('u221', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u46_img').tabIndex = 0;
HookHover('u46', false);

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u126'] = 'center';u255.tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	SetPanelState('u250', 'pd0u250','none','',500,'none','',500);

}
});
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u198'] = 'center';
u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u257'] = 'center';u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u169'] = 'top';gv_vAlignTable['u240'] = 'center';document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u298'] = 'top';
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
gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u155'] = 'top';u109.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u239_img').tabIndex = 0;

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u260'] = 'center';
u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
u170.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'top';u177.tabIndex = 0;

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u173'] = 'top';u234.tabIndex = 0;

u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	SetPanelState('u229', 'pd0u229','none','',500,'none','',500);

}
});
gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'top';document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u70_img').tabIndex = 0;
HookHover('u70', false);

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u188'] = 'top';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u284'] = 'center';document.getElementById('u262_img').tabIndex = 0;

u262.style.cursor = 'pointer';
$axure.eventManager.click('u262', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u217'] = 'center';u129.tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u302'] = 'center';u171.tabIndex = 0;

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
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u300'] = 'center';u178.tabIndex = 0;

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
gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u205'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u1'] = 'center';
u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u93'] = 'center';u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

	SetPanelVisibility('u124','','fade',500);

}
});
u201.tabIndex = 0;

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
gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';
u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
u161.tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	SetPanelVisibility('u142','hidden','fade',500);

}
});
gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u79'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

}
});

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u35'] = 'top';u218.tabIndex = 0;

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u194'] = 'top';