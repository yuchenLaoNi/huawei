//更多精彩那个下拉菜单尖角号，以及菜单
$(".lead_xiala_a").hover(function(){
	$(".lead_xiala_span").html("v");
	$(".lead_xiala_box").css("display","block");
},function(){
	$(".lead_xiala_span").html("∧");
	$(".lead_xiala_box").css("display","none");
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
//下面的左右按键（轮播）  通用型!!!!<暂未封装>
$(".next").click(function(){
	$(".prev").css("cursor","pointer");
	$mL = parseInt($(".lunbo_con").css("margin-left"));
	$width = $(".lunbo_con").width();
	
//	console.log($width+$mL)
	if($width+$mL>=2436){
		$(".lunbo_con").animate({marginLeft:$mL-1108},1000)
//		console.log(1)
	}
	else if($width+$mL<2216 && $width+$mL>1218){
		$(".lunbo_con").animate({marginLeft:-$width+1218},1000)
//		console.log($width+$mL)
	}
	else{
		$(".next").css("cursor","not-allowed");
	}
})
//prev
$(".prev").click(function(){
	$(".next").css("cursor","pointer");
	$mL = parseInt($(".lunbo_con").css("margin-left"));
	$width = $(".lunbo_con").width();
//	console.log($width+$mL)
	
	if($mL == 0){
		$(".prev").css("cursor","not-allowed");
		
	}
	else if($width+$mL>=1218 && $width+$mL<=2216){
		;$(".lunbo_con").animate({marginLeft:$mL+1108},1000)
//		console.log(2)
	}
	else{
		$(".lunbo_con").animate({marginLeft:0},1000)
//		console.log(1)
	}
})

//
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