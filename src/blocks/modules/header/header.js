import $ from "jquery";

$(document).ready(function (){
	const header__burger = $('.menu-bottom-header__burger');
	const header__list = $('.menu-bottom-header__list');
	header__burger.on("click", function(e) {
		header__burger.toggleClass("active");
		header__list.toggleClass("active")
	});


	const langSelector = $('.top-header__selector');
	const langToggle = $('.top-header__lang');
	const langOptions = $('.top-header__options');
	if (langSelector){
		langToggle.on('click',function (){
			langOptions.slideToggle(200);
			langSelector.toggleClass("active");
		})

		$(document).on('click',function (event) {
			if (!$(event.target).hasClass('top-header__selector') && $(event.target).parents('.top-header__selector').length === 0){
				langOptions.slideUp(200);
				langSelector.removeClass("active");
			}
		});
	}
});
