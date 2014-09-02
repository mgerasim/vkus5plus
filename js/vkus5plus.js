$(function(){
   $('a[href^="#"]').click(function(){	   
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false; 
   }); 
   
  
});	

$(document).ready(function () {
     $('.itemsub').click(function(){
	   if ($(this).children('.itemsub_selected').first().css('display') == 'none')
	   {
			$(this).children('.itemsub_selected').show();
//			$(this).css("border","#c4c4c4 solid 2px");
	   } else {
		   $(this).children('.itemsub_selected').hide();
//	   		$(this).css("border","#ffffff solid 2px");
	   }
   });
}); 