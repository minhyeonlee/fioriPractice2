sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc0291.controller.View1", {
            onInit: function () {
                let oPanel = this.getView().byId("idPanel");
                oPanel.bindElement("/esStdSet('24040001')");

            },
            onSearch: function ( Event ) {
                let stdno = this.getView().byId("inpStdno").getValue();
                let sPath = "/esStdSet('" + stdno + "')";
                alert( sPath );
                let oPanel = this.getView().byId("idPanel");
                oPanel.bindElement(sPath);
            }
        });
    });
