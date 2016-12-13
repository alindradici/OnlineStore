<?php


    $conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');
	
	$idcat = $_GET['value'];
	$query =  "select * from electrocasnice WHERE subcat='$idcat'";
	$result = mysql_query($query,$conn);
	$output='';
	
	while($row = mysql_fetch_array($result)){
		$output=array(
		"nume" => $row["nume"],
		"pret" => $row["pret"],
		"imagine" => $row["imaginepath"],
		"id"=>$row["id"]
		);
		$records[] = $output;
	}
	echo json_encode($records);
	
	
	mysql_close($conn);
?>