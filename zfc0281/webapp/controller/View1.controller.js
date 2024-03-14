sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0281.controller.View1", {
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
                
                //선택한 Class에 속한 학생 정보만 띄우기 => filter 적용
                let oTable = this.getView().byId("idTabConn");

                //Filter는 ABAP Base, 4개의 속성 ~~ Selection Options
                //여기서는 EQ니까 high가 필요하지 않음
                //이 속성에 EQ 방식으로 저 값을 가진 것만 filter
                let oFilter = new sap.ui.model.Filter(
                    "Stcla", "EQ", selClass
                );
                oTable.getBinding( "items" ).filter( oFilter ); //items에 filter 설정
            }
        });
    });
