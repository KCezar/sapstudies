/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"approutemanage/approutemanagetest/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
