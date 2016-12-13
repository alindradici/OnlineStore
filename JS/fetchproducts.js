$(document).ready(function(){
// arata produsele dupa click pe linkul de categorie

	$(document).on('click', '.linkin', function(){
		
	 $.ajax({
         url:'store.php',
         data : {value : $(this).attr('data-value')},
         dataType : 'json',
		 //type:'GET',
         success:function(data){
         console.log(data);                                            // process your response 
         if(data.length==0){
				$('#noproduct').html('No products available');
		}else{
			
			showProducts(data);
        }
		}
	  });
	});
	
	 function showProducts(obiecte){
		
	 $('.container').html('');
		 for(var i=0; i<obiecte.length; i++){               //Functia care arata obiectele
			 var aparat = obiecte[i];
			 $('.container').append(getProdRow(aparat));
		 }
 }

 function getProdRow(aparat){
	
	 var row ='<div class="column">'+
		 '<div>'+ '<img src='+aparat.imagine+' width="150" height="140" />' +'</div>'+
		 '<div>'+ aparat.nume + '</div>' +               					                 //functia care le aranjeaza
		 '<div id="pret">'+ aparat.pret +'&nbsplei' + '</div>'+
		 '<div>'+'<button data-value="'+aparat.id+'" class = "comanda">'+'Comanda!'+'</button>'+'</div>'
		 + '</div>';
		
		 return row;
 }

});
 
 
 
 
 
 
 
 
 
 