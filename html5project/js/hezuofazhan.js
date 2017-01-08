//侧导航

window.onload = function() {
	function navFixed() {
		var oConbox = $('.con_box');
		var oNynay = $('.aside');
		if(oConbox.size() > 0 && oNynay.height() < $(window).height() - oConbox.offset().top) {
			oNynay.css('position', 'fixed');
			var oConboxTop = oConbox.offset().top;
			var maxTop = oConbox.height() - oNynay.height();
			$(window).on('scroll', function() {
				var sTop = $(window).scrollTop();
				console.log(maxTop, sTop);
				if(sTop > maxTop) {
					oNynay.css('top', maxTop - sTop + oConboxTop);
				} else {
					oNynay.css('top', oConboxTop);
				};
			});
		};
	};
	navFixed();

	var context = document.querySelector("#trans1").getContext("2d");
	context.fillStyle = "#f1bf38";
	context.beginPath();
	context.strokeStyle = "red"
	context.moveTo(0, 270);
	context.lineTo(280, 320);
	context.lineTo(250, 205);
	context.lineTo(64, 180);
	context.closePath();
	context.fill();

	context.fillStyle = "#ce9a35"
	context.beginPath();
	context.moveTo(280, 320);
	context.lineTo(380, 212);
	context.lineTo(318, 142);
	context.lineTo(250, 205);
	context.closePath();
	context.fill();

	context.fillStyle = "#78af47";
	context.beginPath();
	context.strokeStyle = "red"
	context.moveTo(64, 180);
	context.lineTo(250, 205);
	context.lineTo(220, 100);
	context.lineTo(127, 88);
	context.closePath();
	context.fill();

	context.fillStyle = "#7ca444"
	context.beginPath();
	context.moveTo(250, 205);
	context.lineTo(318, 142);
	context.lineTo(258, 73);
	context.lineTo(220, 100);
	context.closePath();
	context.fill();

	context.fillStyle = "#487963";
	context.beginPath();
	context.strokeStyle = "red"
	context.moveTo(190, 0);
	context.lineTo(127, 88);
	context.lineTo(220, 100);
	context.closePath();
	context.fill();

	context.fillStyle = "#4a8565"
	context.beginPath();
	context.moveTo(190, 0);
	context.lineTo(220, 100);
	context.lineTo(258, 73);

	context.closePath();
	context.fill();
};

$(function() {
        $(".l1 > a").bind("click", function() {
            if($(this).next().css("display") == "block") {
                $(this).next().hide();
                return;
            }
            $(this).css("background", "#4a8565");
            $(this).next().show();   //设置显示
            $(this).parent().siblings().children("a").css("background", "lightgrey");
            $(this).parent().siblings().children("ul").hide();
        });
    });