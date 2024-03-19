sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc02121.controller.View1", {
            onInit: function () {
                let oData={
                    uInfo:{}
                }

                let oJSONModel = new JSONModel();
                oJSONModel.setData( oData );
                this.getView().setModel(oJSONModel, "update");

                // let oDate =  new Date();
                // alert(oDate);
            },
            onSearch: function(){


                // Quiz
                let oUpdateModel = this.getView().getModel("update");
                oUpdateModel  = oUpdateModel.getData();

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
                        alert("Exception Error");
                        oView.getModel("update").setProperty('/uInfo', oData);
                        oView.byId("PanelUpd").refresh();
                    }

                });
            },
            onUpdate: function(){
                let oUpdateModel = this.getView().getModel("update");
                let oUpdateData = oUpdateModel.getData();
                let oModel = this.getView().getModel();
                let oYear = oUpdateData.uInfo.Begda.substr(0,4);
                let oMonth = oUpdateData.uInfo.Begda.substr(5,2);
                let oDay = oUpdateData.uInfo.Begda.substr(8,2);
                let oDate = oYear + oMonth + oDay;
                alert( oDate);
                //alert(oYear + oMonth + oDay);
                // Data (Input의 값을 Direct로 읽어오는경우, Model에 있는 값을 읽어오는 경우)
                // let valDate = this.getView().byId("inpUpdBegda").getValue();
                // 1) Input을 Direct로 읽어옴
                // 2) Model에 Binding된 Data를 읽어옴
                // alert(valDate);
                // alert(oUpdateData.uInfo.Begda); //강사님은 이걸 선호함
                // alert(oUpdateData.uInfo.Begda.substr(0,4));

                
                let oEntry={
                    "Cname": oUpdateData.uInfo.Cname,
                    "Clocat": oUpdateData.uInfo.Clocat,
                    //"Begda" : c // 20240318로 들어감, 20240318로 넣으면 타입이 안맞아서 exception 오류
                    "BegdaT" : oDate // "2024-03-01" T에 넣고 아밥에서 ls_begda = ls_ztfc0299-begda = ls_ui5-begda_t.
                };
                let sPath = oModel.createKey('/esClassSet', {
                    "Class": oUpdateData.uInfo.Class
                });
                oModel.update(
                    sPath, oEntry,
                    {
                        success: function( oData, oResponse){
                            //oData 없음
                            if( oResponse.headers.smesg != undefined ){
                                alert(oResponse.headers.smesg);
                            }
                        },
                        error: function(){
                            alert("Exception Error");
                        }
                    }
                );
            }

        });
    });