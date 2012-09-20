for(var i = 0; i < 202; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u16','hidden','none',500);

	SetPanelVisibility('u60','hidden','none',500);

	SetPanelState('u156', 'pd4u156','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u107','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

	SetPanelVisibility('u130','hidden','none',500);

}

});
HookHover('u32', false);
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u135'] = 'top';HookHover('u42', false);
gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u186'] = 'center';
u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	SetPanelVisibility('u60','','fade',500);

}
});
gv_vAlignTable['u48'] = 'center';HookHover('u27', false);
HookHover('u52', false);
HookHover('u20', false);
u65.tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

}
});
gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u120'] = 'top';u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u6'] = 'top';HookHover('u37', false);
u159.tabIndex = 0;

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', u159Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u159LinksClick'></div>")
var u159LinksClick = document.getElementById('u159LinksClick');
function u159Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u159LinksClick');
}

InsertBeforeEnd(u159LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u159Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u159Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u159LinksClick');
}

InsertBeforeEnd(u159LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u159Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u159Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u159LinksClick');
}
gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u75'] = 'center';
u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

}
});
gv_vAlignTable['u200'] = 'center';HookHover('u34', false);
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u89'] = 'center';HookHover('u39', false);
u157.tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u157'] = 'top';HookHover('u47', false);
gv_vAlignTable['u184'] = 'top';u103.tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	SetPanelVisibility('u130','','fade',500);

	BringToFront("u130");

}
});
gv_vAlignTable['u103'] = 'top';u164.tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u66'] = 'top';HookHover('u44', false);
gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u57'] = 'top';document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', u197Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u197LinksClick'></div>")
var u197LinksClick = document.getElementById('u197LinksClick');
function u197Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u197Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u197Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u197Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u197LinksClick');
}
gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u172'] = 'top';u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

}
});
gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u118'] = 'top';u189.tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', u189Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u189LinksClick'></div>")
var u189LinksClick = document.getElementById('u189LinksClick');
function u189Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u189LinksClick');
}

InsertBeforeEnd(u189LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u189Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u189Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u189LinksClick');
}

InsertBeforeEnd(u189LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u189Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u189Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u189LinksClick');
}
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u26'] = 'center';u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u10'] = 'top';
$axure.eventManager.mouseover('u100', function(e) {
if (!IsTrueMouseOver('u100',e)) return;
if (true) {

	SetPanelVisibility('u107','','fade',500);

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u116'] = 'top';u158.tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', u158Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u158LinksClick'></div>")
var u158LinksClick = document.getElementById('u158LinksClick');
function u158Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u158LinksClick');
}

InsertBeforeEnd(u158LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u158Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u158Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u158LinksClick');
}

InsertBeforeEnd(u158LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u158Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u158Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u158LinksClick');
}
gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'center';u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', u160Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u160LinksClick'></div>")
var u160LinksClick = document.getElementById('u160LinksClick');
function u160Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u160LinksClick');
}

InsertBeforeEnd(u160LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u160Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u160Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u160LinksClick');
}

InsertBeforeEnd(u160LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u160Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u160Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u160LinksClick');
}
gv_vAlignTable['u160'] = 'top';u166.tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u46'] = 'center';
u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	SetPanelVisibility('u112','hidden','fade',500);

	SetPanelState('u93', 'pd1u93','none','',500,'none','',500);

}
});
u181.tabIndex = 0;

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'center';
u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

	SetPanelVisibility('u112','hidden','fade',500);

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'top';u56.tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	SetPanelVisibility('u16','hidden','fade',500);

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u187'] = 'top';u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u193'] = 'top';u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u192'] = 'top';u155.tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

	SetPanelVisibility('u112','','fade',500);

}
});
gv_vAlignTable['u109'] = 'center';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	SetPanelState('u93', 'pd0u93','none','',500,'none','',500);

}
});
gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u170'] = 'top';
u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelVisibility('u130','hidden','fade',500);

}
});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u94'] = 'top';u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', u190Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u190LinksClick'></div>")
var u190LinksClick = document.getElementById('u190LinksClick');
function u190Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u190LinksClick');
}

InsertBeforeEnd(u190LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u190Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u190Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u190LinksClick');
}

InsertBeforeEnd(u190LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u190Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u190Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u190LinksClick');
}
gv_vAlignTable['u190'] = 'top';u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	SetPanelVisibility('u112','','fade',500);

	BringToFront("u112");

}
});
gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u9'] = 'top';
u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	SetPanelVisibility('u60','hidden','fade',500);

}
});
gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u24'] = 'center';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', u188Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u188LinksClick'></div>")
var u188LinksClick = document.getElementById('u188LinksClick');
function u188Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u188LinksClick');
}

InsertBeforeEnd(u188LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u188Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u188Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u188LinksClick');
}

InsertBeforeEnd(u188LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u188Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u188Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u112','','fade',500);

	ToggleLinks(e, 'u188LinksClick');
}
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u162'] = 'top';u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	SetPanelVisibility('u112','hidden','fade',500);

}
});
gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u175'] = 'top';u129.tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	SetPanelVisibility('u112','hidden','fade',500);

	SetPanelVisibility('u130','','fade',500);

}
});
gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u173'] = 'top';u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u111', function(e) {
if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelVisibility('u107','hidden','fade',500);

}
});
gv_vAlignTable['u111'] = 'top';u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u31'] = 'center';u178.tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'top';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u96'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelVisibility('u16','','fade',500);

}
});
HookHover('u49', false);
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u167'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u12'] = 'top';u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u165'] = 'top';HookHover('u25', false);

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelVisibility('u16','hidden','fade',500);

}
});
gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u182'] = 'top';u180.tabIndex = 0;

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u3'] = 'top';