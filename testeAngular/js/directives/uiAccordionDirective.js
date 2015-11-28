angular.module("listaTelefonica").directive("uiAccordions", function(){

	return{
			controller: function($scope, $elements, $attrs){

			}
	};

});

angular.module("listaTelefonica").directive("uiAccordion", function(){
		return {
				templateUrl: "view/accordion.html",
				transclude:true,
				scope: {
					title: "@title"
				},
				require: "^uiAccordions",
				link: function(scope, elements, attrs, ctrl){
						scope.open = function(){
								scope.isOpened = !scope.isOpened;
						}
						
				}
				

		};
});