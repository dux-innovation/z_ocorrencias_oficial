sap.ui.define(["sap/ui/core/mvc/Controller",'sap/ui/model/json/JSONModel'], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("generated.app.controller.list_ocorr", {

		onInit: function(oView) {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("list_ocorr").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
            
		},
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}

			}

		},
		_onNavButtonPressSapResponsivePage0: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("list_ocorr", oBindingContext);

		},
		doNavigate: function(sRouteName, oBindingContext) {

			var that = this;
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var entityNameSet;
			if (sPath !== null && sPath !== "") {

				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				entityNameSet = sPath.split("(")[0];
			}
			var navigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (entityNameSet !== null) {
				navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
			}
			if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
				if (navigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
						sPath = bindingContext.getPath();
						if (sPath.substring(0, 1) === "/") {
							sPath = sPath.substring(1);
						}
						that.oRouter.navTo(sRouteName, {
							context: sPath,
							masterContext: sMasterContext
						}, false);
					});
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}
		},
		onClickItem: function(oEvent){
    		this.oRouter.navTo("details_ocorr", {
    			from: "generated.app.view.list_ocorr",
    			id: oEvent.getParameters().listItem.getBindingContext().getPath().substr(1),
    			tab: null
    		});
		},
		_onPressSapResponsivePage0contentsapmList1462815030354itemssapmObjectListItem1: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("1462818173610_S1", oBindingContext);

		},
		navigateToDetails: function(){
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("details_ocorr", oBindingContext);
		},
		navigateToForm: function(){
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("ocorr_form", oBindingContext);
		},
		formatDate : function(v) {  
            var data = new Date(parseInt(v.replace(/[^0-9\.]+/g, ''))); 
            var dia = data.getDate();
            var mes = data.getMonth();
            var ano = data.getFullYear();
            data = dia + '/' + (mes++) + '/' + ano;
            
            return data;  
        }  
	});
}, /* bExport= */ true);