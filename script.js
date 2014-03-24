$(document).ready(function() {
			
	var pepe = $.fn.fullpage({
		slidesColor: ['whitesmoke', '#FF884D', '#FF884D', '#1A8094', '#41C4AB'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu'
	});
		
	/* Moves screenshots up and down on hover */
	$('.hover').mouseover(function() {
  		$(this).addClass("hover_in");
  		$(this).removeClass("hover_out");
	});

	$('.hover').mouseout(function() {
  		$(this).addClass("hover_out");
  		$(this).removeClass("hover_in");
	}); 





});


