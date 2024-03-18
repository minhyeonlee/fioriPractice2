sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc02110.controller.View1", {
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
                // Default Model은 GateWay Model이므로, JSONMODEL 추가로 할 때는 이름을 선언해줘야함(create 등)
                this.getView().setModel(oJSONModel, "create");
            },
            onCreate: function(){
                let oCreateModel = this.getView().getModel("create");
                oCreateModel = oCreateModel.getData();
                // alert( oCreateModel.cInfo.Class + oCreateModel.cInfo.Cname + oCreateModel.cInfo.Clocat);
                // Model에 이름안주면 Default Model
                // Model, Entity, Entry(객체/값)
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
                        // success, error event
                        // oModel function 호출이되면 success로 인식함.
                        success: function( oData, oResponse ){
                            alert("Success");
                        },
                        error: function(){
                            alert("Exception Error"); // SAP Gateway oModel Fail
                        }
                    }

                );
            }
        });
    });
