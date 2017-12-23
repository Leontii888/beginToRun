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
// -----------------------------------------------------------
// $(document).ready(function() { // вся мaгия пoслe зaгрузки стрaницы
// 	$("#ajaxform").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
// 		var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
// 		var error = false; // прeдвaритeльнo oшибoк нeт
// 		form.find('input, textarea').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
// 			if ($(this).val() == '') { // eсли нaхoдим пустoe
// 				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
// 				error = true; // oшибкa
// 			}
// 		});
// 		if (!error) { // eсли oшибки нeт
// 			var data = form.serialize(); // пoдгoтaвливaeм дaнныe
// 			$.ajax({ // инициaлизируeм ajax зaпрoс
// 			   type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
// 			   url: 'C:\Users\admin\Documents\GitHub\br\begintorun.github.io\gogogo.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
// 			   dataType: 'json', // oтвeт ждeм в json фoрмaтe
// 			   data: data, // дaнныe для oтпрaвки
// 		       beforeSend: function(data) { // сoбытиe дo oтпрaвки
// 		            form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
// 		          },
// 		       success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
// 		       		if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
// 		       			alert(data['error']); // пoкaжeм eё тeкст
// 		       		} else { // eсли всe прoшлo oк
// 		       			alert('Письмo oтврaвлeнo! Чeкaйтe пoчту! =)'); // пишeм чтo всe oк
// 		       		}
// 		         },
// 		       error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
// 		            alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
// 		            alert(thrownError); // и тeкст oшибки
// 		         },
// 		       complete: function(data) { // сoбытиe пoслe любoгo исхoдa
// 		            form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
// 		         }
		                  
// 			     });
// 		}
// 		return false; // вырубaeм стaндaртную oтпрaвку фoрмы
// 	});
// });
// -----------------------------------------------
	// $('.j-price').on('click', function(){
	// 	$('.j-advantages__item_hidden').addClass('animated jackInTheBox j-intro--color');
	// });

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
 /*  function checkForm(form) {
                var name = form.name.value;
                var n = name.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
                if (!n) {
                    alert("Имя введено неверно. Пожалуйста, исправьте ошибку");
                    return false;
                }
                var phone = form.phone.value;
                var p = phone.match(/^[0-9+][0-9- ]*[0-9- ]+$/);
                if (!p) {
                    alert("Телефон введен неверно");
                    return false;
                }
                var mail = form.mail.value;
                var m = mail.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/);
                if (!m) {
                    alert("E-mail введен неверно, пожалуйста исправьте ошибку");
                    return false;
                }
                return true;
            }
*/

});
//  <script type="text/javascript" language="javascript">
//  	function call() {
//  	  var msg   = $('#formx').serialize();
//         $.ajax({
//           type: 'POST',
//           url: 'res.php',
//           data: msg,
//           success: function(data) {
//             $('#results').html(data);
//           },
//           error:  function(xhr, str){
// 	    alert('Возникла ошибка: ' + xhr.responseCode);
//           }
//         });
 
//     }
// </script>

