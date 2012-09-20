for(var i = 0; i < 827; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u676','hidden','none',500);

	SetPanelVisibility('u668','hidden','none',500);

}

if (true) {

	SetPanelVisibility('u581','hidden','none',500);

	SetPanelVisibility('u586','hidden','none',500);

	SetPanelVisibility('u604','hidden','none',500);

}

});
gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u712'] = 'center';u421.tabIndex = 0;

u421.style.cursor = 'pointer';
$axure.eventManager.click('u421', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u817'] = 'top';gv_vAlignTable['u684'] = 'center';
$axure.eventManager.mouseout('u488', function(e) {
if (!IsTrueMouseOut('u488',e)) return;
if (true) {

	SetPanelState('u483', 'pd0u483','none','',500,'none','',500);

}
});
gv_vAlignTable['u488'] = 'top';u213.tabIndex = 0;

u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u493', function(e) {
if (!IsTrueMouseOver('u493',e)) return;
if (true) {

	SetPanelState('u483', 'pd1u483','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u493', function(e) {
if (!IsTrueMouseOut('u493',e)) return;
if (true) {

}
});
gv_vAlignTable['u493'] = 'top';
$axure.eventManager.mouseover('u400', function(e) {
if (!IsTrueMouseOver('u400',e)) return;
if (true) {

	SetPanelState('u390', 'pd1u390','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u400', function(e) {
if (!IsTrueMouseOut('u400',e)) return;
if (true) {

}
});
gv_vAlignTable['u400'] = 'top';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u680'] = 'top';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u637'] = 'top';u234.tabIndex = 0;

u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u453.tabIndex = 0;

u453.style.cursor = 'pointer';
$axure.eventManager.click('u453', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
HookHover('u699', false);
u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u49.tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u640.tabIndex = 0;

u640.style.cursor = 'pointer';
$axure.eventManager.click('u640', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u640'] = 'top';gv_vAlignTable['u665'] = 'top';gv_vAlignTable['u228'] = 'center';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u633.tabIndex = 0;

u633.style.cursor = 'pointer';
$axure.eventManager.click('u633', u633Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u633LinksClick'></div>")
var u633LinksClick = document.getElementById('u633LinksClick');
function u633Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u633LinksClick');
}

InsertBeforeEnd(u633LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u633Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(event)'>已登录</div>");
function u633Clicku8dbc5fa76ecf4fa0b0d7d359f3964db3(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u633LinksClick');
}

InsertBeforeEnd(u633LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u633Clicku0f3850ef8f1b49b2896119f37161dd27(event)'>未登录</div>");
function u633Clicku0f3850ef8f1b49b2896119f37161dd27(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u633LinksClick');
}
gv_vAlignTable['u633'] = 'top';gv_vAlignTable['u230'] = 'center';
u601.style.cursor = 'pointer';
$axure.eventManager.click('u601', function(e) {

if (true) {

	SetPanelVisibility('u586','hidden','fade',500);

}
});
u255.tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u408.tabIndex = 0;

u408.style.cursor = 'pointer';
$axure.eventManager.click('u408', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u442.tabIndex = 0;

u442.style.cursor = 'pointer';
$axure.eventManager.click('u442', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u661'] = 'top';gv_vAlignTable['u700'] = 'center';u396.tabIndex = 0;

u396.style.cursor = 'pointer';
$axure.eventManager.click('u396', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u755'] = 'center';u648.tabIndex = 0;

u648.style.cursor = 'pointer';
$axure.eventManager.click('u648', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u648'] = 'top';
$axure.eventManager.mouseout('u275', function(e) {
if (!IsTrueMouseOut('u275',e)) return;
if (true) {

	SetPanelState('u270', 'pd0u270','none','',500,'none','',500);

}
});
gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u425'] = 'center';u185.tabIndex = 0;

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u591.tabIndex = 0;

u591.style.cursor = 'pointer';
$axure.eventManager.click('u591', function(e) {

if (true) {

	SetPanelVisibility('u586','hidden','fade',500);

}
});
gv_vAlignTable['u591'] = 'top';u397.tabIndex = 0;

u397.style.cursor = 'pointer';
$axure.eventManager.click('u397', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u584.tabIndex = 0;

u584.style.cursor = 'pointer';
$axure.eventManager.click('u584', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('MyAccount.html'), "");

}
});
gv_vAlignTable['u584'] = 'top';gv_vAlignTable['u798'] = 'top';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u796'] = 'top';u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u325.tabIndex = 0;

u325.style.cursor = 'pointer';
$axure.eventManager.click('u325', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u580.tabIndex = 0;

u580.style.cursor = 'pointer';
$axure.eventManager.click('u580', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('今日分享文件.html'), "");

}
});
u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u512.tabIndex = 0;

u512.style.cursor = 'pointer';
$axure.eventManager.click('u512', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u537', function(e) {
if (!IsTrueMouseOver('u537',e)) return;
if (true) {

	SetPanelState('u527', 'pd1u527','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u537', function(e) {
if (!IsTrueMouseOut('u537',e)) return;
if (true) {

}
});
gv_vAlignTable['u537'] = 'top';gv_vAlignTable['u792'] = 'center';gv_vAlignTable['u599'] = 'center';gv_vAlignTable['u102'] = 'center';
$axure.eventManager.mouseover('u39', function(e) {
if (!IsTrueMouseOver('u39',e)) return;
if (true) {

	SetPanelState('u29', 'pd1u29','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u39', function(e) {
if (!IsTrueMouseOut('u39',e)) return;
if (true) {

}
});
gv_vAlignTable['u39'] = 'top';
$axure.eventManager.mouseout('u127', function(e) {
if (!IsTrueMouseOut('u127',e)) return;
if (true) {

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}
});
gv_vAlignTable['u127'] = 'top';
$axure.eventManager.mouseout('u346', function(e) {
if (!IsTrueMouseOut('u346',e)) return;
if (true) {

	SetPanelState('u341', 'pd0u341','none','',500,'none','',500);

}
});
gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u565'] = 'center';u128.tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u314.tabIndex = 0;

u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u533.tabIndex = 0;

u533.style.cursor = 'pointer';
$axure.eventManager.click('u533', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u752'] = 'center';u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u501.tabIndex = 0;

u501.style.cursor = 'pointer';
$axure.eventManager.click('u501', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u745'] = 'center';gv_vAlignTable['u561'] = 'center';
$axure.eventManager.mouseout('u149', function(e) {
if (!IsTrueMouseOut('u149',e)) return;
if (true) {

	SetPanelState('u144', 'pd0u144','none','',500,'none','',500);

}
});
gv_vAlignTable['u149'] = 'top';
$axure.eventManager.mouseout('u368', function(e) {
if (!IsTrueMouseOut('u368',e)) return;
if (true) {

	SetPanelState('u363', 'pd0u363','none','',500,'none','',500);

}
});
gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u53'] = 'center';u370.tabIndex = 0;

u370.style.cursor = 'pointer';
$axure.eventManager.click('u370', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u548', function(e) {
if (!IsTrueMouseOver('u548',e)) return;
if (true) {

	SetPanelState('u538', 'pd1u538','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u548', function(e) {
if (!IsTrueMouseOut('u548',e)) return;
if (true) {

}
});
gv_vAlignTable['u548'] = 'top';
$axure.eventManager.mouseout('u12', function(e) {
if (!IsTrueMouseOut('u12',e)) return;
if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u12'] = 'top';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u77'] = 'center';u491.tabIndex = 0;

u491.style.cursor = 'pointer';
$axure.eventManager.click('u491', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u804'] = 'top';u293.tabIndex = 0;

u293.style.cursor = 'pointer';
$axure.eventManager.click('u293', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u200.tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u225', function(e) {
if (!IsTrueMouseOver('u225',e)) return;
if (true) {

	SetPanelState('u215', 'pd1u215','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u225', function(e) {
if (!IsTrueMouseOut('u225',e)) return;
if (true) {

}
});
gv_vAlignTable['u225'] = 'top';u480.tabIndex = 0;

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});

$axure.eventManager.mouseout('u450', function(e) {
if (!IsTrueMouseOut('u450',e)) return;
if (true) {

	SetPanelState('u445', 'pd0u445','none','',500,'none','',500);

}
});
gv_vAlignTable['u450'] = 'top';gv_vAlignTable['u692'] = 'center';gv_vAlignTable['u405'] = 'center';gv_vAlignTable['u624'] = 'top';
$axure.eventManager.mouseout('u499', function(e) {
if (!IsTrueMouseOut('u499',e)) return;
if (true) {

	SetPanelState('u494', 'pd0u494','none','',500,'none','',500);

}
});
gv_vAlignTable['u499'] = 'top';
$axure.eventManager.mouseover('u214', function(e) {
if (!IsTrueMouseOver('u214',e)) return;
if (true) {

	SetPanelState('u204', 'pd1u204','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u214', function(e) {
if (!IsTrueMouseOut('u214',e)) return;
if (true) {

}
});
gv_vAlignTable['u214'] = 'top';u221.tabIndex = 0;

u221.style.cursor = 'pointer';
$axure.eventManager.click('u221', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u440.tabIndex = 0;

u440.style.cursor = 'pointer';
$axure.eventManager.click('u440', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u246.tabIndex = 0;

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u617'] = 'top';u82.tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u433', function(e) {
if (!IsTrueMouseOver('u433',e)) return;
if (true) {

	SetPanelState('u423', 'pd1u423','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u433', function(e) {
if (!IsTrueMouseOut('u433',e)) return;
if (true) {

}
});
gv_vAlignTable['u433'] = 'top';u652.tabIndex = 0;

u652.style.cursor = 'pointer';
$axure.eventManager.click('u652', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u652'] = 'top';gv_vAlignTable['u722'] = 'center';gv_vAlignTable['u274'] = 'center';u645.tabIndex = 0;

u645.style.cursor = 'pointer';
$axure.eventManager.click('u645', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u645'] = 'top';gv_vAlignTable['u208'] = 'center';
$axure.eventManager.mouseout('u242', function(e) {
if (!IsTrueMouseOut('u242',e)) return;
if (true) {

	SetPanelState('u237', 'pd0u237','none','',500,'none','',500);

}
});
gv_vAlignTable['u242'] = 'top';
$axure.eventManager.mouseout('u461', function(e) {
if (!IsTrueMouseOut('u461',e)) return;
if (true) {

	SetPanelState('u456', 'pd0u456','none','',500,'none','',500);

}
});
gv_vAlignTable['u461'] = 'top';u277.tabIndex = 0;

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u777.tabIndex = 0;

u777.style.cursor = 'pointer';
$axure.eventManager.click('u777', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u777'] = 'top';u268.tabIndex = 0;

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u639.tabIndex = 0;

u639.style.cursor = 'pointer';
$axure.eventManager.click('u639', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u639'] = 'top';gv_vAlignTable['u773'] = 'center';
$axure.eventManager.mouseover('u61', function(e) {
if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u61', function(e) {
if (!IsTrueMouseOut('u61',e)) return;
if (true) {

}
});
gv_vAlignTable['u61'] = 'top';
$axure.eventManager.mouseout('u67', function(e) {
if (!IsTrueMouseOut('u67',e)) return;
if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}
});
gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u540'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u787'] = 'center';gv_vAlignTable['u365'] = 'center';
$axure.eventManager.mouseout('u384', function(e) {
if (!IsTrueMouseOut('u384',e)) return;
if (true) {

	SetPanelState('u379', 'pd0u379','none','',500,'none','',500);

}
});
gv_vAlignTable['u384'] = 'top';u163.tabIndex = 0;

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u790'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u783'] = 'center';u265.tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u465.tabIndex = 0;

u465.style.cursor = 'pointer';
$axure.eventManager.click('u465', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u312'] = 'center';u337.tabIndex = 0;

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u592'] = 'top';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u524.tabIndex = 0;

u524.style.cursor = 'pointer';
$axure.eventManager.click('u524', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u399.tabIndex = 0;

u399.style.cursor = 'pointer';
$axure.eventManager.click('u399', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u340', function(e) {
if (!IsTrueMouseOver('u340',e)) return;
if (true) {

	SetPanelState('u330', 'pd1u330','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u340', function(e) {
if (!IsTrueMouseOut('u340',e)) return;
if (true) {

}
});
gv_vAlignTable['u340'] = 'top';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u736'] = 'center';HookHover('u721', false);
u577.tabIndex = 0;

u577.style.cursor = 'pointer';
$axure.eventManager.click('u577', function(e) {

if (true) {

	SetPanelVisibility('u604','','fade',500);

	BringToFront("u604");

}
});
gv_vAlignTable['u577'] = 'top';gv_vAlignTable['u301'] = 'center';gv_vAlignTable['u520'] = 'center';u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u545.tabIndex = 0;

u545.style.cursor = 'pointer';
$axure.eventManager.click('u545', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u142.tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u361.tabIndex = 0;

u361.style.cursor = 'pointer';
$axure.eventManager.click('u361', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u757'] = 'top';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u573'] = 'center';gv_vAlignTable['u170'] = 'center';u348.tabIndex = 0;

u348.style.cursor = 'pointer';
$axure.eventManager.click('u348', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u305.tabIndex = 0;

u305.style.cursor = 'pointer';
$axure.eventManager.click('u305', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});

$axure.eventManager.mouseover('u373', function(e) {
if (!IsTrueMouseOver('u373',e)) return;
if (true) {

	SetPanelState('u363', 'pd1u363','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u373', function(e) {
if (!IsTrueMouseOut('u373',e)) return;
if (true) {

}
});
gv_vAlignTable['u373'] = 'top';gv_vAlignTable['u9'] = 'center';u57.tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u515', function(e) {
if (!IsTrueMouseOver('u515',e)) return;
if (true) {

	SetPanelState('u505', 'pd1u505','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u515', function(e) {
if (!IsTrueMouseOut('u515',e)) return;
if (true) {

}
});
gv_vAlignTable['u515'] = 'top';gv_vAlignTable['u743'] = 'top';
$axure.eventManager.mouseout('u291', function(e) {
if (!IsTrueMouseOut('u291',e)) return;
if (true) {

	SetPanelState('u286', 'pd0u286','none','',500,'none','',500);

}
});
gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u496'] = 'center';u58.tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u280', function(e) {
if (!IsTrueMouseOver('u280',e)) return;
if (true) {

	SetPanelState('u270', 'pd1u270','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u280', function(e) {
if (!IsTrueMouseOut('u280',e)) return;
if (true) {

}
});
gv_vAlignTable['u280'] = 'top';u212.tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u414'] = 'center';u492.tabIndex = 0;

u492.style.cursor = 'pointer';
$axure.eventManager.click('u492', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u86'] = 'center';u68.tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseout('u417', function(e) {
if (!IsTrueMouseOut('u417',e)) return;
if (true) {

	SetPanelState('u412', 'pd0u412','none','',500,'none','',500);

}
});
gv_vAlignTable['u417'] = 'top';gv_vAlignTable['u636'] = 'top';u233.tabIndex = 0;

u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u452.tabIndex = 0;

u452.style.cursor = 'pointer';
$axure.eventManager.click('u452', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseout('u477', function(e) {
if (!IsTrueMouseOut('u477',e)) return;
if (true) {

	SetPanelState('u472', 'pd0u472','none','',500,'none','',500);

}
});
gv_vAlignTable['u477'] = 'top';u603.tabIndex = 0;

u603.style.cursor = 'pointer';
$axure.eventManager.click('u603', function(e) {

if (true) {

	SetPanelVisibility('u586','hidden','fade',500);

	SetPanelVisibility('u604','','fade',500);

}
});
u420.tabIndex = 0;

u420.style.cursor = 'pointer';
$axure.eventManager.click('u420', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u664.tabIndex = 0;

u664.style.cursor = 'pointer';
$axure.eventManager.click('u664', u664Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u664LinksClick'></div>")
var u664LinksClick = document.getElementById('u664LinksClick');
function u664Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u664LinksClick');
}

InsertBeforeEnd(u664LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u664Clicku5f7a349a38d14c96ad8cd6858683740f(event)'>已登录</div>");
function u664Clicku5f7a349a38d14c96ad8cd6858683740f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u664LinksClick');
}

InsertBeforeEnd(u664LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u664Clickub221e6a3079c4feab144cd5d3b352bdf(event)'>未登录</div>");
function u664Clickub221e6a3079c4feab144cd5d3b352bdf(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u664LinksClick');
}
gv_vAlignTable['u664'] = 'top';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u321'] = 'center';gv_vAlignTable['u657'] = 'top';
$axure.eventManager.mouseout('u439', function(e) {
if (!IsTrueMouseOut('u439',e)) return;
if (true) {

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

}
});
gv_vAlignTable['u439'] = 'top';gv_vAlignTable['u658'] = 'top';
$axure.eventManager.mouseout('u23', function(e) {
if (!IsTrueMouseOut('u23',e)) return;
if (true) {

	SetPanelState('u18', 'pd0u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u660'] = 'center';u266.tabIndex = 0;

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u619'] = 'top';gv_vAlignTable['u698'] = 'center';gv_vAlignTable['u808'] = 'top';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u28', function(e) {
if (!IsTrueMouseOver('u28',e)) return;
if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u28', function(e) {
if (!IsTrueMouseOut('u28',e)) return;
if (true) {

}
});
gv_vAlignTable['u28'] = 'top';
$axure.eventManager.mouseout('u78', function(e) {
if (!IsTrueMouseOut('u78',e)) return;
if (true) {

	SetPanelState('u73', 'pd0u73','none','',500,'none','',500);

}
});
gv_vAlignTable['u78'] = 'top';u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
HookHover('u716', false);
gv_vAlignTable['u590'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u583'] = 'center';u795.tabIndex = 0;

u795.style.cursor = 'pointer';
$axure.eventManager.click('u795', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('根据标签列文件.html');

}
});
gv_vAlignTable['u795'] = 'top';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u514.tabIndex = 0;

u514.style.cursor = 'pointer';
$axure.eventManager.click('u514', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u392'] = 'center';
$axure.eventManager.mouseout('u105', function(e) {
if (!IsTrueMouseOut('u105',e)) return;
if (true) {

	SetPanelState('u100', 'pd0u100','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'top';
$axure.eventManager.mouseout('u324', function(e) {
if (!IsTrueMouseOut('u324',e)) return;
if (true) {

	SetPanelState('u319', 'pd0u319','none','',500,'none','',500);

}
});
gv_vAlignTable['u324'] = 'top';u199.tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u354'] = 'center';
$axure.eventManager.mouseout('u253', function(e) {
if (!IsTrueMouseOut('u253',e)) return;
if (true) {

	SetPanelState('u248', 'pd0u248','none','',500,'none','',500);

}
});
gv_vAlignTable['u253'] = 'top';u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u511.tabIndex = 0;

u511.style.cursor = 'pointer';
$axure.eventManager.click('u511', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u317.tabIndex = 0;

u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u536.tabIndex = 0;

u536.style.cursor = 'pointer';
$axure.eventManager.click('u536', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u90.tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u504', function(e) {
if (!IsTrueMouseOver('u504',e)) return;
if (true) {

	SetPanelState('u494', 'pd1u494','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u504', function(e) {
if (!IsTrueMouseOut('u504',e)) return;
if (true) {

}
});
gv_vAlignTable['u504'] = 'top';HookHover('u723', false);
gv_vAlignTable['u606'] = 'center';gv_vAlignTable['u345'] = 'center';u161.tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseout('u532', function(e) {
if (!IsTrueMouseOut('u532',e)) return;
if (true) {

	SetPanelState('u527', 'pd0u527','none','',500,'none','',500);

}
});
gv_vAlignTable['u532'] = 'top';u557.tabIndex = 0;

u557.style.cursor = 'pointer';
$axure.eventManager.click('u557', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u776'] = 'center';u339.tabIndex = 0;

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u558.tabIndex = 0;

u558.style.cursor = 'pointer';
$axure.eventManager.click('u558', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u738'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u759'] = 'center';gv_vAlignTable['u55'] = 'center';
$axure.eventManager.mouseover('u296', function(e) {
if (!IsTrueMouseOver('u296',e)) return;
if (true) {

	SetPanelState('u286', 'pd1u286','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u296', function(e) {
if (!IsTrueMouseOut('u296',e)) return;
if (true) {

}
});
gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u487'] = 'center';gv_vAlignTable['u807'] = 'top';u463.tabIndex = 0;

u463.style.cursor = 'pointer';
$axure.eventManager.click('u463', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u490.tabIndex = 0;

u490.style.cursor = 'pointer';
$axure.eventManager.click('u490', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u810'] = 'top';gv_vAlignTable['u803'] = 'top';gv_vAlignTable['u367'] = 'center';u327.tabIndex = 0;

u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u292.tabIndex = 0;

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u224.tabIndex = 0;

u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

u689.style.cursor = 'pointer';
$axure.eventManager.click('u689', function(e) {

if (true) {

	SetPanelVisibility('u676','hidden','fade',500);

}
});

$axure.eventManager.mouseover('u411', function(e) {
if (!IsTrueMouseOver('u411',e)) return;
if (true) {

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u411', function(e) {
if (!IsTrueMouseOut('u411',e)) return;
if (true) {

}
});
gv_vAlignTable['u411'] = 'top';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u436'] = 'center';u151.tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u623.tabIndex = 0;

u623.style.cursor = 'pointer';
$axure.eventManager.click('u623', function(e) {

if (true) {

	SetPanelVisibility('u604','hidden','fade',500);

}
});
gv_vAlignTable['u623'] = 'top';gv_vAlignTable['u498'] = 'center';
$axure.eventManager.mouseout('u220', function(e) {
if (!IsTrueMouseOut('u220',e)) return;
if (true) {

	SetPanelState('u215', 'pd0u215','none','',500,'none','',500);

}
});
gv_vAlignTable['u220'] = 'top';HookHover('u706', false);
u245.tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
document.getElementById('u740_img').tabIndex = 0;

u740.style.cursor = 'pointer';
$axure.eventManager.click('u740', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u432.tabIndex = 0;

u432.style.cursor = 'pointer';
$axure.eventManager.click('u432', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u651'] = 'top';gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u458'] = 'center';gv_vAlignTable['u644'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u460'] = 'center';u419.tabIndex = 0;

u419.style.cursor = 'pointer';
$axure.eventManager.click('u419', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u638.tabIndex = 0;

u638.style.cursor = 'pointer';
$axure.eventManager.click('u638', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u638'] = 'top';gv_vAlignTable['u672'] = 'center';u479.tabIndex = 0;

u479.style.cursor = 'pointer';
$axure.eventManager.click('u479', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u343'] = 'center';gv_vAlignTable['u717'] = 'center';
$axure.eventManager.mouseout('u45', function(e) {
if (!IsTrueMouseOut('u45',e)) return;
if (true) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

}
});
gv_vAlignTable['u45'] = 'top';u387.tabIndex = 0;

u387.style.cursor = 'pointer';
$axure.eventManager.click('u387', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u383'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u797'] = 'top';gv_vAlignTable['u192'] = 'center';document.getElementById('u782_img').tabIndex = 0;

u782.style.cursor = 'pointer';
$axure.eventManager.click('u782', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u124'] = 'center';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u336.tabIndex = 0;

u336.style.cursor = 'pointer';
$axure.eventManager.click('u336', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u707'] = 'center';u304.tabIndex = 0;

u304.style.cursor = 'pointer';
$axure.eventManager.click('u304', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u523.tabIndex = 0;

u523.style.cursor = 'pointer';
$axure.eventManager.click('u523', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u398.tabIndex = 0;

u398.style.cursor = 'pointer';
$axure.eventManager.click('u398', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u805'] = 'top';gv_vAlignTable['u705'] = 'center';gv_vAlignTable['u551'] = 'center';
$axure.eventManager.mouseout('u357', function(e) {
if (!IsTrueMouseOut('u357',e)) return;
if (true) {

	SetPanelState('u352', 'pd0u352','none','',500,'none','',500);

}
});
gv_vAlignTable['u357'] = 'top';u576.tabIndex = 0;

u576.style.cursor = 'pointer';
$axure.eventManager.click('u576', function(e) {

if (true) {

	SetPanelVisibility('u586','','fade',500);

	BringToFront("u586");

}
});
gv_vAlignTable['u576'] = 'top';u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u358.tabIndex = 0;

u358.style.cursor = 'pointer';
$axure.eventManager.click('u358', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u94', function(e) {
if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u94', function(e) {
if (!IsTrueMouseOut('u94',e)) return;
if (true) {

}
});
gv_vAlignTable['u94'] = 'top';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u544.tabIndex = 0;

u544.style.cursor = 'pointer';
$axure.eventManager.click('u544', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u763.tabIndex = 0;

u763.style.cursor = 'pointer';
$axure.eventManager.click('u763', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u763'] = 'top';u360.tabIndex = 0;

u360.style.cursor = 'pointer';
$axure.eventManager.click('u360', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u731'] = 'top';u756.tabIndex = 0;

u756.style.cursor = 'pointer';
$axure.eventManager.click('u756', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u756'] = 'top';u556.tabIndex = 0;

u556.style.cursor = 'pointer';
$axure.eventManager.click('u556', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u11'] = 'center';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u816'] = 'top';
$axure.eventManager.mouseover('u17', function(e) {
if (!IsTrueMouseOver('u17',e)) return;
if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u17', function(e) {
if (!IsTrueMouseOut('u17',e)) return;
if (true) {

}
});
gv_vAlignTable['u17'] = 'top';HookHover('u718', false);

$axure.eventManager.mouseover('u559', function(e) {
if (!IsTrueMouseOver('u559',e)) return;
if (true) {

	SetPanelState('u549', 'pd1u549','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u559', function(e) {
if (!IsTrueMouseOut('u559',e)) return;
if (true) {

}
});
gv_vAlignTable['u559'] = 'top';gv_vAlignTable['u778'] = 'top';u35.tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u729'] = 'top';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u686'] = 'top';gv_vAlignTable['u283'] = 'center';gv_vAlignTable['u815'] = 'top';gv_vAlignTable['u682'] = 'top';u489.tabIndex = 0;

u489.style.cursor = 'pointer';
$axure.eventManager.click('u489', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u770.tabIndex = 0;

u770.style.cursor = 'pointer';
$axure.eventManager.click('u770', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u770'] = 'top';u211.tabIndex = 0;

u211.style.cursor = 'pointer';
$axure.eventManager.click('u211', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u809'] = 'top';
$axure.eventManager.mouseover('u236', function(e) {
if (!IsTrueMouseOver('u236',e)) return;
if (true) {

	SetPanelState('u226', 'pd1u226','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u236', function(e) {
if (!IsTrueMouseOut('u236',e)) return;
if (true) {

}
});
gv_vAlignTable['u236'] = 'top';
u607.style.cursor = 'pointer';
$axure.eventManager.click('u607', function(e) {

if (true) {

	SetPanelVisibility('u604','hidden','fade',500);

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u667'] = 'top';
$axure.eventManager.mouseout('u264', function(e) {
if (!IsTrueMouseOut('u264',e)) return;
if (true) {

	SetPanelState('u259', 'pd0u259','none','',500,'none','',500);

}
});
gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u635'] = 'top';u232.tabIndex = 0;

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u451.tabIndex = 0;

u451.style.cursor = 'pointer';
$axure.eventManager.click('u451', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u257.tabIndex = 0;

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u476'] = 'center';u502.tabIndex = 0;

u502.style.cursor = 'pointer';
$axure.eventManager.click('u502', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});

$axure.eventManager.mouseover('u258', function(e) {
if (!IsTrueMouseOver('u258',e)) return;
if (true) {

	SetPanelState('u248', 'pd1u248','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u258', function(e) {
if (!IsTrueMouseOut('u258',e)) return;
if (true) {

}
});
gv_vAlignTable['u258'] = 'top';
$axure.eventManager.mouseover('u444', function(e) {
if (!IsTrueMouseOver('u444',e)) return;
if (true) {

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u444', function(e) {
if (!IsTrueMouseOut('u444',e)) return;
if (true) {

}
});
gv_vAlignTable['u444'] = 'top';u663.tabIndex = 0;

u663.style.cursor = 'pointer';
$axure.eventManager.click('u663', u663Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u663LinksClick'></div>")
var u663LinksClick = document.getElementById('u663LinksClick');
function u663Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u663LinksClick');
}

InsertBeforeEnd(u663LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u663Clicku26dd11497c534e88a2307f4797a5266d(event)'>已登录</div>");
function u663Clicku26dd11497c534e88a2307f4797a5266d(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

	ToggleLinks(e, 'u663LinksClick');
}

InsertBeforeEnd(u663LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u663Clicku698faf4562364841828b3a9cb49b94bb(event)'>未登录</div>");
function u663Clicku698faf4562364841828b3a9cb49b94bb(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u663LinksClick');
}
gv_vAlignTable['u663'] = 'top';u631.tabIndex = 0;

u631.style.cursor = 'pointer';
$axure.eventManager.click('u631', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u631'] = 'top';gv_vAlignTable['u656'] = 'top';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u438'] = 'center';u60.tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u279.tabIndex = 0;

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u611'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u678'] = 'center';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u187', function(e) {
if (!IsTrueMouseOver('u187',e)) return;
if (true) {

	SetPanelState('u177', 'pd1u177','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u187', function(e) {
if (!IsTrueMouseOut('u187',e)) return;
if (true) {

}
});
gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u332'] = 'center';u306.tabIndex = 0;

u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u190'] = 'center';u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseout('u395', function(e) {
if (!IsTrueMouseOut('u395',e)) return;
if (true) {

	SetPanelState('u390', 'pd0u390','none','',500,'none','',500);

}
});
gv_vAlignTable['u395'] = 'top';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u389', function(e) {
if (!IsTrueMouseOver('u389',e)) return;
if (true) {

	SetPanelState('u379', 'pd1u379','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u389', function(e) {
if (!IsTrueMouseOut('u389',e)) return;
if (true) {

}
});
gv_vAlignTable['u389'] = 'top';u794.tabIndex = 0;

u794.style.cursor = 'pointer';
$axure.eventManager.click('u794', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('根据标签列文件.html'), "");

}
});
gv_vAlignTable['u794'] = 'top';gv_vAlignTable['u507'] = 'center';HookHover('u726', false);
gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u323'] = 'center';
$axure.eventManager.mouseout('u198', function(e) {
if (!IsTrueMouseOut('u198',e)) return;
if (true) {

	SetPanelState('u193', 'pd0u193','none','',500,'none','',500);

}
});
gv_vAlignTable['u198'] = 'top';
$axure.eventManager.mouseout('u510', function(e) {
if (!IsTrueMouseOut('u510',e)) return;
if (true) {

	SetPanelState('u505', 'pd0u505','none','',500,'none','',500);

}
});
gv_vAlignTable['u510'] = 'top';u164.tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u535.tabIndex = 0;

u535.style.cursor = 'pointer';
$axure.eventManager.click('u535', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
document.getElementById('u754_img').tabIndex = 0;

u754.style.cursor = 'pointer';
$axure.eventManager.click('u754', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u132', function(e) {
if (!IsTrueMouseOver('u132',e)) return;
if (true) {

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u132', function(e) {
if (!IsTrueMouseOut('u132',e)) return;
if (true) {

}
});
gv_vAlignTable['u132'] = 'top';
$axure.eventManager.mouseover('u351', function(e) {
if (!IsTrueMouseOver('u351',e)) return;
if (true) {

	SetPanelState('u341', 'pd1u341','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u351', function(e) {
if (!IsTrueMouseOut('u351',e)) return;
if (true) {

}
});
gv_vAlignTable['u351'] = 'top';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u376'] = 'center';document.getElementById('u747_img').tabIndex = 0;

u747.style.cursor = 'pointer';
$axure.eventManager.click('u747', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u529'] = 'center';gv_vAlignTable['u720'] = 'center';gv_vAlignTable['u563'] = 'center';
$axure.eventManager.mouseout('u160', function(e) {
if (!IsTrueMouseOut('u160',e)) return;
if (true) {

	SetPanelState('u155', 'pd0u155','none','',500,'none','',500);

}
});
gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u531'] = 'center';gv_vAlignTable['u750'] = 'top';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u338.tabIndex = 0;

u338.style.cursor = 'pointer';
$axure.eventManager.click('u338', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u92.tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u372.tabIndex = 0;

u372.style.cursor = 'pointer';
$axure.eventManager.click('u372', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u50', function(e) {
if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u50', function(e) {
if (!IsTrueMouseOut('u50',e)) return;
if (true) {

}
});
gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u769'] = 'center';HookHover('u711', false);

$axure.eventManager.mouseout('u56', function(e) {
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u518'] = 'center';gv_vAlignTable['u771'] = 'top';u359.tabIndex = 0;

u359.style.cursor = 'pointer';
$axure.eventManager.click('u359', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u578.tabIndex = 0;

u578.style.cursor = 'pointer';
$axure.eventManager.click('u578', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u578'] = 'top';u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u806'] = 'top';u295.tabIndex = 0;

u295.style.cursor = 'pointer';
$axure.eventManager.click('u295', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u482', function(e) {
if (!IsTrueMouseOver('u482',e)) return;
if (true) {

	SetPanelState('u472', 'pd1u472','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u482', function(e) {
if (!IsTrueMouseOut('u482',e)) return;
if (true) {

}
});
gv_vAlignTable['u482'] = 'top';gv_vAlignTable['u802'] = 'top';HookHover('u694', false);
u407.tabIndex = 0;

u407.style.cursor = 'pointer';
$axure.eventManager.click('u407', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u223.tabIndex = 0;

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u254.tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u410.tabIndex = 0;

u410.style.cursor = 'pointer';
$axure.eventManager.click('u410', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u654.tabIndex = 0;

u654.style.cursor = 'pointer';
$axure.eventManager.click('u654', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyGroup.html');

}
});
gv_vAlignTable['u654'] = 'top';gv_vAlignTable['u403'] = 'center';gv_vAlignTable['u622'] = 'top';u276.tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u647'] = 'top';u429.tabIndex = 0;

u429.style.cursor = 'pointer';
$axure.eventManager.click('u429', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u244.tabIndex = 0;

u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u615'] = 'top';u503.tabIndex = 0;

u503.style.cursor = 'pointer';
$axure.eventManager.click('u503', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u431.tabIndex = 0;

u431.style.cursor = 'pointer';
$axure.eventManager.click('u431', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u650'] = 'top';gv_vAlignTable['u609'] = 'top';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u643'] = 'top';u46.tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u418.tabIndex = 0;

u418.style.cursor = 'pointer';
$axure.eventManager.click('u418', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
document.getElementById('u671_img').tabIndex = 0;

u671.style.cursor = 'pointer';
$axure.eventManager.click('u671', u671Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u671LinksClick'></div>")
var u671LinksClick = document.getElementById('u671LinksClick');
function u671Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u671LinksClick');
}

InsertBeforeEnd(u671LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u671Clickuacf477b12881499d984d3d2ef8e2aa5f(event)'>搜文件</div>");
function u671Clickuacf477b12881499d984d3d2ef8e2aa5f(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByFile.html');

	ToggleLinks(e, 'u671LinksClick');
}

InsertBeforeEnd(u671LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u671Clicku6ce5aa2fd84249d7a7b11dc717714840(event)'>搜人</div>");
function u671Clicku6ce5aa2fd84249d7a7b11dc717714840(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByAccount.html');

	ToggleLinks(e, 'u671LinksClick');
}

InsertBeforeEnd(u671LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u671Clickuf079b0602ed94a97be3e96cd7ceaa597(event)'>搜群</div>");
function u671Clickuf079b0602ed94a97be3e96cd7ceaa597(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchByGroup.html');

	ToggleLinks(e, 'u671LinksClick');
}
u478.tabIndex = 0;

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u727'] = 'center';u386.tabIndex = 0;

u386.style.cursor = 'pointer';
$axure.eventManager.click('u386', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u121', function(e) {
if (!IsTrueMouseOver('u121',e)) return;
if (true) {

	SetPanelState('u111', 'pd1u111','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u121', function(e) {
if (!IsTrueMouseOut('u121',e)) return;
if (true) {

}
});
gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u785'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u594'] = 'top';
$axure.eventManager.mouseover('u307', function(e) {
if (!IsTrueMouseOver('u307',e)) return;
if (true) {

	SetPanelState('u297', 'pd1u297','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u307', function(e) {
if (!IsTrueMouseOut('u307',e)) return;
if (true) {

}
});
gv_vAlignTable['u307'] = 'top';
$axure.eventManager.mouseover('u526', function(e) {
if (!IsTrueMouseOver('u526',e)) return;
if (true) {

	SetPanelState('u516', 'pd1u516','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u526', function(e) {
if (!IsTrueMouseOut('u526',e)) return;
if (true) {

}
});
gv_vAlignTable['u526'] = 'top';HookHover('u713', false);
gv_vAlignTable['u588'] = 'center';gv_vAlignTable['u310'] = 'center';
$axure.eventManager.mouseout('u116', function(e) {
if (!IsTrueMouseOut('u116',e)) return;
if (true) {

	SetPanelState('u111', 'pd0u111','none','',500,'none','',500);

}
});
gv_vAlignTable['u116'] = 'top';
$axure.eventManager.mouseout('u335', function(e) {
if (!IsTrueMouseOut('u335',e)) return;
if (true) {

	SetPanelState('u330', 'pd0u330','none','',500,'none','',500);

}
});
gv_vAlignTable['u335'] = 'top';
$axure.eventManager.mouseout('u554', function(e) {
if (!IsTrueMouseOut('u554',e)) return;
if (true) {

	SetPanelState('u549', 'pd0u549','none','',500,'none','',500);

}
});
gv_vAlignTable['u554'] = 'top';gv_vAlignTable['u703'] = 'center';u303.tabIndex = 0;

u303.style.cursor = 'pointer';
$axure.eventManager.click('u303', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u522.tabIndex = 0;

u522.style.cursor = 'pointer';
$axure.eventManager.click('u522', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u176', function(e) {
if (!IsTrueMouseOver('u176',e)) return;
if (true) {

	SetPanelState('u166', 'pd1u166','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u176', function(e) {
if (!IsTrueMouseOut('u176',e)) return;
if (true) {

}
});
gv_vAlignTable['u176'] = 'top';u547.tabIndex = 0;

u547.style.cursor = 'pointer';
$axure.eventManager.click('u547', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u766'] = 'center';
$axure.eventManager.mouseover('u329', function(e) {
if (!IsTrueMouseOver('u329',e)) return;
if (true) {

	SetPanelState('u319', 'pd1u319','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u329', function(e) {
if (!IsTrueMouseOut('u329',e)) return;
if (true) {

}
});
gv_vAlignTable['u329'] = 'top';gv_vAlignTable['u356'] = 'center';gv_vAlignTable['u575'] = 'top';
$axure.eventManager.mouseout('u138', function(e) {
if (!IsTrueMouseOut('u138',e)) return;
if (true) {

	SetPanelState('u133', 'pd0u133','none','',500,'none','',500);

}
});
gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u509'] = 'center';u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseout('u543', function(e) {
if (!IsTrueMouseOut('u543',e)) return;
if (true) {

	SetPanelState('u538', 'pd0u538','none','',500,'none','',500);

}
});
gv_vAlignTable['u543'] = 'top';gv_vAlignTable['u762'] = 'center';gv_vAlignTable['u569'] = 'top';u730.tabIndex = 0;

u730.style.cursor = 'pointer';
$axure.eventManager.click('u730', function(e) {

if (true) {

	SetPanelVisibility('u690','hidden','fade',500);

}
});
gv_vAlignTable['u730'] = 'top';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u318', function(e) {
if (!IsTrueMouseOver('u318',e)) return;
if (true) {

	SetPanelState('u308', 'pd1u308','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u318', function(e) {
if (!IsTrueMouseOut('u318',e)) return;
if (true) {

}
});
gv_vAlignTable['u318'] = 'top';u571.tabIndex = 0;

u571.style.cursor = 'pointer';
$axure.eventManager.click('u571', function(e) {

if (true) {

	SetPanelState('u567', 'pd0u567','none','',500,'none','',500);

}
});
gv_vAlignTable['u571'] = 'top';document.getElementById('u775_img').tabIndex = 0;

u775.style.cursor = 'pointer';
$axure.eventManager.click('u775', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u378'] = 'center';
$axure.eventManager.mouseover('u72', function(e) {
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u72', function(e) {
if (!IsTrueMouseOut('u72',e)) return;
if (true) {

}
});
gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u800'] = 'top';gv_vAlignTable['u818'] = 'top';gv_vAlignTable['u685'] = 'top';
$axure.eventManager.mouseout('u89', function(e) {
if (!IsTrueMouseOut('u89',e)) return;
if (true) {

	SetPanelState('u84', 'pd0u84','none','',500,'none','',500);

}
});
gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u814'] = 'top';u681.tabIndex = 0;

u681.style.cursor = 'pointer';
$axure.eventManager.click('u681', function(e) {

if (true) {

	SetPanelVisibility('u676','hidden','fade',500);

}
});
gv_vAlignTable['u681'] = 'top';gv_vAlignTable['u613'] = 'top';u267.tabIndex = 0;

u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u210.tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u454.tabIndex = 0;

u454.style.cursor = 'pointer';
$axure.eventManager.click('u454', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u203', function(e) {
if (!IsTrueMouseOver('u203',e)) return;
if (true) {

	SetPanelState('u193', 'pd1u193','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u203', function(e) {
if (!IsTrueMouseOut('u203',e)) return;
if (true) {

}
});
gv_vAlignTable['u203'] = 'top';
$axure.eventManager.mouseover('u422', function(e) {
if (!IsTrueMouseOver('u422',e)) return;
if (true) {

	SetPanelState('u412', 'pd1u412','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u422', function(e) {
if (!IsTrueMouseOut('u422',e)) return;
if (true) {

}
});
gv_vAlignTable['u422'] = 'top';gv_vAlignTable['u641'] = 'top';gv_vAlignTable['u447'] = 'center';gv_vAlignTable['u666'] = 'top';u634.tabIndex = 0;

u634.style.cursor = 'pointer';
$axure.eventManager.click('u634', u634Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u634LinksClick'></div>")
var u634LinksClick = document.getElementById('u634LinksClick');
function u634Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u634LinksClick');
}

InsertBeforeEnd(u634LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u634Clicku96a6d9b92b9b4392ba2945791e130a1b(event)'>已登录</div>");
function u634Clicku96a6d9b92b9b4392ba2945791e130a1b(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

	ToggleLinks(e, 'u634LinksClick');
}

InsertBeforeEnd(u634LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u634Clickuae3d0d2b13bd43b1aee59fb931494aab(event)'>未登录</div>");
function u634Clickuae3d0d2b13bd43b1aee59fb931494aab(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u634LinksClick');
}
gv_vAlignTable['u634'] = 'top';
$axure.eventManager.mouseout('u231', function(e) {
if (!IsTrueMouseOut('u231',e)) return;
if (true) {

	SetPanelState('u226', 'pd0u226','none','',500,'none','',500);

}
});
gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u602'] = 'top';u256.tabIndex = 0;

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u627'] = 'center';u409.tabIndex = 0;

u409.style.cursor = 'pointer';
$axure.eventManager.click('u409', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u628'] = 'top';u443.tabIndex = 0;

u443.style.cursor = 'pointer';
$axure.eventManager.click('u443', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u662.tabIndex = 0;

u662.style.cursor = 'pointer';
$axure.eventManager.click('u662', u662Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u662LinksClick'></div>")
var u662LinksClick = document.getElementById('u662LinksClick');
function u662Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u662LinksClick');
}

InsertBeforeEnd(u662LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u662Clicku9f1ad36108194a2b9850643e8f76ef52(event)'>已登录</div>");
function u662Clicku9f1ad36108194a2b9850643e8f76ef52(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u662LinksClick');
}

InsertBeforeEnd(u662LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u662Clicku732d9ff4319f44f0bb18d006bd5690e5(event)'>未登录</div>");
function u662Clicku732d9ff4319f44f0bb18d006bd5690e5(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u662LinksClick');
}
gv_vAlignTable['u662'] = 'top';gv_vAlignTable['u469'] = 'center';u655.tabIndex = 0;

u655.style.cursor = 'pointer';
$axure.eventManager.click('u655', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAttention.html');

}
});
gv_vAlignTable['u655'] = 'top';gv_vAlignTable['u471'] = 'center';u278.tabIndex = 0;

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u649'] = 'top';gv_vAlignTable['u44'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u464.tabIndex = 0;

u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u585.tabIndex = 0;

u585.style.cursor = 'pointer';
$axure.eventManager.click('u585', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "");

}
});

$axure.eventManager.mouseout('u585', function(e) {
if (!IsTrueMouseOut('u585',e)) return;
if (true) {

	SetPanelVisibility('u581','hidden','fade',500);

}
});
gv_vAlignTable['u585'] = 'top';gv_vAlignTable['u710'] = 'center';
$axure.eventManager.mouseout('u182', function(e) {
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelState('u177', 'pd0u177','none','',500,'none','',500);

}
});
gv_vAlignTable['u182'] = 'top';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u394'] = 'center';u107.tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u326.tabIndex = 0;

u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u316.tabIndex = 0;

u316.style.cursor = 'pointer';
$axure.eventManager.click('u316', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u632.tabIndex = 0;

u632.style.cursor = 'pointer';
$axure.eventManager.click('u632', u632Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u632LinksClick'></div>")
var u632LinksClick = document.getElementById('u632LinksClick');
function u632Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u632LinksClick');
}

InsertBeforeEnd(u632LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u632Clicku21e6887bf072414d84b9b079cac2055c(event)'>已登录</div>");
function u632Clicku21e6887bf072414d84b9b079cac2055c(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

	ToggleLinks(e, 'u632LinksClick');
}

InsertBeforeEnd(u632LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u632Clickuc2f65cf80a8c4d1099411de21e953e81(event)'>未登录</div>");
function u632Clickuc2f65cf80a8c4d1099411de21e953e81(e)
{

	SetPanelVisibility('u586','','fade',500);

	ToggleLinks(e, 'u632LinksClick');
}
gv_vAlignTable['u632'] = 'top';u513.tabIndex = 0;

u513.style.cursor = 'pointer';
$axure.eventManager.click('u513', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u388.tabIndex = 0;

u388.style.cursor = 'pointer';
$axure.eventManager.click('u388', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});

$axure.eventManager.mouseover('u110', function(e) {
if (!IsTrueMouseOver('u110',e)) return;
if (true) {

	SetPanelState('u100', 'pd1u100','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u110', function(e) {
if (!IsTrueMouseOut('u110',e)) return;
if (true) {

}
});
gv_vAlignTable['u110'] = 'top';u793.tabIndex = 0;

u793.style.cursor = 'pointer';
$axure.eventManager.click('u793', function(e) {

if (true) {

	self.location.href='#';

	NewTab($axure.globalVariableProvider.getLinkUrl('根据标签列文件.html'), "");

}
});
gv_vAlignTable['u793'] = 'top';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u725'] = 'center';u152.tabIndex = 0;

u152.style.cursor = 'pointer';
$axure.eventManager.click('u152', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u347.tabIndex = 0;

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u566'] = 'top';u129.tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u93.tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u315.tabIndex = 0;

u315.style.cursor = 'pointer';
$axure.eventManager.click('u315', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u534.tabIndex = 0;

u534.style.cursor = 'pointer';
$axure.eventManager.click('u534', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u741'] = 'center';u131.tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u350.tabIndex = 0;

u350.style.cursor = 'pointer';
$axure.eventManager.click('u350', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u369.tabIndex = 0;

u369.style.cursor = 'pointer';
$axure.eventManager.click('u369', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u555.tabIndex = 0;

u555.style.cursor = 'pointer';
$axure.eventManager.click('u555', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
HookHover('u708', false);
u371.tabIndex = 0;

u371.style.cursor = 'pointer';
$axure.eventManager.click('u371', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u742.tabIndex = 0;

u742.style.cursor = 'pointer';
$axure.eventManager.click('u742', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u742'] = 'top';document.getElementById('u768_img').tabIndex = 0;

u768.style.cursor = 'pointer';
$axure.eventManager.click('u768', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u696'] = 'center';
$axure.eventManager.mouseout('u34', function(e) {
if (!IsTrueMouseOut('u34',e)) return;
if (true) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

}
});
gv_vAlignTable['u34'] = 'top';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u812'] = 'center';gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u299'] = 'center';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u294.tabIndex = 0;

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u715'] = 'center';u481.tabIndex = 0;

u481.style.cursor = 'pointer';
$axure.eventManager.click('u481', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u288'] = 'center';gv_vAlignTable['u801'] = 'top';
u600.style.cursor = 'pointer';
$axure.eventManager.click('u600', function(e) {

if (true) {

	SetPanelVisibility('u586','hidden','fade',500);

	SetPanelState('u567', 'pd1u567','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u406', function(e) {
if (!IsTrueMouseOut('u406',e)) return;
if (true) {

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

}
});
gv_vAlignTable['u406'] = 'top';gv_vAlignTable['u252'] = 'center';u222.tabIndex = 0;

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u441.tabIndex = 0;

u441.style.cursor = 'pointer';
$axure.eventManager.click('u441', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u247', function(e) {
if (!IsTrueMouseOver('u247',e)) return;
if (true) {

	SetPanelState('u237', 'pd1u237','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u247', function(e) {
if (!IsTrueMouseOut('u247',e)) return;
if (true) {

}
});
gv_vAlignTable['u247'] = 'top';
$axure.eventManager.mouseover('u466', function(e) {
if (!IsTrueMouseOver('u466',e)) return;
if (true) {

	SetPanelState('u456', 'pd1u456','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u466', function(e) {
if (!IsTrueMouseOut('u466',e)) return;
if (true) {

}
});
gv_vAlignTable['u466'] = 'top';
$axure.eventManager.mouseover('u83', function(e) {
if (!IsTrueMouseOver('u83',e)) return;
if (true) {

	SetPanelState('u73', 'pd1u73','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u83', function(e) {
if (!IsTrueMouseOut('u83',e)) return;
if (true) {

}
});
gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u653'] = 'top';u69.tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u427'] = 'center';u646.tabIndex = 0;

u646.style.cursor = 'pointer';
$axure.eventManager.click('u646', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyDisk.html');

}
});
gv_vAlignTable['u646'] = 'top';
$axure.eventManager.mouseout('u209', function(e) {
if (!IsTrueMouseOut('u209',e)) return;
if (true) {

	SetPanelState('u204', 'pd0u204','none','',500,'none','',500);

}
});
gv_vAlignTable['u209'] = 'top';
$axure.eventManager.mouseout('u428', function(e) {
if (!IsTrueMouseOut('u428',e)) return;
if (true) {

	SetPanelState('u423', 'pd0u423','none','',500,'none','',500);

}
});
gv_vAlignTable['u428'] = 'top';u243.tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u462.tabIndex = 0;

u462.style.cursor = 'pointer';
$axure.eventManager.click('u462', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u269', function(e) {
if (!IsTrueMouseOver('u269',e)) return;
if (true) {

	SetPanelState('u259', 'pd1u259','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u269', function(e) {
if (!IsTrueMouseOut('u269',e)) return;
if (true) {

}
});
gv_vAlignTable['u269'] = 'top';u430.tabIndex = 0;

u430.style.cursor = 'pointer';
$axure.eventManager.click('u430', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u455', function(e) {
if (!IsTrueMouseOver('u455',e)) return;
if (true) {

	SetPanelState('u445', 'pd1u445','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u455', function(e) {
if (!IsTrueMouseOut('u455',e)) return;
if (true) {

}
});
gv_vAlignTable['u455'] = 'top';gv_vAlignTable['u674'] = 'center';
u608.style.cursor = 'pointer';
$axure.eventManager.click('u608', function(e) {

if (true) {

	SetPanelVisibility('u604','hidden','fade',500);

}
});
gv_vAlignTable['u642'] = 'top';gv_vAlignTable['u449'] = 'center';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u162.tabIndex = 0;

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u42'] = 'center';
$axure.eventManager.mouseover('u165', function(e) {
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u155', 'pd1u155','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u165', function(e) {
if (!IsTrueMouseOut('u165',e)) return;
if (true) {

}
});
gv_vAlignTable['u165'] = 'top';u385.tabIndex = 0;

u385.style.cursor = 'pointer';
$axure.eventManager.click('u385', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
u784.tabIndex = 0;

u784.style.cursor = 'pointer';
$axure.eventManager.click('u784', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u784'] = 'top';gv_vAlignTable['u126'] = 'center';u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});
gv_vAlignTable['u416'] = 'center';u749.tabIndex = 0;

u749.style.cursor = 'pointer';
$axure.eventManager.click('u749', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
gv_vAlignTable['u749'] = 'top';gv_vAlignTable['u381'] = 'center';
$axure.eventManager.mouseout('u313', function(e) {
if (!IsTrueMouseOut('u313',e)) return;
if (true) {

	SetPanelState('u308', 'pd0u308','none','',500,'none','',500);

}
});
gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u593'] = 'top';u500.tabIndex = 0;

u500.style.cursor = 'pointer';
$axure.eventManager.click('u500', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('查看文件信息.html'), "");

}
});

$axure.eventManager.mouseover('u154', function(e) {
if (!IsTrueMouseOver('u154',e)) return;
if (true) {

	SetPanelState('u144', 'pd1u144','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u154', function(e) {
if (!IsTrueMouseOut('u154',e)) return;
if (true) {

}
});
gv_vAlignTable['u154'] = 'top';u525.tabIndex = 0;

u525.style.cursor = 'pointer';
$axure.eventManager.click('u525', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
gv_vAlignTable['u780'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u553'] = 'center';gv_vAlignTable['u799'] = 'top';u48.tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});

$axure.eventManager.mouseout('u302', function(e) {
if (!IsTrueMouseOut('u302',e)) return;
if (true) {

	SetPanelState('u297', 'pd0u297','none','',500,'none','',500);

}
});
gv_vAlignTable['u302'] = 'top';
$axure.eventManager.mouseout('u521', function(e) {
if (!IsTrueMouseOut('u521',e)) return;
if (true) {

	SetPanelState('u516', 'pd0u516','none','',500,'none','',500);

}
});
gv_vAlignTable['u521'] = 'top';u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u546.tabIndex = 0;

u546.style.cursor = 'pointer';
$axure.eventManager.click('u546', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
u109.tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u328.tabIndex = 0;

u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

	SetPanelVisibility('u676','','fade',500);

}
});
u91.tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});

$axure.eventManager.mouseover('u143', function(e) {
if (!IsTrueMouseOver('u143',e)) return;
if (true) {

	SetPanelState('u133', 'pd1u133','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u143', function(e) {
if (!IsTrueMouseOut('u143',e)) return;
if (true) {

}
});
gv_vAlignTable['u143'] = 'top';
$axure.eventManager.mouseover('u362', function(e) {
if (!IsTrueMouseOver('u362',e)) return;
if (true) {

	SetPanelState('u352', 'pd1u352','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u362', function(e) {
if (!IsTrueMouseOut('u362',e)) return;
if (true) {

}
});
gv_vAlignTable['u362'] = 'top';
u733.style.cursor = 'pointer';
$axure.eventManager.click('u733', function(e) {

if (true) {

	SetPanelVisibility('u690','hidden','fade',500);

}
});
HookHover('u701', false);

$axure.eventManager.mouseover('u574', function(e) {
if (!IsTrueMouseOver('u574',e)) return;
if (true) {

	SetPanelVisibility('u581','','fade',500);

}
});

$axure.eventManager.mouseout('u171', function(e) {
if (!IsTrueMouseOut('u171',e)) return;
if (true) {

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

}
});
gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u542'] = 'center';document.getElementById('u761_img').tabIndex = 0;

u761.style.cursor = 'pointer';
$axure.eventManager.click('u761', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u349.tabIndex = 0;

u349.style.cursor = 'pointer';
$axure.eventManager.click('u349', function(e) {

if (true) {

	SetPanelVisibility('u690','','fade',500);

}
});
gv_vAlignTable['u568'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('浏览用户.html'), "");

}
});
u629.tabIndex = 0;

u629.style.cursor = 'pointer';
$axure.eventManager.click('u629', function(e) {

if (true) {

	SetPanelVisibility('u604','hidden','fade',500);

	SetPanelVisibility('u586','','fade',500);

}
});
u570.tabIndex = 0;

u570.style.cursor = 'pointer';
$axure.eventManager.click('u570', function(e) {

if (true) {

	NewTab($axure.globalVariableProvider.getLinkUrl('Help.html'), "");

}
});
gv_vAlignTable['u570'] = 'top';gv_vAlignTable['u748'] = 'center';gv_vAlignTable['u764'] = 'top';