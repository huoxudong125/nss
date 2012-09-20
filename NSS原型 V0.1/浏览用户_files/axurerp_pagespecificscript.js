for(var i = 0; i < 298; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

	SetPanelState('u251', 'pd4u251','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u202','hidden','none',500);

	SetPanelVisibility('u207','hidden','none',500);

	SetPanelVisibility('u225','hidden','none',500);

}

});
gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u132'] = 'center';document.getElementById('u137_img').tabIndex = 0;
HookHover('u137', false);

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u243'] = 'top';document.getElementById('u165_img').tabIndex = 0;
HookHover('u165', false);

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u140'] = 'center';document.getElementById('u131_img').tabIndex = 0;
HookHover('u131', false);

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u135_img').tabIndex = 0;
HookHover('u135', false);

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
u212.tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	SetPanelVisibility('u207','hidden','fade',500);

}
});
gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u265'] = 'top';document.getElementById('u159_img').tabIndex = 0;
HookHover('u159', false);

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	SetPanelVisibility('u225','hidden','fade',500);

}
});
gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u52'] = 'top';
u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u110'] = 'top';u205.tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u62'] = 'top';document.getElementById('u292_img').tabIndex = 0;

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', u292Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u292LinksClick'></div>")
var u292LinksClick = document.getElementById('u292LinksClick');
function u292Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u292LinksClick');
}

InsertBeforeEnd(u292LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u292Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u292Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u292LinksClick');
}

InsertBeforeEnd(u292LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u292Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u292Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u292LinksClick');
}

InsertBeforeEnd(u292LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u292Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u292Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u292LinksClick');
}
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u75'] = 'top';document.getElementById('u133_img').tabIndex = 0;
HookHover('u133', false);

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u143_img').tabIndex = 0;
HookHover('u143', false);

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u176'] = 'center';document.getElementById('u157_img').tabIndex = 0;
HookHover('u157', false);

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u72'] = 'top';
u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u78'] = 'top';u276.tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u57'] = 'top';u283.tabIndex = 0;

u283.style.cursor = 'pointer';
$axure.eventManager.click('u283', u283Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u283LinksClick'></div>")
var u283LinksClick = document.getElementById('u283LinksClick');
function u283Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u283LinksClick');
}

InsertBeforeEnd(u283LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u283Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u283Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u283LinksClick');
}

InsertBeforeEnd(u283LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u283Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u283Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u283LinksClick');
}
gv_vAlignTable['u283'] = 'top';u284.tabIndex = 0;

u284.style.cursor = 'pointer';
$axure.eventManager.click('u284', u284Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u284LinksClick'></div>")
var u284LinksClick = document.getElementById('u284LinksClick');
function u284Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u284LinksClick');
}

InsertBeforeEnd(u284LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u284Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u284Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u284LinksClick');
}

InsertBeforeEnd(u284LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u284Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u284Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u284LinksClick');
}
gv_vAlignTable['u284'] = 'top';u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelVisibility('u207','','fade',500);

	BringToFront("u207");

}
});
gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u172'] = 'center';document.getElementById('u149_img').tabIndex = 0;
HookHover('u149', false);

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u54'] = 'top';
$axure.eventManager.mouseover('u195', function(e) {
if (!IsTrueMouseOver('u195',e)) return;
if (true) {

	SetPanelVisibility('u202','','fade',500);

}
});
gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u174'] = 'center';u254.tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', u254Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u254LinksClick'></div>")
var u254LinksClick = document.getElementById('u254LinksClick');
function u254Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u254LinksClick');
}

InsertBeforeEnd(u254LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u254Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u254Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u254LinksClick');
}

InsertBeforeEnd(u254LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u254Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u254Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u254LinksClick');
}
gv_vAlignTable['u254'] = 'top';
u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u249'] = 'top';u252.tabIndex = 0;

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u10'] = 'top';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

}
});
document.getElementById('u153_img').tabIndex = 0;
HookHover('u153', false);

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u166'] = 'center';
u221.style.cursor = 'pointer';
$axure.eventManager.click('u221', function(e) {

if (true) {

	SetPanelVisibility('u207','hidden','fade',500);

	SetPanelState('u188', 'pd1u188','none','',500,'none','',500);

}
});
gv_vAlignTable['u46'] = 'top';u255.tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', u255Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u255LinksClick'></div>")
var u255LinksClick = document.getElementById('u255LinksClick');
function u255Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u255LinksClick');
}

InsertBeforeEnd(u255LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u255Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u255Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u255LinksClick');
}

