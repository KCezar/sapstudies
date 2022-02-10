/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["route/test/routeapp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
