angular.module("listaTelefonica").filter("name", function(){
	return function(input){
			var listaNomes = input.split(" ");
			var listaNomesTeste = listaNomes;

		
			var novaListaNomes = listaNomes.map(function(nome){
						if(/d[aeiou]s*/.test(nome.toLowerCase())){
								return nome.toLowerCase();
						}
						return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
			});

			
			return novaListaNomes.join(' ');

	}
});