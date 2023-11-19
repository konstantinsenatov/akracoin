import $ from "jquery";

$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});


	const circlePosition1 = gsap.timeline();
	circlePosition1.fromTo('.circle1', 1, {transform: 'scale(0.4) translate(50%, 100%)'}, {transform: 'scale(1)  translate(-50%, -100%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition1,
		trigger: '.circle1',
		scrub: 2,
	})
	
	const circlePosition2 = gsap.timeline();
	circlePosition2.fromTo('.circle2', 1, {transform: 'scale(0.1) translate(50%, 0%)'}, {transform: 'scale(1)  translate(100%, 100%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition2,
		trigger: '.circle2',
		scrub: 3,
	})
	
	const circlePosition3 = gsap.timeline();
	circlePosition3.fromTo('.circle3', 1, {transform: 'scale(1.2) translate(0%, 100%)'}, {transform: 'scale(0.6)  translate(-50%, 0%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition3,
		trigger: '.circle3',
		scrub: 0,
	})
	
	const circlePosition4 = gsap.timeline();
	circlePosition4.fromTo('.circle4', 1, {transform: 'scale(0) translate(50%, 100%)'}, {transform: 'scale(1)  translate(-50%, -100%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition4,
		trigger: '.circle4',
		scrub: 1,
	})
	
	const circlePosition5 = gsap.timeline();
	circlePosition5.fromTo('.circle5', 1, {transform: 'scale(1.3) translate(0%, 0%)'}, {transform: 'scale(0)  translate(-150%, -100%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition5,
		trigger: '.circle5',
		scrub: 3,
	})
	
	const circlePosition6 = gsap.timeline();
	circlePosition6.fromTo('.circle6', 1, {transform: 'scale(1) translate(0%, 0%)'}, {transform: 'scale(0.2)  translate(-50%, 100%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition6,
		trigger: '.circle6',
		scrub: 0,
	})
	
	const circlePosition7 = gsap.timeline();
	circlePosition7.fromTo('.circle7', 1, {transform: 'scale(0.1) translate(0%, 30%)'}, {transform: 'scale(0.7)  translate(-50%, -150%)'}, 0)
	ScrollTrigger.create({
		animation: circlePosition7,
		trigger: '.circle7',
		scrub: 2,
	})
});
