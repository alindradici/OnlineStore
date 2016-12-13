<?php
	
	session_start();
	
	$conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');
	
	
	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$query =  "SELECT nume,pret FROM electrocasnice WHERE id='$id'";
	$result = mysql_query($query,$conn);
	$output='';
	
	while($row = mysql_fetch_array($result)){
		$output=array(
		"nume" => $row["nume"],
		"pret" => $row["pret"],
		//"id" =>$row["id"]
		);
		
		$_SESSION['shopping_cart'] = $output;
		$records[]=$_SESSION['shopping_cart'];
	}
	echo json_encode($records);
	mysql_close($conn);
?>