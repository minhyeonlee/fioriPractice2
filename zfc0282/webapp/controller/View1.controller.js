sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc0282.controller.View1", {
            onInit: function () {

            },
            onSelectChange: function(){
                let inpLoc = this.getView().byId("inpLoc").getValue();
                let oTable = this.getView().byId("idTabClass");
                let oFilter = new sap.ui.model.Filter("Clocat", "EQ", inpLoc); 
                oTable.getBinding("items").filter( oFilter );
            }
        });
    });
