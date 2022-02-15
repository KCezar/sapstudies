/*global QUnit*/

sap.ui.define([
	"approutemanage/approutemanagetest/controller/AppRouterManage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppRouterManage Controller");

	QUnit.test("I should test the AppRouterManage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
