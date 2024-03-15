sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc0290.controller.View1", {
            onInit: function () {

            },
            onSearch: function(){
                let inpLoc = this.getView().byId("inpLoc").getValue();
                let oTable = this.getView().byId("idTabClass");
                // SAP Filter Operator의 함수임(BT, EQ), BT: Between, EQ: Equal
                 // Filter 연결(1. 값이 모두 있는 상태에서 필터, 2. 필터 후 필터에 적합한 값만 가져옴)
                let oFilter = new sap.ui.model.Filter("Clocat", "EQ", inpLoc); 
                oTable.getBinding("items").filter( oFilter );

            }
        });
    });
