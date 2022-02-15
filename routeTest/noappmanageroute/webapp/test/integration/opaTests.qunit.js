/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["no/app/manage/route/noappmanageroute/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
