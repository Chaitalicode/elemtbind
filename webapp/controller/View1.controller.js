sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("EB.elemtbind.controller.View1", {
		onInit: function () {

		},
		
		onAfterRendering : function(){ 
			debugger;
			$("#__table0").fadeOut(1000).fadeIn(2000);
		},
		onSelectItem: function(oEvent){
			debugger;
			var a = oEvent.getParameter("listItem").getBindingContext().getPath();
			var s = this.getView().byId("listId");
			s.bindElement(a);
		}
	});
});