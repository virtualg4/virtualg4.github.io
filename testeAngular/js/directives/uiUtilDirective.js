angular.module("listaTelefonica").directive("uiUtil", function(){
		return{
			require: "ngModel",
			link: function(scope, elements, attrs, ctrl){
				// console.log("Scope: " + scope.$id);
				// console.log(elements);
				// var _formatDate = function(date){
				// 	date = date.replace(/[^0-9]/g, "");
				// 	// 10/10/2015
				// 	if(date.length > 2){
				// 			date = date.substring(0,2) + "/" + date.substring(2);
				// 	}
				// 	if(date.length>5){
				// 		date = date.substring(0,5) + "/" + date.substring(5,9);	
				// 	}
				// 	return date;
				// }
				// elements.bind("keyup", function(){
				// 		// console.log(ctrl.$viewValue);
				// 		ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				// 		ctrl.$render();
				// });
				// ctrl.$parsers.push(function(value){
				// 		if(value.length==10){
				// 			//console.log(value);
				// 			var dateArray = value.split("/");

				// 			return new Date(dateArray[2], dateArray[1]-1, dateArray[0]);
				// 		}
				// });
				rgExOnlyNum = /[^0-9]/g;

				var _formatTelefone = function(telefone){
						if (!telefone) {telefone=""};
						telefone = telefone.replace(rgExOnlyNum, "");

						if(telefone.length > 8){
								telefone = telefone.substring(0,5) + "-" + telefone.substring(5,9);
						}else if(telefone.length > 4){
								telefone = telefone.substring(0,4) + "-" + telefone.substring(4,8);
						}
						return telefone;
				};
				var _formatCpf = function(cpf){
						if (!cpf) {cpf=""};
						cpf = cpf.replace(rgExOnlyNum, "");
						
						if(cpf.length > 9){
								cpf = cpf.substring(0,9) + "-" + cpf.substring(9,11);
				
						}
						if(cpf.length > 6){
								cpf = cpf.substring(0,6) + "." + cpf.substring(6);
		
						}
						if(cpf.length > 3){
								cpf = cpf.substring(0,3) + "." + cpf.substring(3);
								
						}
						


						return cpf;

				};
				valAcao = attrs.uiUtil.toLowerCase();
				elements.bind("keyup", function(){
						
						switch(valAcao){
						case "telefone":
							ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
							break;
						case "cpf":
							ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
							break;
						default:
							break;
						}
						ctrl.$render();
				});

	
			}
		}
});