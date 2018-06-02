/* global $ */

$(document).ready(function(){
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > 50 ) {
			$("nav").css({
				'background': 'white', 
				'color': '#222',
				'border-bottom': '1px solid #ccc'
			});
		} else {
			$("nav").css({
				'background': 'none', 
				'color': "whitesmoke",
				'border-bottom': 'none'
			});	
		}
	});
	
	// $(".fa-bars").on("click", function(){
	// 	$("#content, nav").toggleClass("translateX");
	// })
	
});