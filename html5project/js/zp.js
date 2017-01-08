$(function() {
	$('#videoBtn').click(function() {
		$('#videoShow').show();
		$('#videoShow').find('video')[0].play();

	})
	$('#videoShow .close').bind('click', function() {
		var $video = $('#videoShow').find('video');

		$video[0].pause();

		$('#videoShow,#mask').hide();
		$('#sciInfo').css('opacity', 1);
	});
	$("#gotop1 img").click(function(e) {
		TweenMax.to(window, 1.5, {
			scrollTo: 0,
			ease: Expo.easeInOut
		});
		var huojian = new TimelineLite();
		huojian.to("#gotop1 img", 1, {
				rotationY: 720,
				scale: 0.6,
				y: "+=40",
				ease: Power4.easeOut
			})
			.to("#gotop1 img", 1, {
				y: -1000,
				opacity: 0,
				ease: Power4.easeOut
			}, 0.6)
			.to("#gotop1 img", 1, {
				y: 0,
				rotationY: 0,
				opacity: 1,
				scale: 1,
				ease: Expo.easeOut,
				clearProps: "all"
			}, "1.4");
	});
	

});
