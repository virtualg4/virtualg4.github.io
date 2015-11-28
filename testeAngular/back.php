<?php

		header('Access-Control-Allow-Origin: *');
		header('Content-Type: text/html');
		
		$contatos = '[
		{"nome": "pedro DAS silva","telefone":"95736353","data":"November 10, 2015 12:47:00","operadora":{"nome":"Oi","codigo":"10"}},
		{"nome": "Maria carmo","telefone":"934363353","data":"November 10, 2015 12:47:00","operadora":{"nome":"Claro","codigo":"11"}},
		{"nome": "Carlos jAO","telefone":"923363353","data":"November 10, 2015 12:47:00","operadora":{"nome":"Tim","codigo":"12"}}]';
		
		
		echo $contatos;
?>