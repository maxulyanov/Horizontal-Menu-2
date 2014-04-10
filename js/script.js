$(function(){

	//По умолчанию
	var defaultSetting = {
		posTop   : '200px',
		posLeft  : '55px',
		widthPad : '15px',
	};
	var li = $('ul#index-menu > li');

	//Присвоим специальный класс
	$(li).each(function(){
		if($(this).children('.submenu').length !=0){
			$(this).addClass('parentmenu');
		}
	});

	//Ховер для index-menu
	$(li).hover(function(){
		clearTimeout($.data(this,'timer'));
		if($(this).children('ul.submenu').length != 0){
			var subli = $(this).find('.submenu > li');
			$(subli).each(function(i){
			$(this).stop(true, true).delay((i++) * 50).animate({
			left : '-36px',
			opacity : 'show',
			top : '3px',
		}, 400, 'swing');
		});
		}
	},
	function(){
		$.data(this,'timer', setTimeout($.proxy(function() {
	    var subli = $(this).find('.submenu > li');	
		$(subli).stop().animate({
			opacity : 'hide',
			padding : '5px',
		}, 300)
		.animate({
			top : defaultSetting.posTop,
			left : defaultSetting.posLeft,
			padding : '0px',
		},0);
	    }, this), 200));


	});

	//Ховер для подменю
	$('ul.submenu > li a').hover(function(){
		$(this).stop().animate({
			padding : '20px 15px',
		},200);
	},function(){
		$(this).stop().animate({
			padding : defaultSetting.widthPad,	
		},200);
	});
});