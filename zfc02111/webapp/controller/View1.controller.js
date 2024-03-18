sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("sync04.zfc02111.controller.View1", {
            onInit: function () {
                let oData={
                    cInfo:{
                        Class: "400001",
                        Cname: "SYNC4-1",
                        Clocat: "L01"
                    }
                };
                let oJSONModel = new JSONModel();
                oJSONModel.setData( oData );
                this.getView().setModel(oJSONModel, "create");
            },

            onCreate: function(){

                let oCreateModel = this.getView().getModel("create");
                oCreateModel = oCreateModel.getData();
                let oModel = this.getView().getModel();
                let sPath = '/esClassSet';
                let oEntry = {
                    "Class": oCreateModel.cInfo.Class, 
                    "Cname": oCreateModel.cInfo.Cname,
                    "Clocat": oCreateModel.cInfo.Clocat
                };
                oModel.create(
                    sPath,
                    oEntry,
                    {
                        success: function( oData, oResponse ){
                            let sFlag = oData.Sflag;
                            let sMesg = oData.Smesg;
                            MessageBox.show(sMesg, {
                                    title : sFlag
                            });

                        },

                        
        
                        error: function(){
                            alert("Exception Error"); // SAP Gateway oModel Fail
                        }
                    }

                );
               
            }
        });
    });
