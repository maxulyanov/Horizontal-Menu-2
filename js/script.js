$(function(){
	var defaultSetting = {
		posTop   : '200px',
		posLeft  : '100px',
		widthPad : '15px',
	};
	var li = $('ul#index-menu > li');

	$(li).hover(function(){
		clearTimeout($.data(this,'timer'));
		if($(this).children('ul.submenu').length != 0){
			var subli = $(this).find('.submenu > li');
			$(subli).each(function(i){
				console.log('i')
			$(this).stop(1,1).delay((i++) * 50).animate({
			left : '-60px',
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
		}, 300)
		.animate({
			top : defaultSetting.posTop,
			left : defaultSetting.posLeft,
		},0)	
	    }, this), 200));


	});

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