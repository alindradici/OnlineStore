<?php


    $conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');

	$nume = $_GET['nume'];
	
	$query =  "SELECT nume,idsubcat FROM submenu WHERE categorie = '$nume' ";
	$result = mysql_query($query,$conn);
	$output='';
	
	while($row = mysql_fetch_array($result)){
		$output=array(
		"nume" => $row["nume"],
		"id" => $row["idsubcat"]
		);
		$records[] = $output;
	}
	echo json_encode($records);
	
	mysql_close($conn);
?>