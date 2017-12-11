$(document).ready(function(){
	var animationName = 'animated shake'
	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

	$('.advantages__item').on('click', function(){
		$('.story__item img').addClass(animationName).one(animationend, 
			function(){
				$(this).removeClass(animationName);
			});
	});
	$('.form .cta').on('click', function(){
		$('.form__input').addClass(animationName).one(animationend, 
			function(){
				$(this).removeClass(animationName);
			});
	});

	$('.cta').on('click', function(){
		$('.intro,.frontpage').addClass('animated shake intro--color').one(animationend, 
			function(){
				$(this).removeClass('animated pulse intro--color');
			});
	});
	$('.order').on('click', function(){
		$('.j-rotate').addClass('animated jackInTheBox').one(animationend, function(){
			$(this).removeClass('animated jackInTheBox');
		});
	});

	$('.j-story__item').on('click', function(){
		$('.story__item__txt').removeClass('animated bounceOutRight');
	});

	$('.advantages__item').on('click', function(){
		$('.advantages__item_hidden').css("display","block");
	});

	$('.advantages__item_hidden').on('click', function(){
		$('.advantages__item_hidden').addClass('animated jackInTheBox intro--color');
	});

	// $('.main').onepage_scroll({
	// 	sectionContainer: "section",
	// 	easing:'ease',
	// 	animationTime: 1000,
	// 	pagination: true,
	// 	updateURL: false,
	// 	beforeMove: function(index) {},
	// 	afterMove: function(index) {},
	// 	loop: false,
	// 	keyboard: true,
	// 	responsiveFallback: false,
	// 	direction: "vertical"
	// });

	// $('li.menu__item').on('click', function(){
	// $('li.feet__item').addClass('animated shake').one('animationend', function(){
	// 		$(this).removeClass('animated shake');
	// 		});
	// });

	// $('li.menu__item').on('mouseleave', function(){
	// $('.feet').toggleClass('animated fadeOut');
	// });


	// function(){
	// $("li.foot_item").animate({left: "100%"}, "fast")};
		
		// function(){
		// 	$(this).animate({left: "200%"}, "fast")};



});

