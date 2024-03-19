sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync04.zfc02120.controller.View1", {
            onInit: function () {
                // Default Value
                let oView = this.getView().byId("inpCondClass");
                oView.setValue("400001");
            },
            onSearch: function(){
                // let classNo = this.getView().byId("inpClass").getValue();
                // let sPath = "/esClassSet('" + classNo + "')"; 
                // let oPanel = this.getView().byId("idPanel");
                // oPanel.bindElement(sPath);
                // 강사님 코드
                let oView = this.getView();
                let inpClassValue = oView.byId("inpCondClass").getValue();
                // Key가 1개여서 Class=을 생략해도됨.
                let sPath = "/esClassSet(Class='" + inpClassValue + "')";
                alert(sPath); // /esClassSet('400001')
                oView.byId("PanelUpd").bindElement( sPath );
            }
        });
    });
