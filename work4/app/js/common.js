$(document).ready(function(){


	
	var pictures = $("#slider").children("li");
	var navItems = $("#navigation").children("li");
	var currentNav, currentPic;

	
	$("#navigation").find('li').first().addClass('active');

	function goTo(i){
		$(navItems).removeClass('active');
		$("#navigation li").eq(i).addClass('active');

		pictures.fadeOut(400)
				.eq(i).fadeIn(400);
	}



	
	$("#navigation li").on('click',function(){
		var index = $(this).index();
		goTo(index);
	});

	$("#next").on('click',function(){
		
		currentNav = parseInt($('.active').index());
			if (currentNav <3){
				goTo(currentNav+1);
			} else {
				goTo(0);
			}
	});

	$("#prev").on('click',function(){
		
		currentNav = parseInt($('.active').index());
			if (currentNav >0){
				goTo(currentNav-1);
			} else {
				goTo(3);
			}
	});
	goTo(0);

	setInterval(function(){
      $("#next").trigger('click');
    },4500);
});