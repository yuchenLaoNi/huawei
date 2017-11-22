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
//关于cookie,如果有
var a=getCookie("tel");
var c_start=document.cookie.indexOf("tel=");
 if(c_start == -1){
  	$("#login_form").show();
    $("#logined").hide();
 }
 else{
  $("#login_form").hide();
  $("#register").hide();
     $("#logined").show();
     $("#ustr").html(a+"，您好");
 }
 


//放大镜
//鼠标移入小图  显示对应的中图  和大图
	$("#bottom_s li").mouseenter(function(){
		var index = $(this).index();
		$("#small img").eq(index)
					   .show()
					   .siblings()
					   .hide();
		$("#big img").eq(index)
					 .show()
					 .siblings()
					 .hide();
		$("#mask").css({
			"backgroundImage":"url(details_img/mid"+(index+1)+".jpg)"
		})
	})
	$("#small").mouseover(function(){
		$("#layer").show();
		$("#mask").show();
		$("#big").show();
	}).mouseout(function(){
		$("#layer").hide();
		$("#mask").hide();
		$("#big").hide();
	}).mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $("#small").offset().left - $("#mask").outerWidth()/2;
		var y = e.pageY - $("#small").offset().top - $("#mask").outerHeight()/2;
		var maxL = $("#box").outerWidth() - $("#mask").outerWidth();
		var maxT = $("#box").outerHeight() - $("#mask").outerHeight();
		
		x = parseInt(Math.min( maxL , Math.max(0,x) ));
		y = parseInt(Math.min( maxT , Math.max(0,y) ));
		
		$("#mask").css({
			"left" : x,
			"top" :  y,
			"backgroundPositionX" : -x+0.2,
			"backgroundPositionY" : -y+0.2
		})
		//大图/小图 = 大图left / mask . left = 大图显示区 /小图显示区mask
		var bigImgX = x*$(".bigImage").width()/$("#small").width();
		var bigImgY = y*$(".bigImage").height()/$("#small").height();
		$(".bigImage").css({
			"left" : -bigImgX,
			"top" : -bigImgY
		})
	})
//关于放大镜下面的2个按钮(非通用)
$(".prev").click(function(){
	$("#bottom_s").animate({"left":0},300);
})
$(".next").click(function(){
	$("#bottom_s").animate({"left":-62},300);
})
//分期那个hover有东西
$(".fenqi").hover(function(){
	$(".fenqi_tip").css("display","block");
},function(){
	$(".fenqi_tip").css("display","none");
})
//选择

$(".pro_ul li").click(function(){
	$(this).children().eq(0).css({"border":"1px solid #B40707","font-weight":"900"})
	$(this).siblings().children().css({"border":"1px solid #999","font-weight":"400"});
})
$(".color_ .pro_ul li").click(function(){
	$con = $(this).children().children().eq(1).html()
//	console.log($con)
	$(".get1").html($con+" / ")
})
$(".zhishi_ .pro_ul li").click(function(){
	$con = $(this).children().eq(0).html()
//	console.log($con)
	$(".get2").html($con+" / ")
})
$(".rongliang .pro_ul li").click(function(){
	$con = $(this).children().eq(0).html()
//	console.log($con)
	$(".get3").html($con+" / ")
})
$(".taocan .pro_ul li").click(function(){
	$con = $(this).children().eq(0).html()
//	console.log($con)
	$(".get4").html($con)
})
//加和减（shop）
$(".jia").click(function(){
	$con = Number($("#shop_num").val());
	$("#shop_num").val(++$con)
	$(".jian").css({"cursor":"pointer","color":"#777"})
})
$(".jian").click(function(){
	$con = Number($("#shop_num").val());
	if($con <= 1){
		$(".jian").css({"cursor":"not-allowed","color":"#c4c4c4"})
	}else{
		$(".jian").css({"cursor":"pointer","color":"#777"})
		$("#shop_num").val(--$con)
	}
})
$("#shop_num").keyup(function(){
	if(Number($("#shop_num").val()) < 1 || isNaN($("#shop_num").val())){
		$("#shop_num").val(1)
	}
})
//tuijian_nav
$(".tui_prev").click(function(){
	$(".tui_ul").animate({"left":0},500);
})
$(".tui_next").click(function(){
	$(".tui_ul").animate({"left":-564},500);
})

//吸顶
var h = $(".p_nav").offset().top;
window.onscroll = function(){
		
		//1 获取页面滚走的距离
		var sTop =$("body,html").scrollTop();
//		
		//2 当页面滚走的距离 大于 头部的高度时   开始吸顶
		if( sTop > h ){
			$(".p_nav").css({
				"position":"fixed",
				"top":0,
				"padding":"12px 0 13px 0"
			});
			$(".gouwu").css("display","block")
		}else{
			$(".p_nav").css({"position":"relative","padding":"36px 0 37px 0"})
			$(".gouwu").css("display","none")
		}
	}

//
//nanshou的友情链接
$(".btn_next").click(function(){
	
	$mL = parseInt($(".yqlink").css("margin-left"));
	$width = $(".yqlink").width();
		if($mL<= -1200){
			$(".btn_next").css({"cursor":"not-allowed","background":"#ccc"})
			$(".yqlink").css("margin-left","-1264px")
		}else{
			$(".yqlink").stop(true,true).animate({marginLeft:$mL-158},700);
			$(".btn_prev").css({"cursor":"pointer","background":"#b3b3b3"});
		}
	console.log($mL)
})
$(".btn_prev").click(function(){
	$mL = parseInt($(".yqlink").css("margin-left"));
	$width = $(".yqlink").width();
	if($mL == 0){
		$(".btn_prev").css({"cursor":"not-allowed","background":"#ccc"});
		$(".yqlink").css("margin-left","0px")
	}else{
		$(".yqlink").stop(true,true).animate({marginLeft:$mL+158},700);
		$(".btn_next").css({"cursor":"pointer","background":"#b3b3b3"})
	}
})
//点击阅读全文
$(".all_a").click(function(){
	$(".white_hidden").css("display","none");
	$(".all_a").css("display","none");
	$(".all_p").css({"height":"17255px"})
})
