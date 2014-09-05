$(function(){
   $('a[href^="#"]').click(function(){	   
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false; 
   }); 
   
  
});	

function addOrderPosition(divItemsubSelected) {

	alert( $('.itemsub_selected').length );
}

function removeOrderPosition(divItemsubSelected) {
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
	   		$(this).css("border","#ffffff solid 2px");
			$(this).removeClass("itemsub_selected");
	   }
   });
}); 