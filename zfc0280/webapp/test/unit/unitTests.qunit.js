/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync04/zfc0280/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
