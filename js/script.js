$(function(){
	var defaultSetting = {
		posTop   : '200px',
		posLeft  : '100px',
		widthPad : '10px',
		elemHeight : $('.submenu li').outerHeight(),
	};
	var li = $('ul#index-menu > li');

	$(li).hover(function(){
		clearTimeout($.data(this,'timer'));
		if($(this).children('ul.submenu').length != 0){
			var subli = $(this).find('.submenu > li');
			$(subli).each(function(i){
				console.log('i')
			$(this).stop(1,1).delay((i++) * 50).animate({
			left : '0',
			opacity : 'show',
			top : '17px',
		}, 400, 'swing');
		});
		}
	},
	function(){
		$.data(this,'timer', setTimeout($.proxy(function() {
	    var subli = $(this).find('.submenu > li');	
		$(subli).stop().animate({
			padding : '15px',
			opacity : 'hide',
		}, 300)
		.animate({
			top : defaultSetting.posTop,
			left : defaultSetting.posLeft,
			padding : defaultSetting.widthPad,
		},0)	
	    }, this), 200));


	});

	$('ul.submenu > li').hover(function(){
		$(this).stop().animate({
			padding : '15px 10px',
		},200);
	},function(){
		$(this).stop().animate({
			padding : '10px',	
		},200);
	});
});