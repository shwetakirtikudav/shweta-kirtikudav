/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Assign_Emp_portal/Assign_Emp_portal/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});