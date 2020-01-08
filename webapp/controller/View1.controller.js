

sap.ui.define([
                "sap/ui/core/mvc/Controller",
                "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
                "use strict";

                var SplitterController = Controller.extend("Assign_disp_list_on_click.Assign_disp_list_on_click.controller.View1", {
                                onInit: function () {
        var oEmpData = 
                                                {
                       emp: [{
                                                empid: "1235",
                                                empname: "Raj Sharma"
                                },
                                {
                                                empid: "2345",
                                                empname: "Sneha Patil"
                                },
                                {
                                                empid: "3456",
                                                empname: "Priya More"
                                }
                ]
};


// Create an instance of JSON Model using the Employee data available above.
var oModel = new JSONModel(oEmpData);
// Set the Model to the current view so that Model's data is available to 
// the entire view. It means any control within that view can use this 
// Model's data for binding unless another Model is bound to that specific control.
this.getView().setModel(oModel);
                                
                                },
                                onItemPress:function(oEvent)
                                {
                                                var oItem = oEvent.getSource();
                                                var oCtx = oItem.getBindingContext();
                                                var path = oCtx.getPath();
                                                this.getView().byId("objectid").bindElement(path);
                                                // alert(oEvent.getSource());
                                }
                });
                return SplitterController;
});
