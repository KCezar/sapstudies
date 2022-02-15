/*global QUnit*/

sap.ui.define([
	"noappmanageroute/noappmanageroute/controller/NoAppManageRoute.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NoAppManageRoute Controller");

	QUnit.test("I should test the NoAppManageRoute controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
