/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapdemoprimersapui5/primersapui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
