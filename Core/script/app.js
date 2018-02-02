(function($){

	$(document).ready(function () {

		if ( $(window).scrollTop() > 100 ) {
			$('.page-navigation').addClass('navbar-fixed');
			$('.top-control').addClass('show-button');
		} else {
			$('.page-navigation').removeClass('navbar-fixed');
			$('.top-control').removeClass('show-button');
		}
  		
  		//JCF plugins
	    jcf.replaceAll();

		//Scrollspy
		$('body').scrollspy({
			target: '.navbar', offset: 50
		});

		//jQuery for page scrolling feature - requires jQuery Easing plugin
		$(function() {
		    $('a.page-scroll').bind('click', function(e) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 1000, 'easeInOutExpo');
		        e.preventDefault();
		    });
		});

		//Magnific Popup
		popup('.gallery-kuningan');
		popup('.gallery-pangandaran');
		
		$('.open-popup-link').magnificPopup({
		  type:'inline',
		  midClick: true
		});

		$('.gallery-popup-link').on('click', function(e) {
			e.preventDefault();
			$('.img-slider').slick('setPosition', 0);
		})

		$('.calendar-popup').magnificPopup({
			type:'image'
		});
		
		//Magnific popup Ajax
		$('.ajax-popup-link').magnificPopup({
		  type: 'ajax'
		});


		//Slick Carousel
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			slickMobile('.slick-mobile-kuningan');

			slickMobile('.slick-mobile-pangandaran');
		}

		$('.list-date').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.list-rundown',
			dots: false,
			arrows: true,
			// centerMode: true,
			focusOnSelect: true
		});
		$('.list-rundown').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.list-date',
			autoplay: false
		});
		
		$('.img-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			adaptiveHeight: true,
			infinite: true
		});

		$('.img-slider-ajax').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			adaptiveHeight: true,
			infinite: true
		});

		//WOW js
		new WOW().init();

	});

	//Show background nav
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 100 ) {
			$('.page-navigation').addClass('navbar-fixed');
			$('.top-control').addClass('show-button');
		} else {
			$('.page-navigation').removeClass('navbar-fixed');
			$('.top-control').removeClass('show-button');
		}
	});


	function popup(gallery) {
		var galleryName = $(gallery);

		galleryName.magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});
	}

	function slickMobile(className) {
		var className = $(className);

		className.slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  arrows: false,
		  adaptiveHeight: true
		});
	}


})(jQuery);