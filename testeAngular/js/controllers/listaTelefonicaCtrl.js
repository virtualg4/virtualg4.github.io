angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
	 $scope.msg = "Lista Telefonica";
	 // $scope.contatos = [
	 // {nome: "pedro DAS silva", 	telefone: "957363353", data: new Date(), operadora: {nome: "Oi", codigo: "10"}},
	 // {nome: "Ana carla", 		telefone: "957363353", data: new Date(), operadora: {nome: "Vivo", codigo: "11"}},
	 // {nome: "Maria rocha", 	telefone: "957363353", data: new Date(), operadora: {nome: "Tim", codigo: "12"}}
	 // ];
	 
	 $scope.contatos = [];

	 var carregaContato = function(){
				contatosAPI.getContatos().success(function(data, status){
					$scope.contatos = data;
				}).error(function(data, status){
						$scope.error = data;
				});
	};

	 // $scope.operadoras = [
	 // 	{nome: "Oi", 	codigo: "10", categoria: "Celular",	preco: "2"},
	 // 	{nome: "Vivo", 	codigo: "11", categoria: "Celular",	preco: "1"},
	 // 	{nome: "Tim", 	codigo: "12", categoria: "Fixo",	preco: "3"},
	 // 	{nome: "Claro", codigo: "13", categoria: "Fixo",	preco: "7"}
	 // ];
	 
	 $scope.operadoras = [];
  	 var carregaOperadora = function(){
 	 		// $http.get("http://127.0.0.1:8080/testeAngular/backOperadora.php").success(function(data, status){
 	 		operadorasAPI.getOperadoras().success(function(data, status){
	 			//console.log(data);
	 			$scope.operadoras = data;
			});
 	 };
	 

		$scope.adicionarContato = function(contato){
			// var d = new Date();
			// contato.data = d;
			var s = serialGenerator.generate();
			contato.serial = s;

			$scope.contatos.push(angular.copy(contato));
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
		};
		$scope.apagarContato = function(contatos){
				// var contatosSelecionados = contatos.filter(function(elemento){
				$scope.contatos = contatos.filter(function(elemento){
						if(!elemento.selecionado) return elemento;
				});
				// $scope.contatos = contatosSelecionados;

		};
		$scope.isContatoSelecionado = function(contatos){
				//var isContatoSelecionado = contatos.some(function(item){
				return !contatos.some(function(item){
						return item.selecionado;
				});
				console.log(isContatoSelecionado);

		};
		$scope.ordenarPor = function(campo){
				$scope.ordenarPorCampo = campo;
				$scope.direcao = !$scope.direcao;
		};
		
		$scope.mostraAlerta = function(url){
				// $http.get(url).success(function(data, status){
				// 		alert(data);
				// });
			console.log($scope.contatos);
			console.log(JSON.parse($scope.contatos));
		};

		//$http.get("http://127.0.0.1:8080/testeAngular/back.php").success(function(data, status){
		

		

		carregaContato();
		carregaOperadora();

		makeSerial = function(leng){
				// 0-9 --> 48 - 57 
				// A-Z --> 65 - 90 
				// a-z --> 97 - 122 
				var serial="";
				
				if(!leng) leng = 5;

				while(serial.length <  leng) {
					a = Math.floor(Math.random() * 122);
					if( (a >= 48 && a<=57) || (a >=97 && a<=122)){
							serial += String.fromCharCode(a);
					}
				}

				//serial = serial.toUpperCase();
				return serial;
		};

});