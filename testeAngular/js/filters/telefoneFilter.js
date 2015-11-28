angular.module("listaTelefonica").filter("telefone", function(){
		return function(input){
				
				// if(/^\d{8}$/.test(input)){
				// 		novoTele = input.substring(0,4) + "-" + input.substring(4);
				// }else if(/^\d{9}$/.test(input)){
				// 		novoTele = input.substring(0,1) + "-" + input.substring(1,5) + "-" + input.substring(5);
				// }else{
				// 	return input;
				// }

				// return novoTele;
				var regEx = /(\d*)(\d{4})(\d{4})$/;
				leng = input.length;

				novoTele = input.replace(regEx, "$1" + (leng==9?" ":"")+"$2-$3");
				return novoTele;
		};
});