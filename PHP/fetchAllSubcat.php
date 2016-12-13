<?php

 $conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');

	
	$query =  "SELECT (nume) FROM submenu ";
	$result = mysql_query($query,$conn);
	$output='';
	
	while($row = mysql_fetch_array($result)){
		$output=array(
		"nume" => $row["nume"],
		);
		$records[] = $output;
	}
	echo json_encode($records);
	
	mysql_close($conn);
	
?>