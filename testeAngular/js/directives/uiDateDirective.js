angular.module("listaTelefonica").directive("uiDate", function(){
		return{
			require: "ngModel",
			link: function(scope, elements, attrs, ctrl){
				// console.log("Scope: " + scope.$id);
				// console.log(elements);
				// console.log(attrs);
				var _formatDate = function(date){
					date = date.replace(/[^0-9]/g, "");
					// 10/10/2015
					if(date.length > 2){
							date = date.substring(0,2) + "/" + date.substring(2);
					}
					if(date.length>5){
						date = date.substring(0,5) + "/" + date.substring(5,9);	
					}
					return date;
				}
				elements.bind("keyup", function(){
						// console.log(ctrl.$viewValue);
						ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
						ctrl.$render();
				});
				ctrl.$parsers.push(function(value){
						if(value.length==10){
							//console.log(value);
							var dateArray = value.split("/");

							return new Date(dateArray[2], dateArray[1]-1, dateArray[0]);
						}
				});
				

			}
		}
});