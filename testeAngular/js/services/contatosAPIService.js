angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
			// return $http.get("http://127.0.0.1:8080/testeAngular/back.php");
			return $http.get(config.baseUrl + config.baseContato);
	}

	return {
		getContatos: _getContatos
	};
});

















/*
	var pessoa = {
		nome: "Pedro",
		idade: 16
	}

	console.log(pessoa);
	
	//Factory Function
	var criarPessoa = function(nome, idade){
		return {
				nome: nome,
				idade: idade
		};
	}
	var maria = criarPessoa("Maria", 20);
*/