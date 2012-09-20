for(var i = 0; i < 288; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u129', 'pd1u129','none','',500,'none','',500);

	SetPanelVisibility('u210','hidden','none',500);

}

if (true) {

	SetPanelVisibility('u80','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u103','hidden','none',500);

}

});
u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelVisibility('u103','hidden','fade',500);

}
});
gv_vAlignTable['u122'] = 'top';HookHover('u21', false);
u132.tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', u132Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u132LinksClick'></div>")
var u132LinksClick = document.getElementById('u132LinksClick');
function u132Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u132LinksClick');
}

InsertBeforeEnd(u132LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u132Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u132Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u132LinksClick');
}

InsertBeforeEnd(u132LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u132Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u132Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u132LinksClick');
}
gv_vAlignTable['u132'] = 'top';u137.tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u207'] = 'top';u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u130'] = 'top';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

	SetPanelVisibility('u85','hidden','fade',500);

	SetPanelState('u66', 'pd1u66','none','',500,'none','',500);

}
});
gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u17'] = 'center';u131.tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', u131Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u131LinksClick'></div>")
var u131LinksClick = document.getElementById('u131LinksClick');
function u131Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u131LinksClick');
}

InsertBeforeEnd(u131LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u131Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u131Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u131LinksClick');
}

InsertBeforeEnd(u131LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u131Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u131Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u131LinksClick');
}
gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u159'] = 'center';u229.tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u110'] = 'top';u163.tabIndex = 0;

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', u163Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u163LinksClick'></div>")
var u163LinksClick = document.getElementById('u163LinksClick');
function u163Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u163LinksClick');
}

InsertBeforeEnd(u163LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u163Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u163Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u163LinksClick');
}

InsertBeforeEnd(u163LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u163Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u163Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u163LinksClick');
}
gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u108'] = 'top';HookHover('u16', false);
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u62'] = 'center';HookHover('u11', false);
u75.tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	SetPanelVisibility('u85','','fade',500);

	BringToFront("u85");

}
});
gv_vAlignTable['u75'] = 'top';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', u133Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u133LinksClick'></div>")
var u133LinksClick = document.getElementById('u133LinksClick');
function u133Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u133LinksClick');
}

InsertBeforeEnd(u133LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u133Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u133Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u133LinksClick');
}

InsertBeforeEnd(u133LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u133Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u133Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u133LinksClick');
}
gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u266'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u72'] = 'center';u258.tabIndex = 0;

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u149'] = 'top';HookHover('u31', false);
gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u231'] = 'top';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u191'] = 'top';u161.tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', u161Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u161LinksClick'></div>")
var u161LinksClick = document.getElementById('u161LinksClick');
function u161Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u161LinksClick');
}

InsertBeforeEnd(u161LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u161Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u161Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u161LinksClick');
}

InsertBeforeEnd(u161LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u161Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u161Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u161LinksClick');
}
gv_vAlignTable['u161'] = 'top';HookHover('u6', false);
HookHover('u41', false);
u246.tabIndex = 0;

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u208'] = 'top';u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u67'] = 'top';HookHover('u38', false);
gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u267'] = 'top';HookHover('u26', false);
gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u249'] = 'top';u241.tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u10'] = 'center';u265.tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u265'] = 'top';
u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	SetPanelVisibility('u85','hidden','fade',500);

}
});
u77.tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u77'] = 'top';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u82'] = 'center';HookHover('u36', false);
gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u114'] = 'top';HookHover('u33', false);
gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u98'] = 'center';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u150'] = 'top';HookHover('u28', false);
gv_vAlignTable['u74'] = 'top';u151.tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u151'] = 'top';
u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	SetPanelVisibility('u103','hidden','fade',500);

}
});
gv_vAlignTable['u40'] = 'center';u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u193'] = 'top';gv_vAlignTable['u269'] = 'top';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u250'] = 'top';u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	SetPanelVisibility('u85','hidden','fade',500);

	SetPanelVisibility('u103','','fade',500);

}
});
gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u206'] = 'top';u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u84', function(e) {
if (!IsTrueMouseOut('u84',e)) return;
if (true) {

	SetPanelVisibility('u80','hidden','fade',500);

}
});
gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u50'] = 'top';document.getElementById('u170_img').tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', u170Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u170LinksClick'></div>")
var u170LinksClick = document.getElementById('u170LinksClick');
function u170Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u170LinksClick');
}

InsertBeforeEnd(u170LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u170Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u170Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u170LinksClick');
}

InsertBeforeEnd(u170LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u170Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u170Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u170LinksClick');
}

InsertBeforeEnd(u170LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u170Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u170Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u170LinksClick');
}
u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelVisibility('u103','','fade',500);

	BringToFront("u103");

}
});
gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u209'] = 'top';u128.tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	SetPanelVisibility('u103','hidden','fade',500);

	SetPanelVisibility('u85','','fade',500);

}
});
gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u185'] = 'center';
$axure.eventManager.mouseover('u73', function(e) {
if (!IsTrueMouseOver('u73',e)) return;
if (true) {

	SetPanelVisibility('u80','','fade',500);

}
});
u270.tabIndex = 0;

u270.style.cursor = 'pointer';
$axure.eventManager.click('u270', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u270'] = 'top';u234.tabIndex = 0;

u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u234'] = 'top';u147.tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u64'] = 'center';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	SetPanelState('u66', 'pd0u66','none','',500,'none','',500);

}
});
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u230'] = 'top';u162.tabIndex = 0;

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', u162Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u162LinksClick'></div>")
var u162LinksClick = document.getElementById('u162LinksClick');
function u162Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u162LinksClick');
}

InsertBeforeEnd(u162LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u162Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u162Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u162LinksClick');
}

InsertBeforeEnd(u162LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u162Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u162Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u85','','fade',500);

	ToggleLinks(e, 'u162LinksClick');
}
gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u204'] = 'center';HookHover('u13', false);
gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u262'] = 'top';document.getElementById('u175_img').tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Recycling.html');

}
});
u217.tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('OuterChainView.html'), "");

}
});
gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u171'] = 'center';u154.tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u232'] = 'top';u83.tabIndex = 0;

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u83'] = 'top';u222.tabIndex = 0;

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelVisibility('u210','','fade',500);

}
});
gv_vAlignTable['u222'] = 'top';document.getElementById('u178_img').tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u15'] = 'center';u144.tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u1'] = 'center';u138.tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u93'] = 'top';HookHover('u23', false);
u145.tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u244'] = 'top';u90.tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	SetPanelVisibility('u85','hidden','fade',500);

}
});
gv_vAlignTable['u90'] = 'top';HookHover('u18', false);
gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u220'] = 'top';
u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	SetPanelVisibility('u103','hidden','fade',500);

}
});
gv_vAlignTable['u35'] = 'center';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u194'] = 'top';