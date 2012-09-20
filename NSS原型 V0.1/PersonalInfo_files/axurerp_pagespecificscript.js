for(var i = 0; i < 229; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u174', 'pd4u174','none','',500,'none','',500);

	SetPanelState('u51', 'pd4u51','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u130','hidden','none',500);

	SetPanelVisibility('u148','hidden','none',500);

}

});
u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u32'] = 'top';u207.tabIndex = 0;

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', u207Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u207LinksClick'></div>")
var u207LinksClick = document.getElementById('u207LinksClick');
function u207Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u207LinksClick');
}

InsertBeforeEnd(u207LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u207Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u207Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u207LinksClick');
}

InsertBeforeEnd(u207LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u207Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u207Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u207LinksClick');
}
gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u222'] = 'center';u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

}
});
gv_vAlignTable['u135'] = 'top';
u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	SetPanelVisibility('u148','hidden','fade',500);

}
});
gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u138'] = 'top';document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	SetPanelVisibility('u130','','fade',500);

	BringToFront("u130");

}
});
gv_vAlignTable['u120'] = 'top';
u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	SetPanelVisibility('u148','hidden','fade',500);

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u205'] = 'top';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u34'] = 'top';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'top';u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u184'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u112'] = 'top';document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
u208.tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', u208Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u208LinksClick'></div>")
var u208LinksClick = document.getElementById('u208LinksClick');
function u208Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u208LinksClick');
}

InsertBeforeEnd(u208LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u208Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u208Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u208LinksClick');
}

InsertBeforeEnd(u208LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u208Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u208Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u208LinksClick');
}
gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u172'] = 'top';document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});

$axure.eventManager.mouseover('u118', function(e) {
if (!IsTrueMouseOver('u118',e)) return;
if (true) {

	SetPanelVisibility('u125','','fade',500);

}
});
document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
u189.tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u38'] = 'top';u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', u176Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u176LinksClick'></div>")
var u176LinksClick = document.getElementById('u176LinksClick');
function u176Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u176LinksClick');
}

InsertBeforeEnd(u176LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u176Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u176Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u176LinksClick');
}

InsertBeforeEnd(u176LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u176Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u176Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u176LinksClick');
}
gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u10'] = 'top';document.getElementById('u100_img').tabIndex = 0;
HookHover('u100', false);

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
gv_vAlignTable['u77'] = 'center';
u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

	SetPanelState('u111', 'pd1u111','none','',500,'none','',500);

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u166'] = 'top';document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u195'] = 'top';document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u157'] = 'top';document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u181'] = 'top';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u5'] = 'top';document.getElementById('u98_img').tabIndex = 0;
HookHover('u98', false);

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u193'] = 'top';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u192'] = 'top';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelVisibility('u148','','fade',500);

	BringToFront("u148");

}
});
gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u155'] = 'top';u206.tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', u206Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u206LinksClick'></div>")
var u206LinksClick = document.getElementById('u206LinksClick');
function u206Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u206LinksClick');
}

InsertBeforeEnd(u206LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u206Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u206Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u206LinksClick');
}

InsertBeforeEnd(u206LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u206Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u206Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u206LinksClick');
}
gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u109'] = 'center';document.getElementById('u84_img').tabIndex = 0;
HookHover('u84', false);

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u81'] = 'center';u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', u177Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u177LinksClick'></div>")
var u177LinksClick = document.getElementById('u177LinksClick');
function u177Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u177LinksClick');
}

InsertBeforeEnd(u177LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u177Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u177Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u177LinksClick');
}

InsertBeforeEnd(u177LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u177Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u177Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u177LinksClick');
}
gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u209'] = 'top';u128.tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u128'] = 'top';document.getElementById('u94_img').tabIndex = 0;
HookHover('u94', false);

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u179'] = 'top';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	SetPanelVisibility('u148','hidden','fade',500);

	SetPanelVisibility('u130','','fade',500);

}
});
u147.tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

	SetPanelVisibility('u148','','fade',500);

}
});
gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u19'] = 'center';document.getElementById('u64_img').tabIndex = 0;
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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u188'] = 'top';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u132'] = 'center';u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u175'] = 'top';u129.tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u129', function(e) {
if (!IsTrueMouseOut('u129',e)) return;
if (true) {

	SetPanelVisibility('u125','hidden','fade',500);

}
});
gv_vAlignTable['u129'] = 'top';document.getElementById('u86_img').tabIndex = 0;
HookHover('u86', false);

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u83'] = 'center';u178.tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', u178Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u178LinksClick'></div>")
var u178LinksClick = document.getElementById('u178LinksClick');
function u178Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u178LinksClick');
}

InsertBeforeEnd(u178LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u178Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u178Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u178LinksClick');
}

InsertBeforeEnd(u178LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u178Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u178Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u130','','fade',500);

	ToggleLinks(e, 'u178LinksClick');
}
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'top';document.getElementById('u96_img').tabIndex = 0;
HookHover('u96', false);

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u146'] = 'top';u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u15'] = 'top';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelState('u111', 'pd0u111','none','',500,'none','',500);

}
});
gv_vAlignTable['u115'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u148','hidden','fade',500);

}
});
gv_vAlignTable['u167'] = 'top';
u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

}
});
gv_vAlignTable['u201'] = 'top';u199.tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u59'] = 'center';document.getElementById('u215_img').tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', u215Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u215LinksClick'></div>")
var u215LinksClick = document.getElementById('u215LinksClick');
function u215Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u215LinksClick');
}

InsertBeforeEnd(u215LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u215Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u215Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u215LinksClick');
}

InsertBeforeEnd(u215LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u215Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u215Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u215LinksClick');
}

InsertBeforeEnd(u215LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u215Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u215Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u215LinksClick');
}
gv_vAlignTable['u137'] = 'top';document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('浏览用户.html');

}
});
gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u224'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u194'] = 'top';u182.tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u182'] = 'top';