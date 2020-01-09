/*global QUnit*/

sap.ui.define([
	"Assign_Emp_portal/Assign_Emp_portal/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});