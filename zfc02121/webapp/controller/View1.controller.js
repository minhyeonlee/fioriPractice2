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
                // Default Value
                // let oView = this.getView().byId("inpCondClass");
                // oView.setValue("400001");
                // Update Model Setting
                let oData={
                    sInfo:{
                    }
                }

                let oJSONModel = new JSONModel();
                oJSONModel.setData( oData );
                this.getView().setModel(oJSONModel, "update")
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
                        // oView.getModel("update").setProperty('/uInfo', oData);
                        // oView.byId("PanelUpd").refresh();
                    }

                });
            },
            onUpdate: function(){
                let oUpdateModel = this.getView().getModel("update");
                let oUpdateData = oUpdateModel.getData();
                let oModel = this.getView().getModel();
                let oEntry={
                    "Cname": oUpdateData.uInfo.Cname,
                    "Clocat": oUpdateData.uInfo.Clocat
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