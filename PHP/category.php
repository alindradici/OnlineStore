<?php
	
	$conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');
	
	$nume = $_GET['nume'];
	$categorie = $_GET['categorie'];
	$idsubcat = substr($nume, 0, 3);
	
	
	$query ="INSERT INTO submenu (nume,categorie,idsubcat) VALUES ('$nume','$categorie','$idsubcat')";
	
	mysql_query($query,$conn);
	mysql_close($conn);


?>