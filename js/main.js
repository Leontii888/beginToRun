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

	$('.burger').on('click', function(){
		$('.menu').css("display","block"),
		$('.burger').css("display","none"),
		$('.header__top').css('flex-direction','column'),
		$('.header__top').css('background','#B782FB'),
		$('.closeicon').css("display","block"),
		$('.closeicon').css("align-self","start")


	});
$('.closeicon').on('click', function(){
	$('.header__top').css('flex-direction','row'),
	$('.header__top').css('background','#40454B'),
		$('.menu').css("display","none"),
		$('.burger').css("display","block"),
		$('.closeicon').css("display","none")
		});


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
		$('.j-advantages__item-hidden').css("display","block").addClass('animated jackInTheBox').addClass('j-intro--color')
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

$('.j-change_bg').hover(function(){
$('.why').css('background', 'transparent');

})
var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]; // создаем массив с цветами фона
var i = 0; 

 $('.j-change_bg').on('click', function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }

});
 

});
