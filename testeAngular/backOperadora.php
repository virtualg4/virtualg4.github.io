<?php

		header('Access-Control-Allow-Origin: *');
		header('Content-Type: text/html');
		
		$operadora = '[{"nome": "Oi", 		"codigo": "10", "categoria": "Celular",	"preco": "2"}, {"nome": "Vivo", 	"codigo": "11", "categoria": "Celular",	"preco": "1"}, {"nome": "Tim", 	"codigo": "12", "categoria": "Fixo",	"preco": "3"}, {"nome": "Claro",   "codigo": "13", "categoria": "Fixo",	"preco": "7"} ]';
		
		
		echo $operadora;
?>