$(document).ready(function() {
	
	$('#cartitems').hide();
	$('#cartimg').on('mouseover', function(){
		$('#cartitems').slideToggle(200);
	});
	$('cartitems').on('mouseout',function(){
		$(this).hide();
	});
	
	//on product button click 
	
	//create array
	var cartItems = [];
	
	 function showProducts(obiecte){
		
	 $('#cartpreview tbody').html('');
		 for(var i=0; i<obiecte.length; i++){               //Functia care arata obiectele
			 var aparat = obiecte[i];
			 $('#cartpreview tbody').append(getProdRow(aparat));
		 }
 }
 
 function getProdRow(aparat) {
    var row = '<tr>'+
        '<td>' + aparat.nume + '</td>'+
        '<td>' + aparat.pret + '</td>'+
		'<td>' + 1 + '</td>'+
		'</tr>';
    return row;
}

	$('body').on("click", ".comanda", function() {
		
		//$.cookie("test",$(this).attr('data-value'));
		$.ajax({
			url:'fetchCart.php',
			dataType:'JSON',
			data:{id:$(this).attr('data-value')},
			success:function(data) {
				for(var i=0;i<data.length;i++){
				cartItems.push(data[i]);
				}
				showProducts(cartItems);
				$('#number_of_items').html(cartItems.length);
			}
		});
		
		
	});
	
	$(".sterge").on("click", function() {
			
			alert($(this).attr('data-value'));
	});
	
});