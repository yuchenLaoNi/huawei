//top_banner广告,关闭
//更多精彩那个下拉菜单尖角号，以及菜单
$(".lead_xiala_a").hover(function(){
	$(".lead_xiala_span").html("v");
	$(".lead_xiala_box").css("display","block");
},function(){
	$(".lead_xiala_span").html("∧");
	$(".lead_xiala_box").css("display","none");
})
//搜索框
$("#searchK").focus(function(){
	$(".posSea1").css("display","none");
	$(".posSea2").css("display","none");
})
$("#searchK").blur(function(){
	$(".posSea1").css("display","inline");
	$(".posSea2").css("display","inline");
})

/*
//特效添加current
$("table a").hover(function(){
    $(this).addClass("current");
},function(){
    $(this).removeClass("current");
});*/
var timer = setInterval(autoPlay , 5000);
	var index = 0;
	function autoPlay(){
		index++;
		if( index == 6 ){
			index = 0;
		}
//		$("ol li").eq(index)
//				  .addClass("current")
//				  .siblings()
//				  .removeClass("current");
		$(".bannerlink").eq(index)
				  .fadeIn(1000)
				  .siblings()
				  .fadeOut(1000);
		$("#midBanner .midbannerlink").eq(index)
				  .fadeIn(1000)
				  .siblings()
				  .fadeOut(1000);
		
	}
//bg_tiao
window.onload = function(){
		var oPic = document.getElementById("bg_tiao");
		var oPicTop = oPic.offsetTop;
		window.onscroll = function(){
			var sTop = document.body.scrollTop || document.documentElement.scrollTop;
			console.log(sTop)
			if(sTop>640 && sTop<1200){
				startMove( parseInt(sTop - 750) , oPic );
			}
			
		}
	}
	var timer = null;
	function startMove(target,obj){
		clearInterval(timer);
		timer = setInterval(function(){
			var speed = (target-obj.offsetTop)/10;
			var speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if( obj.offsetTop == target ){
				clearInterval(timer);
			}else{
				obj.style["top"] = obj.offsetTop + speed + "px";
			}
		},30)
	}
//banner上的导航栏
$(".bnav_li").mouseenter(function(){
	var index = $(this).index();
	$(".bnav_box1").eq(index).show();
})
$(".bnav_li").mouseleave(function(){
	var index = $(this).index();
	$(".bnav_box1").eq(index).hide();
})