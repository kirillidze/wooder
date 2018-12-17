'use strict';
$(function() {

	//выпадушка списка языков
	$('.header__lang-swicher').click(function() {
		let isBlock = $('.header__lang-list').css('display');

		if (isBlock === 'block') {
			$('.fa-caret-down').css('display', 'block');
			$('.fa-caret-up').css('display', 'none');

			$('.layout').css('display', 'none');
		} else {
			$('.fa-caret-down').css('display', 'none');
			$('.fa-caret-up').css('display', 'block');

			$('.layout').css('display', 'block');
		}
		$('.header__lang-list').css('z-index', '1000');
		$('.header__lang-list').slideToggle('slow');

	});

	$('.header__lang').click(function() {
		let lang = $(this).text();
		$('.header__active-lang').text(lang);

	});

	//выпадающее меню
	$('.header__menu').click(function() {
		$(".layout").fadeToggle(0);
		$('.header__menu-list').css('z-index', '1000');
		$('.header__menu-list').fadeToggle();
	});

	//клик по слою
	$('.layout').click(function() {
		$('.header__menu-list').fadeOut();
		$('.header__lang-list').slideUp();
		$('.header__menu-list').css('z-index', '0');
		$('.header__lang-list').css('z-index', '0');
		$('.fa-caret-down').css('display', 'block');
		$('.fa-caret-up').css('display', 'none');
		$(this).fadeToggle(0);
	});

	//изменяем высоту контейнера с главным изображением
	//в зависимости от высоты изображения
	$(window).resize(changeHeightContainerImage);
	changeHeightContainerImage();

	function changeHeightContainerImage() {
		let screenHeight = $('.page__screen').outerHeight();
		$('.page__screen-container').outerHeight(screenHeight);
	}



});