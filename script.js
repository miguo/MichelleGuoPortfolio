$(document).ready(function() {
			
	var pepe = $.fn.fullpage({
		slidesColor: ['whitesmoke', '#FF884D', '#FF884D', '#7BAABE', '#41C4AB'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu'
	});
		
	$('.hover').mouseover(function() {
  		$('.gitIcon_left').css("visibility", "visible");
  		$('.gitIcon_right').css("visibility", "visible");
	});

	$('.hover').mouseout(function() {
  		$('.gitIcon_left').css("visibility","hidden");
  		$('.gitIcon_right').css("visibility", "hidden");
	});




});