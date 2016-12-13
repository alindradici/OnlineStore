<?php

	$conn=mysql_connect('localhost','root','');
	mysql_select_db('alinDataBase');
	
	$nume=$_POST['input-text'];
	$price=$_POST['input-pret'];
	$temp=$_POST['selectcat'];
	$category = substr($temp, 0, 3);
	
	//get picture
	$imagename = $_FILES["file"]["name"];
	$folder="/images/";
	$image_path = $folder.$imagename;
	move_uploaded_file($_FILES[" file "][" tmp_name "], "$folder".$_FILES[" file "][" name "]);
	
	//insert in database
	$query ="INSERT INTO electrocasnice (nume,pret,imaginepath,numimg,subcat) VALUES ('$nume','$price','$image_path','$imagename','$category')";
	
	mysql_query($query,$conn);
	mysql_close($conn);
?>
