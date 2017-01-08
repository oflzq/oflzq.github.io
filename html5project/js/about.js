//	导航
	var lis=document.getElementsByClassName("select");    //获取导航
	var slide=document.getElementsByClassName("content_right");//获取导航内容
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				slide[j].style.display="none";
				lis[j].style.color="";
			}
			slide[this.index].style.display="block";
			lis[this.index].style.color="#88C23A";
		}
	}
	


window.onload = function() {
	function navFixed() {
		var oConbox = $('.content_right');
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
}

//$(function(){
// $("aside ul li").click(function(){
// $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
// var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
// $(".tab_box > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
// });
//});




//<script type="text/javascript">
//
//$(document).ready(function(){
//
//$(".tab li").click(function(){
//
//$(".content li").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 
//
//});
//
//});
//
//</script>