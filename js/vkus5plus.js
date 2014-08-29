$(function(){
   $('a[href^="#"]').click(function(){	   
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 300);
        return false; 
   }); 
   
  
});	

$(document).ready(function () {
     $('.itemsub').click(function(){
	   
/*	   alert( $('#itemsub_grechka').children('.itemsub_selected').css('display') );*/
	   if ($(this).children('.itemsub_selected').first().css('display') == 'none')
	   {
			$(this).children('.itemsub_selected').show();
	   } else {
		   $(this).children('.itemsub_selected').hide();
	   }
   });
}); 