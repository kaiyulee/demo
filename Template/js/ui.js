$(function(){
	$(".nav-item>span").hover(function() {
		var subNav = $(this).siblings('.sub-nav');
		subNav.css({'top':'42px',}).fadeIn();
	}, function() {
		$(this).siblings('.sub-nav').fadeOut();
	});
	$(".sub-nav").hover(function() {
		$(this).css({'top':'42px'}).fadeIn();
	}, function() {
		$(this).fadeOut();
	});
});