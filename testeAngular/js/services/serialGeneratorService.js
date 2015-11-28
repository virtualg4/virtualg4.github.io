angular.module("listaTelefonica").provider("serialGenerator", function(){
	
	var leng = 5;
	this.getLength = function(){
		return leng;
	}
	this.setLength = function(newLeng){
		leng = newLeng;
	}

	this.$get = function(){
			return {
				generate: function(){
						// 0-9 --> 48 - 57 
						// A-Z --> 65 - 90 
						// a-z --> 97 - 122 
						var serial="";
						
						while(serial.length <  leng) {
							a = Math.floor(Math.random() * 122);
							if( (a >= 48 && a<=57) || (a >=97 && a<=122)){
									serial += String.fromCharCode(a);
							}
						}

						//serial = serial.toUpperCase();
						return serial;
				}
			}
	}
});