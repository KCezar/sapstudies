/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["app/route/manage/approutemanagetest/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
