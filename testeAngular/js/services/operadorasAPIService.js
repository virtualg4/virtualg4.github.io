angular.module("listaTelefonica").service("operadorasAPI", function($http, config){
		this.getOperadoras = function(page){
				return $http.get(config.baseUrl  + (page ? page : config.baseOperadora));
				//return $http.get(config.baseUrl  + page);
		};
});