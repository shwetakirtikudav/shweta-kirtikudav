/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Assign_disp_list_on_click/Assign_disp_list_on_click/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});