InsertBeforeEnd(u255LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u255Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u255Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u255LinksClick');
}
gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u71'] = 'top';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	SetPanelVisibility('u225','','fade',500);

	BringToFront("u225");

}
});
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u43'] = 'top';u266.tabIndex = 0;

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u266'] = 'top';document.getElementById('u169_img').tabIndex = 0;
HookHover('u169', false);

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u187'] = 'top';document.getElementById('u151_img').tabIndex = 0;
HookHover('u151', false);

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u227'] = 'center';document.getElementById('u139_img').tabIndex = 0;
HookHover('u139', false);

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u104'] = 'top';u269.tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u269'] = 'top';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	SetPanelState('u188', 'pd0u188','none','',500,'none','',500);

}
});
gv_vAlignTable['u192'] = 'top';u259.tabIndex = 0;

u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u259'] = 'top';u250.tabIndex = 0;

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	SetPanelVisibility('u225','hidden','fade',500);

	SetPanelVisibility('u207','','fade',500);

}
});
gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u164'] = 'center';u206.tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u206', function(e) {
if (!IsTrueMouseOut('u206',e)) return;
if (true) {

	SetPanelVisibility('u202','hidden','fade',500);

}
});
gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u293'] = 'center';u260.tabIndex = 0;

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u260'] = 'top';u273.tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u170'] = 'center';
u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u146'] = 'center';
u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

	SetPanelVisibility('u225','hidden','fade',500);

}
});
document.getElementById('u177_img').tabIndex = 0;
HookHover('u177', false);

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
gv_vAlignTable['u209'] = 'center';
u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u270'] = 'top';gv_vAlignTable['u234'] = 'top';document.getElementById('u147_img').tabIndex = 0;
HookHover('u147', false);

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
document.getElementById('u163_img').tabIndex = 0;
HookHover('u163', false);

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u277'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u148'] = 'center';u261.tabIndex = 0;

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u261'] = 'top';document.getElementById('u141_img').tabIndex = 0;
HookHover('u141', false);

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u262'] = 'top';document.getElementById('u175_img').tabIndex = 0;
HookHover('u175', false);

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Attentions.html');

}
});
document.getElementById('u129_img').tabIndex = 0;
HookHover('u129', false);

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u86'] = 'top';
u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
u267.tabIndex = 0;

u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u267'] = 'top';
u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
u285.tabIndex = 0;

u285.style.cursor = 'pointer';
$axure.eventManager.click('u285', u285Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u285LinksClick'></div>")
var u285LinksClick = document.getElementById('u285LinksClick');
function u285Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u285LinksClick');
}

InsertBeforeEnd(u285LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u285Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u285Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u285LinksClick');
}

InsertBeforeEnd(u285LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u285Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u285Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u285LinksClick');
}
gv_vAlignTable['u285'] = 'top';document.getElementById('u171_img').tabIndex = 0;
HookHover('u171', false);

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u194'] = 'center';
u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelVisibility('u207','hidden','fade',500);

}
});
u275.tabIndex = 0;

u275.style.cursor = 'pointer';
$axure.eventManager.click('u275', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u15'] = 'top';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u138'] = 'center';document.getElementById('u167_img').tabIndex = 0;
HookHover('u167', false);

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u142'] = 'center';document.getElementById('u155_img').tabIndex = 0;
HookHover('u155', false);

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
gv_vAlignTable['u93'] = 'top';document.getElementById('u145_img').tabIndex = 0;
HookHover('u145', false);

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Fans.html');

}
});
u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
u199.tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u281'] = 'center';document.getElementById('u173_img').tabIndex = 0;
HookHover('u173', false);

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u118'] = 'top';u244.tabIndex = 0;

u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

	SetPanelVisibility('u225','hidden','fade',500);

}
});
gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u248'] = 'center';document.getElementById('u161_img').tabIndex = 0;
HookHover('u161', false);

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ShareAll.html');

}
});
u224.tabIndex = 0;

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	SetPanelVisibility('u207','hidden','fade',500);

	SetPanelVisibility('u225','','fade',500);

}
});
gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u77'] = 'top';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', u253Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u253LinksClick'></div>")
var u253LinksClick = document.getElementById('u253LinksClick');
function u253Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u253LinksClick');
}

InsertBeforeEnd(u253LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u253Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u253Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u253LinksClick');
}

InsertBeforeEnd(u253LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u253Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u253Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u207','','fade',500);

	ToggleLinks(e, 'u253LinksClick');
}
gv_vAlignTable['u253'] = 'top';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u180'] = 'center';u191.tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u191'] = 'top';