import $ from "jquery";

$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});


	const circle_scroll_animPosition1 = gsap.timeline();
	circle_scroll_animPosition1.fromTo('.circle_scroll_anim1', 1, {transform: 'scale(0.5) translate(-100%, 100%)'}, {transform: 'scale(1)  translate(100%, -100%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition1,
		trigger: '.circle_scroll_anim1',
		scrub: 2,
	})
	
	const circle_scroll_animPosition2 = gsap.timeline();
	circle_scroll_animPosition2.fromTo('.circle_scroll_anim2', 1, {transform: 'scale(1) translate(50%, 0%)'}, {transform: 'scale(0)  translate(100%, 100%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition2,
		trigger: '.circle_scroll_anim2',
		scrub: 1,
	})
	
	const circle_scroll_animPosition3 = gsap.timeline();
	circle_scroll_animPosition3.fromTo('.circle_scroll_anim3', 1, {transform: 'scale(1.5) translate(0%, 100%)'}, {transform: 'scale(0)  translate(-50%, 0%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition3,
		trigger: '.circle_scroll_anim3',
		scrub: 0,
	})
	
	const circle_scroll_animPosition4 = gsap.timeline();
	circle_scroll_animPosition4.fromTo('.circle_scroll_anim4', 1, {transform: 'scale(0.6) translate(0%, 0%)'}, {transform: 'scale(1)  translate(-100%, 100%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition4,
		trigger: '.circle_scroll_anim4',
		scrub: 1,
	})
	
	const circle_scroll_animPosition5 = gsap.timeline();
	circle_scroll_animPosition5.fromTo('.circle_scroll_anim5', 1, {transform: 'scale(2) translate(0%, 0%)'}, {transform: 'scale(0)  translate(-150%, -100%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition5,
		trigger: '.circle_scroll_anim5',
		scrub: 2,
	})
	
	const circle_scroll_animPosition6 = gsap.timeline();
	circle_scroll_animPosition6.fromTo('.circle_scroll_anim6', 1, {transform: 'scale(1.7) translate(0%, 0%)'}, {transform: 'scale(2.5)  translate(-150%, 100%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition6,
		trigger: '.circle_scroll_anim6',
		scrub: 0,
	})
	
	const circle_scroll_animPosition7 = gsap.timeline();
	circle_scroll_animPosition7.fromTo('.circle_scroll_anim7', 1, {transform: 'scale(0.1) translate(0%, 30%)'}, {transform: 'scale(1.7)  translate(-50%, 150%)'}, 0)
	ScrollTrigger.create({
		animation: circle_scroll_animPosition7,
		trigger: '.circle_scroll_anim7',
		scrub: 1,
	})
});
