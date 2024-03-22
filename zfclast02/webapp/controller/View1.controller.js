sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("sync04.zfclast02.controller.View1", {
            onInit: function () {

            },
            onSearch: function (){
                // 항공사 매출 연도별 검색
                let oCond = this.getView().byId("inpCond").getSelectedKey();
                let oTable = this.getView().byId("idTabRev");
                let oFilter = new sap.ui.model.Filter("Syear", "EQ", oCond);
                oTable.getBinding("items").filter(oFilter);
                
            },
            onClick: function( oEvent ){
                // 선택한 항공사 정보 가져오기
                let oContext = oEvent.getSource().getBindingContext();
                let oModel = this.getView().getModel();
                let selCarrid = oModel.getProperty( "Carrid", oContext );

                // 항공사 매출 연도별 검색 Filter
                let oTable = this.getView().byId("idTabYear");
                let oFilter = new sap.ui.model.Filter("Carrid", "EQ", selCarrid);
                oTable.getBinding("items").filter(oFilter);

            }
        });
    });
