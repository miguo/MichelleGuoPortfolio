$(document).ready(function() {
			
	var pepe = $.fn.fullpage({
		slidesColor: ['whitesmoke', '#FF884D', '#FF884D', '#1A8094', '#41C4AB'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu'
	});
		

/* might not use this jQuery effect */
/*
	$('.hover').mouseover(function() {
  		$('.gitIcon_left').css("visibility", "visible");
  		$('.gitIcon_right').css("visibility", "visible");
  		$(this).addClass("gradient");
  		$(this).removeClass("gradient_out");
	});

	$('.hover').mouseout(function() {
  		$('.gitIcon_left').css("visibility","hidden");
  		$('.gitIcon_right').css("visibility", "hidden");
  		$(this).addClass("gradient_out");
  		$(this).removeClass("gradient");
	}); */




});