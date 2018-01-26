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
//------бургер превращение
	$('.burger_wrap').click(function(){
		$(this).toggleClass('active');
		
	});

//-------------разная анимация на всех экрнанах
	$('.logo').on('click', function(){
		$('.offer h1').addClass('animated pulse j-intro--color').one(animationend, 
			function(){
				$(this).removeClass('animated pulse j-intro--color');
			});
	});
	$('.order').on('click', function(){
		$('.j-rotate').addClass('animated tada').one(animationend, function(){
			$(this).removeClass('animated tada');
		});
	});

	$('.j-story__item').on('click', function(){
		$('.story__txt').removeClass('animated bounceOutRight');
	});

	$('.j-price').on('click', function(){
		$('.j-advantages__item-hidden p').css("display","block").addClass('animated jackInTheBox').addClass('j-intro--color')
	.one(animationend, 
			function(){
				$(this).removeClass('animated jackInTheBox').css("display","none");
			});
		});
	$('.j-logo').on('click', function(){
		$('.j-logo').addClass('animated hinge').one(animationend, 
			function(){
				$(this).removeClass('animated hinge');
			});
	});
	$('.j-passexp').on('click', function(){
		$('.j-passexp').addClass('animated fadeOutDownBig').one(animationend, 
			function(){
				$(this).removeClass('animated fadeOutDownBig');
			});
	});
	$('.j-injury').on('click', function(){
		$('.j-injury').addClass('animated slideInRight').one(animationend, 
			function(){
				$(this).removeClass('animated slideInRight');
			});
	});
	$('.j-runagain').on('click', function(){
		$('.j-textthird').addClass('animated rollOut').one(animationend, 
			function(){
				$(this).removeClass('animated rollOut');
			});
	});
//----------смена цвета фона
$('.j-change_bg').hover(function(){
$('.why').css('background', 'transparent');

});
var colorArray = ["linear-gradient(to right bottom, #29B1F5, #0044cc)", "linear-gradient(to right bottom, #00F260, #0575E6)", "#FAC46E", "#FAD5BB", "#F2FEFF"]; // создаем массив с цветами фона
var i = 0; 

 $('.j-change_bg').on('click', function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }

});
//---------слайдер----------------------------
 $('.next1').click(function(){
 	var currentImage = $('.mySlides.curry');
 	var currentImageIndex = $('.mySlides.curry').index();
 	var nextImageIndex = currentImageIndex + 1;
 	var nextImage = $('.mySlides').eq(nextImageIndex);
 	currentImage.fadeOut(1000);
 	currentImage.removeClass('curry');
 	if (nextImageIndex == ($('.mySlides:last').index() + 1)){
 		$('.mySlides').eq(0).fadeIn(1000);
 		$('.mySlides').eq(0).addClass('curry');
 	}
 	else{
 		nextImage.fadeIn(1000);
 		nextImage.addClass('curry');
 	}

 });

$('.prev1').click(function(){
 	var currentImage = $('.mySlides.curry');
 	var currentImageIndex = $('.mySlides.curry').index();
 	var prevImageIndex = currentImageIndex - 1;
 	var prevImage = $('.mySlides').eq(prevImageIndex);

	currentImage.fadeOut(1000);
 	currentImage.removeClass('curry');
	prevImage.fadeIn(1000);
 	prevImage.addClass('curry');

});


});