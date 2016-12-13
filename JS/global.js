$(document).ready(function (e) {
	
	$.ajax({
		url:'fetchAllSubcat.php',
		success:function(data){
         console.log(data);// process your response 
         var rows = '';
         $.each(JSON.parse(data),function(i,v){
              rows+= '<option>'+v.nume+'</option>';
         });
         $('#sc').html(rows);
        
		}
	});
	
	
	$('#uploadimage').on('submit',(function(e) {
		 e.preventDefault();
	     var name = $('#numprod').val().trim();
         var pret = $('#pretprod').val().trim();
         var file = $('input[type="file"]').val().trim();
		if(name && pret && file){

    $.ajax({
        url: 'connect.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
		success: function(){
		alert('uploaded successuflly!');
	
		}
		
    });
		}else{alert('input fields cannot be left empty you num num!');}
	}));
	
	$('#uploadcategory').on('submit', function(){
		
		if($.trim($('#numecat').val()) == ''){
      alert('Input can not be left blank');
   }else{
		//var getCategory = 'test';
		var getCategoryName = $("#numecat").val();
		var getCategory = $('select[name=selector]').val();
		
	/*	$('#select-category').change(function(){
        var selectedCat = $('#selectcategory option:selected');
        getCategory = selectedCat;
    });*/
		
		$.ajax({
			url:'category.php',
			type: 'get',
			contentType: 'application/json',
			dataType: 'json',
			data:{nume:getCategoryName,categorie:getCategory},
			
		});
   }
	});
	
	//delete productSub	 
	
	function showProducts(obiecte){
		
	 $('#availableProducts tbody').html('');
		 for(var i=0; i<obiecte.length; i++){               //Functia care arata obiectele
			 var aparat = obiecte[i];
			 $('#availableProducts tbody').append(getProdRow(aparat));
		 }
 }
 
 function getProdRow(aparat) {
    var row = '<tr>'+
        '<td>' + aparat.nume + '</td>'+
        '<td>' + aparat.pret + '</td>'+
		'</tr>';
    return row;
}
	
	$.ajax({
		url:'stergeProd.php',
		dataType:'JSON'
		})
		.done(function(data){
			showProducts(data);
		});
	});
	
	
