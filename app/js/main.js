'use strict';

(function ($) {
	$(document).ready(function () {
		// Code

		$('.slider').slick({
				dots: true, // включение точек
				arrows: false, // включение стрелок
				initialSlide:1,
				slidesToShow: 1, //сколько показывать слайдов
				slidesToScroll: 1, // по сколько елементов скролить
				swipe: true, // отключает включает свап
				// centerMode: false,
				// variableWidth: true,
				infinite: true,
			}
		);


	});
})(jQuery);