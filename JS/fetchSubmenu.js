$(document).ready(function(){
	
	//arata categoriile
	
$('.menu').on('click', function(){
    $('#box').toggle('slide').show();
     $.ajax({
         url:'fetchsubmenu.php',
         data : {nume : $(this).attr('data-value')},
         dataType : 'json',
         success:function(data){
         console.log(data);// process your response 
         showObjects(data);
        }
    });
});


	function showObjects(obiecte){
		
	$('#box tbody').html('');
		for(var i=0; i<obiecte.length; i++){               //Functia care arata obiectele
			var aparat = obiecte[i];
			$('#box tbody').append(getRow(aparat));
		}
}

function getRow(aparat){
	
	
	var row = '<tr>'+
		'<td>' + '<p class="linkin" data-value='+aparat.id+'>'+aparat.nume+'</p>' + '</td>'+ 
        '</tr>';
		
		return row;
}

});

	
