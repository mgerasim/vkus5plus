$(function(){
   $('a[href^="#"]').click(function(){	   
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false; 
   }); 
   
  
});	

function addOrderPosition(divItemsubSelected) {

	if ( $('.itemsub_selected').length == 1 ) {
		var itemOrder = jQuery('<div/>', {
			id: 'item_orders',
			class: 'item'
		});
		$('#content').append(itemOrder);
		
		var itemHeader = jQuery('<div/>', {
			class: 'itemheader',
			text: 'Ваш заказ'
		});		
		itemOrder.append(itemHeader);
		
		var itemsubOrder = jQuery('<div/>', {
			id: 'itemsub_orders',
			class: 'itemsub',
			text: 'Ваш заказ'
		});		
		itemOrder.append(itemsubOrder);
		
		var clearfix = jQuery('<div/>', {
			class: 'clearfix'
		});		
		itemOrder.append(clearfix);
		
		
		var tableOrder = jQuery('<table/>', {
		});
		itemsubOrder.append(tableOrder);
				
		var trOrder = jQuery('<tr/>', {
		});
		tableOrder.append(trOrder);
		
		var thOrder = jQuery('<th/>', {
			text: '№'
		});
		trOrder.append(thOrder);
				
		thOrder = jQuery('<th/>', {
			text: 'Наименование'
		});
		trOrder.append(thOrder);
		
		thOrder = jQuery('<th/>', {
			text: 'Цена'
		});
		trOrder.append(thOrder);
	}
					
	var trOrder1 = jQuery('<tr/>', {
		id: divItemsubSelected.attr('id')+'order'
	});
	var tableOrder1 = $('#itemsub_orders table');
	tableOrder1.append(trOrder1);
	
	var tdOrder1 = jQuery('<td/>', {
		text: $('.itemsub_selected').length
	});
	trOrder1.append(tdOrder1);
						
	tdOrder1 = jQuery('<td/>', {
		text: divItemsubSelected.find('.itemsub_caption').text()
	});
	trOrder1.append(tdOrder1);
	
	tdOrder1 = jQuery('<td/>', {
		text: divItemsubSelected.find('.itemsub_price').text()
	});
	trOrder1.append(tdOrder1);
	
	$('#itemsub_orders table').append(trOrder1);
	
}

function removeOrderPosition(divItemsubSelected) {
	
	if ( $('.itemsub_selected').length == 0 ) {
		$('#item_orders').remove();
	}
	
	$('#'+divItemsubSelected.attr('id')+'order').remove();
	

	$('#itemsub_orders table tr').each(function(index){
		if (index != 0) {
			$(this).children().first().text(index);
		}		
	});
}

$(document).ready(function () {
     $('.itemsub').click(function(){
	   if ($(this).children('.itemsub_mark').first().css('display') == 'none')
	   {
			$(this).children('.itemsub_mark').show();
//			$(this).css("border","#c4c4c4 solid 2px");
			$(this).addClass("itemsub_selected");

			addOrderPosition( $(this) );
	   } else {
		   $(this).children('.itemsub_mark').hide();
//	   		$(this).css("border","#ffffff solid 2px");
			$(this).removeClass("itemsub_selected");
			removeOrderPosition( $(this) );
	   }
   });
}); 