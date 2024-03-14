/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync04/zfc0290/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
