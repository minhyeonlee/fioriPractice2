sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc02120.controller.View1", {
            onInit: function () {
                // Default Value
                // let oView = this.getView().byId("inpCondClass");
                // oView.setValue("400001");
                // Update Model Setting
                let oData={
                    uInfo:{
                    }
                }
                let oJSONModel = new JSONModel();
                oJSONModel.setData( oData );
                this.getView().setModel(oJSONModel, "update")
            },
            onSearch: function(){
                // let classNo = this.getView().byId("inpClass").getValue();
                // let sPath = "/esClassSet('" + classNo + "')"; 
                // let oPanel = this.getView().byId("idPanel");
                // oPanel.bindElement(sPath);
                // 강사님 코드
                // let oView = this.getView();
                // let inpClassValue = oView.byId("inpCondClass").getValue();
                // let sPath = "/esClassSet(Class='" + inpClassValue + "')"; // Key가 1개여서 Class=을 생략해도됨.
                // oView.byId("PanelUpd").bindElement( sPath );
                // 화면에 Direct 연결하는 경우 Error 발생 처리가 어려움
                // read는 객체 정보 받아오기, 배열정보 받아오기 2가지 방식이 있음.
                // 괄호에 key를 주면 entity 호출, key를 안주면 entitySet 호출

                // Quiz
                let oUpdateModel = this.getView().getModel("update");
                oUpdateModel = oUpdateModel.getData();

                let oView = this.getView();
                let inpClassValue = oView.byId("inpCondClass").getValue();
                let sPath = "/esClassSet('" + inpClassValue + "')";

                let oModel = oView.getModel();
                oModel.read(sPath, {
                    method: "Get",
                    success: function( oData ){
                        oView.getModel("update").setProperty('/uInfo', oData);
                        oView.byId("PanelUpd").bindElement("update>/uInfo");

                    },
                    error: function( oData ){
                        oView.getModel("update").setProperty('/uInfo', oData);
                        oView.byId("PanelUpd").refresh();
                    }

                });
            }
        });
    });
