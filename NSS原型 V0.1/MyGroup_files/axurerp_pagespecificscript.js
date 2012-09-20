for(var i = 0; i < 181; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u86', 'pd2u86','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u37','hidden','none',500);

	SetPanelVisibility('u42','hidden','none',500);

	SetPanelVisibility('u60','hidden','none',500);

}

});
gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u21'] = 'center';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u42','','fade',500);

	BringToFront("u42");

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u55'] = 'center';u101.tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u105'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u65'] = 'top';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', u120Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u120LinksClick'></div>")
var u120LinksClick = document.getElementById('u120LinksClick');
function u120Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u120LinksClick');
}

InsertBeforeEnd(u120LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u120Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u120Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u120LinksClick');
}

InsertBeforeEnd(u120LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u120Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u120Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u120LinksClick');
}
gv_vAlignTable['u120'] = 'top';document.getElementById('u152_img').tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u58'] = 'top';u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u133'] = 'center';u34.tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u34'] = 'top';u89.tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', u89Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u89LinksClick'></div>")
var u89LinksClick = document.getElementById('u89LinksClick');
function u89Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u89LinksClick');
}

InsertBeforeEnd(u89LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u89Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u89Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u89LinksClick');
}

InsertBeforeEnd(u89LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u89Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u89Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u89LinksClick');
}
gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u39'] = 'center';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelVisibility('u42','hidden','fade',500);

}
});
gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u78'] = 'top';
u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelVisibility('u42','hidden','fade',500);

}
});
u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', u119Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u119LinksClick'></div>")
var u119LinksClick = document.getElementById('u119LinksClick');
function u119Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u119LinksClick');
}

InsertBeforeEnd(u119LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u119Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u119Clicku26dd11497c534e88a2307f4797a5266d(e)
{

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	ToggleLinks(e, 'u119LinksClick');
}

InsertBeforeEnd(u119LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u119Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u119Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u119LinksClick');
}
gv_vAlignTable['u119'] = 'top';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u41', function(e) {
if (!IsTrueMouseOut('u41',e)) return;
if (true) {

	SetPanelVisibility('u37','hidden','fade',500);

}
});
gv_vAlignTable['u41'] = 'top';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', u118Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u118LinksClick'></div>")
var u118LinksClick = document.getElementById('u118LinksClick');
function u118Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u118LinksClick');
}

InsertBeforeEnd(u118LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u118Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u118Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u118LinksClick');
}

InsertBeforeEnd(u118LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u118Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u118Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u118LinksClick');
}
gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u67'] = 'top';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u128'] = 'center';u85.tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

	SetPanelVisibility('u42','','fade',500);

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u144'] = 'top';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});

$axure.eventManager.mouseover('u30', function(e) {
if (!IsTrueMouseOver('u30',e)) return;
if (true) {

	SetPanelVisibility('u37','','fade',500);

}
});
u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u116'] = 'center';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', u88Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u88LinksClick'></div>")
var u88LinksClick = document.getElementById('u88LinksClick');
function u88Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u88LinksClick');
}

InsertBeforeEnd(u88LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u88Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u88Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u88LinksClick');
}

InsertBeforeEnd(u88LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u88Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u88Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u88LinksClick');
}
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u114'] = 'top';u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelVisibility('u60','','fade',500);

	BringToFront("u60");

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u98'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

}
});
gv_vAlignTable['u79'] = 'top';document.getElementById('u127_img').tabIndex = 0;

u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', u127Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u127LinksClick'></div>")
var u127LinksClick = document.getElementById('u127LinksClick');
function u127Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u127LinksClick');
}

InsertBeforeEnd(u127LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u127Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u127Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u127LinksClick');
}

InsertBeforeEnd(u127LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u127Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u127Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u127LinksClick');
}

InsertBeforeEnd(u127LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u127Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u127Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u127LinksClick');
}

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	SetPanelVisibility('u42','hidden','fade',500);

	SetPanelState('u23', 'pd1u23','none','',500,'none','',500);

}
});
gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u106'] = 'top';u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u168'] = 'top';u154.tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u154'] = 'top';u40.tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u40'] = 'top';u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
gv_vAlignTable['u139'] = 'top';u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u87'] = 'top';u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u177'] = 'top';u94.tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u94'] = 'top';u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u91'] = 'top';
u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u173'] = 'top';u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u171'] = 'top';
u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u8'] = 'top';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u25'] = 'top';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelVisibility('u42','hidden','fade',500);

	SetPanelVisibility('u60','','fade',500);

}
});
document.getElementById('u137_img').tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMain.html');

}
});
u90.tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', u90Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u90LinksClick'></div>")
var u90LinksClick = document.getElementById('u90LinksClick');
function u90Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u90LinksClick');
}

InsertBeforeEnd(u90LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u90Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u90Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u90LinksClick');
}

InsertBeforeEnd(u90LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u90Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u90Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u42','','fade',500);

	ToggleLinks(e, 'u90LinksClick');
}
gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u180'] = 'center';