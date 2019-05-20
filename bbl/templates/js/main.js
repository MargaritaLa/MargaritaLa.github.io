jQuery(function($) {
	function topMargin(){
		$('.initial-screen').css('margin-top', '-' + $('.header-main').innerHeight() + 'px');
	}
	$(window).resize(function () { $('.initial-screen').css('margin-top', '-' + $('.header-main').innerHeight() + 'px');});
	topMargin();

	$(window).scroll(function(){
		// if($(this).scrollTop()>51){ 
		// 	$('.header-main').addClass('fixed');
		// 	topMargin();
		// }
		// else if ($(this).scrollTop()<51){
		// 	$('.header-main').removeClass('fixed');
		// }
	});

	if($('[data-slick]').length){
		$('[data-slick]').slick();
	}
	if($('.advantages__slider').length){
		$('.advantages__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay: true,
			autoplaySpeed: 1000,
			arrows: false,
			dots: false,
			adaptiveHeight: true,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]  

});

	}
	if($('.results__slider').length){

		$('.results__slider').slick({


		});
	} 

	// }
	// wow = new WOW(
	// {
	// 	boxClass:     'wow',      
	// 	animateClass: 'animated', 
	// 	offset:       100,          
	// 	mobile:       true,       
	// 	live:         true        
	// }
	// )
	// wow.init();

}); 


