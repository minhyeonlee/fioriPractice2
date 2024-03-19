sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc02120.controller.View1", {
            onInit: function () {
                // Default Value
                let oView = this.getView().byId("inpClass");
                oView.setValue("400001");
            },
            onSearch: function(){
                let classNo = this.getView().byId("inpClass").getValue();
                let sPath = "/esClassSet('" + classNo + "')"; 
                let oPanel = this.getView().byId("idPanel");
                oPanel.bindElement(sPath);
            }
        });
    });
