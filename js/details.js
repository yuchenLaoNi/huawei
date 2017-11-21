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
	$("#bottom li").mouseenter(function(){
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
	$("#bottom").animate({"left":0},300);
})
$(".next").click(function(){
	$("#bottom").animate({"left":-62},300);
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
