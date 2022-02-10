sap.ui.define([], function () {
	"use strict";

	return {

		formatIconUrl:function(employeeNumber,urlPath){
			var url;
			url = urlPath+"employeeSet('"+employeeNumber+"')/$value";
			return url;
		}

	};
});