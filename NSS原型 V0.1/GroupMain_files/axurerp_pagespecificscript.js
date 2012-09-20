for(var i = 0; i < 337; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u194', 'pd2u194','none','',500,'none','',500);

}

if (true) {

	SetPanelVisibility('u145','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u168','hidden','none',500);

}

});
u167.tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u150','hidden','fade',500);

	SetPanelVisibility('u168','','fade',500);

}
});
gv_vAlignTable['u299'] = 'top';gv_vAlignTable['u36'] = 'top';u216.tabIndex = 0;

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u216'] = 'top';document.getElementById('u72_img').tabIndex = 0;
HookHover('u72', false);

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u333'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u231'] = 'top';document.getElementById('u60_img').tabIndex = 0;
HookHover('u60', false);

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
document.getElementById('u78_img').tabIndex = 0;
HookHover('u78', false);

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'top';u193.tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	SetPanelVisibility('u168','hidden','fade',500);

	SetPanelVisibility('u150','','fade',500);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u71'] = 'center';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u26'] = 'top';
u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	SetPanelVisibility('u150','hidden','fade',500);

}
});

$axure.eventManager.mouseover('u138', function(e) {
if (!IsTrueMouseOver('u138',e)) return;
if (true) {

	SetPanelVisibility('u145','','fade',500);

}
});
document.getElementById('u100_img').tabIndex = 0;
HookHover('u100', false);

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
document.getElementById('u54_img').tabIndex = 0;
HookHover('u54', false);

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u269'] = 'top';gv_vAlignTable['u331'] = 'top';gv_vAlignTable['u321'] = 'top';gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u24'] = 'top';document.getElementById('u80_img').tabIndex = 0;
HookHover('u80', false);

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u318'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u330'] = 'top';u227.tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', u227Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u227LinksClick'></div>")
var u227LinksClick = document.getElementById('u227LinksClick');
function u227Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u227LinksClick');
}

InsertBeforeEnd(u227LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u227Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u227Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u227LinksClick');
}

InsertBeforeEnd(u227LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u227Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u227Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u227LinksClick');
}
gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'center';document.getElementById('u112_img').tabIndex = 0;
HookHover('u112', false);

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u18'] = 'top';document.getElementById('u50_img').tabIndex = 0;
HookHover('u50', false);

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u74_img').tabIndex = 0;
HookHover('u74', false);

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u55'] = 'center';u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u149', function(e) {
if (!IsTrueMouseOut('u149',e)) return;
if (true) {

	SetPanelVisibility('u145','hidden','fade',500);

}
});
gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u111'] = 'center';
u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});

u284.style.cursor = 'pointer';
$axure.eventManager.click('u284', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u329'] = 'top';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u229'] = 'top';u148.tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u148'] = 'top';document.getElementById('u110_img').tabIndex = 0;
HookHover('u110', false);

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u305'] = 'top';gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u297'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u81'] = 'center';u228.tabIndex = 0;

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', u228Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u228LinksClick'></div>")
var u228LinksClick = document.getElementById('u228LinksClick');
function u228Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u228LinksClick');
}

InsertBeforeEnd(u228LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u228Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u228Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u228LinksClick');
}

InsertBeforeEnd(u228LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u228Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u228Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u228LinksClick');
}
gv_vAlignTable['u228'] = 'top';document.getElementById('u88_img').tabIndex = 0;
HookHover('u88', false);

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
document.getElementById('u76_img').tabIndex = 0;
HookHover('u76', false);

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u278'] = 'top';u240.tabIndex = 0;

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u281'] = 'top';document.getElementById('u94_img').tabIndex = 0;
HookHover('u94', false);

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u5'] = 'top';
u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u253'] = 'top';
u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	SetPanelVisibility('u168','hidden','fade',500);

}
});
gv_vAlignTable['u267'] = 'top';gv_vAlignTable['u302'] = 'top';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u316'] = 'top';gv_vAlignTable['u294'] = 'top';u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

}
});
gv_vAlignTable['u135'] = 'top';document.getElementById('u108_img').tabIndex = 0;
HookHover('u108', false);

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u252'] = 'top';
u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelVisibility('u168','hidden','fade',500);

}
});
document.getElementById('u64_img').tabIndex = 0;
HookHover('u64', false);

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u263'] = 'top';document.getElementById('u120_img').tabIndex = 0;
HookHover('u120', false);

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u21'] = 'top';u134.tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u170'] = 'center';document.getElementById('u82_img').tabIndex = 0;
HookHover('u82', false);

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u292'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u147'] = 'center';document.getElementById('u58_img').tabIndex = 0;
HookHover('u58', false);

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u61'] = 'center';
u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelVisibility('u150','hidden','fade',500);

	SetPanelState('u131', 'pd1u131','none','',500,'none','',500);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u327'] = 'top';document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u277'] = 'top';u212.tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u212'] = 'top';document.getElementById('u118_img').tabIndex = 0;
