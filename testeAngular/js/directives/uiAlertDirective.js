angular.module("listaTelefonica").directive("uiAlert", function(){
		return {
				templateUrl: "view/alert.html",
				replace: true,
				//restrict: "EA",
				scope: {
						title:"@title"
						// error:"=error"
				},
				transclude: true
				//restrict: ""
		};
});