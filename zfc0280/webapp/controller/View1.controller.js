sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0280.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData( "../model/data.json" );
                this.getView().setModel( oModel );
            },
            onClick: function (oEvt) {
                let oContext = oEvt.getSource().getBindingContext();
                let oModel = this.getView().getModel();
                let selClass = oModel.getProperty( "Class", oContext );
                // == oContext.getProperty().Class
                alert(selClass);                
            }
        });
    });