HookHover('u118', false);

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u85'] = 'center';
u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
u144.tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u248'] = 'center';u210.tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u325'] = 'top';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u260'] = 'top';
u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PersonalInfo.html');

}
});
gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u309'] = 'top';
u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
document.getElementById('u106_img').tabIndex = 0;
HookHover('u106', false);

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
u142.tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u142'] = 'top';document.getElementById('u86_img').tabIndex = 0;
HookHover('u86', false);

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u70_img').tabIndex = 0;
HookHover('u70', false);

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupFans.html');

}
});
gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u188'] = 'top';
u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('查看文件信息.html');

}
});
u226.tabIndex = 0;

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', u226Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u226LinksClick'></div>")
var u226LinksClick = document.getElementById('u226LinksClick');
function u226Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u226LinksClick');
}

InsertBeforeEnd(u226LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u226Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u226Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u226LinksClick');
}

InsertBeforeEnd(u226LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u226Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u226Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u226LinksClick');
}
gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u29'] = 'top';u155.tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelVisibility('u150','hidden','fade',500);

}
});
gv_vAlignTable['u155'] = 'top';u209.tabIndex = 0;

u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u19'] = 'top';document.getElementById('u104_img').tabIndex = 0;
HookHover('u104', false);

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u221'] = 'top';document.getElementById('u235_img').tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', u235Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u235LinksClick'></div>")
var u235LinksClick = document.getElementById('u235LinksClick');
function u235Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u235LinksClick');
}

InsertBeforeEnd(u235LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u235Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u235Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u235LinksClick');
}

InsertBeforeEnd(u235LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u235Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u235Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u235LinksClick');
}

InsertBeforeEnd(u235LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u235Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u235Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u235LinksClick');
}
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u208'] = 'top';document.getElementById('u98_img').tabIndex = 0;
HookHover('u98', false);

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u270'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u319'] = 'top';document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
document.getElementById('u102_img').tabIndex = 0;
HookHover('u102', false);

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
document.getElementById('u56_img').tabIndex = 0;
HookHover('u56', false);

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

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
gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u87'] = 'center';document.getElementById('u68_img').tabIndex = 0;
HookHover('u68', false);

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupMember.html');

}
});
u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', u198Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u198LinksClick'></div>")
var u198LinksClick = document.getElementById('u198LinksClick');
function u198Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u198LinksClick');
}

InsertBeforeEnd(u198LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u198Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u198Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u198LinksClick');
}

InsertBeforeEnd(u198LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u198Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u198Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u198LinksClick');
}
gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u7'] = 'top';document.getElementById('u62_img').tabIndex = 0;
HookHover('u62', false);

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u219.tabIndex = 0;

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u132'] = 'top';document.getElementById('u114_img').tabIndex = 0;
HookHover('u114', false);

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u57'] = 'center';u187.tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	SetPanelVisibility('u168','hidden','fade',500);

}
});
gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u14'] = 'center';u218.tabIndex = 0;

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u127'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupDisk.html');

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u310'] = 'top';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u324'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u289'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u242'] = 'center';document.getElementById('u96_img').tabIndex = 0;
HookHover('u96', false);

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u288'] = 'top';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelVisibility('u168','','fade',500);

	BringToFront("u168");

}
});
gv_vAlignTable['u141'] = 'top';u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', u197Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u197LinksClick'></div>")
var u197LinksClick = document.getElementById('u197LinksClick');
function u197Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u197Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u197LinksClick');
}

InsertBeforeEnd(u197LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u197Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u197Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u197LinksClick');
}
gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u255'] = 'top';u204.tabIndex = 0;

u204.style.cursor = 'pointer';
$axure.eventManager.click('u204', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u204'] = 'top';document.getElementById('u66_img').tabIndex = 0;
HookHover('u66', false);

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupInfo.html');

}
});
gv_vAlignTable['u125'] = 'center';u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	SetPanelVisibility('u150','','fade',500);

	BringToFront("u150");

}
});
gv_vAlignTable['u140'] = 'top';u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', u196Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u196LinksClick'></div>")
var u196LinksClick = document.getElementById('u196LinksClick');
function u196Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u196LinksClick');
}

InsertBeforeEnd(u196LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u196Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u196Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u196LinksClick');
}

InsertBeforeEnd(u196LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u196Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u196Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u150','','fade',500);

	ToggleLinks(e, 'u196LinksClick');
}
gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u335'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u264'] = 'top';u203.tabIndex = 0;

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u181'] = 'top';document.getElementById('u84_img').tabIndex = 0;
HookHover('u84', false);

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('GroupSetting.html');

}
});
gv_vAlignTable['u320'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u217'] = 'top';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Index.html');

}
});
gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u225'] = 'top';