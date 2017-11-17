
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


//特效添加current
/*$(".banner_leadBox").hover(function(){
     $(this).addClass("current")
    	    .siblings()
			.removeClass("current");
},function(){
    $(this).removeClass("current");
});*/
//主banner轮播
timer1 = setInterval(autoPlay_main , 5000);
$index1 = 0;
	function autoPlay_main(){
		$index1++;
		if( $index1 == 6 ){
			$index1 = 0;
		}
		$(".banner_leadBox").eq($index1)
				  .addClass("current")
				  .siblings()
				  .removeClass("current");
		$(".bannerlink").eq($index1)
				  .fadeIn(700)
				  .siblings()
				  .fadeOut(700);
		
	}
//midbanner轮播
timer2 = setInterval(autoPlay_mid , 5000);
$index2 = 0;
	function autoPlay_mid(){
		$index2++;
		if( $index2 == 6 ){
			$index2 = 0;
		}
		$("#midBanner .midbannerlink").eq($index2)
				  .fadeIn(700)
				  .siblings()
				  .fadeOut(700);
		
	}
//关于banner下圆点
$(".banner_leadBox").mouseenter(function(){
	clearInterval(timer1);
	$(this).addClass("current")
			.siblings()
			.removeClass("current")
	$index1=$(this).index()-1
	autoPlay_main();
})
$(".banner_leadBox").mouseleave(function(){
	timer1 = setInterval(autoPlay_main , 5000);
})
//鼠标移入banner暂停
/*$(".banner_P").hover(function(){clearInterval(timer1);},function(){timer1 = setInterval(autoPlay_main , 5000)})*/

//banner上的导航栏
$(".bnav_li").mouseenter(function(){
	var index = $(this).index();
	$(".bnav_box1").eq(index).show();
})
$(".bnav_li").mouseleave(function(){
	var index = $(this).index();
	$(".bnav_box1").eq(index).hide();
})

//关于楼梯效果
var flag = true; //控制 当点击楼层号时，禁止滚动条的代码执行   值为true时，可以执行滚动条代码
	//  根据楼层号 控制滚走的距离  
	// 1、除了top的楼梯号，为每一个楼梯号添加一个click，控制楼梯滚走的距离（距离：当前楼层的offset().top ）
	$("#menu li:not(:last)").click(function() {
	    flag = false;
	    //当前点击的楼号红色的 其余黑色的
	    $(this).find("span")
	        .addClass("active")
	        .end()
	        .siblings()
	        .find("span")
	        .removeClass("active");
	    //p标签
	    $(this).find("p")
	        .addClass("active")
	        .end()
	        .siblings()
	        .find("p")
	        .removeClass("active");
	    //获取当前楼号对应楼层的 top值
	    var sTop = $(".Louti").eq($(this).index()).offset().top;
	
	    //将页面滚走的距离设置为  sTop  
	    $("body,html").animate({
	        "scrollTop": sTop
	    }, 1000, function() {
	        flag = true;
	    });
	})
	//2、点击top   回到顶部
	$("#menu li:last").click(function() {
	    $("body,html").animate({
	        "scrollTop": 0
	    }, 1000);
	    $("#menu li span").removeClass("active");
	})
	
	//3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
	$(window).scroll(function() {
	    //如果flag  为true   可以执行滚动条的代码
	    if (flag) {
	
	        //获取页面滚走的距离
	        var sTop = $(document).scrollTop();
	        //filter  返回满足条件的那个对象 
	        //找到满足某个条件的楼层对象    
	        var $floor = $(".Louti").filter(function(index, ele) {
	            return Math.abs($(this).offset().top - sTop) < $(this).height() / 2;
	        })
//	        console.log(sTop)
			if(sTop<=1800){
				$("#menu").css({"right":"-100px","z-index":"-1"});
			}else{
				$("#menu").css({"right":"0px","z-index":"5"});
			}
	        //根据楼层的索引 设置楼梯号的 样式
	        $("#menu li").eq($floor.index())
	            .find("span")
	            .addClass("active")
	            .end()
	            .siblings()
	            .find("span")
	            .removeClass("active");
	        //p标签
	        $("#menu li").eq($floor.index())
	            .find("p")
	            .addClass("active")
	            .end()
	            .siblings()
	            .find("p")
	            .removeClass("active");
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
/*  //非通用！！
    $(".next").click(function(){
	$(".prev").css("cursor","pointer");
	console.log($(".lunbo_con").css("margin-left"))
	if($(".lunbo_con").css("margin-left") == 0+"px"){
		$(".next").css("cursor","pointer");
		$(".lunbo_con").animate({marginLeft:-1200},1000);
	}
	else if($(".lunbo_con").css("margin-left") == -1200+"px"){
		$(".next").css("cursor","pointer");
		$(".lunbo_con").animate({marginLeft:-2082},1000);
	}
	else if($(".lunbo_con").css("margin-left") == -2082+"px"){
		$(".next").css("cursor","not-allowed");
	}
})
$(".prev").click(function(){
	$(".next").css("cursor","pointer");
	if($(".lunbo_con").css("margin-left") == 0+"px"){
		$(".prev").css("cursor","not-allowed");
	}
	else if($(".lunbo_con").css("margin-left") == -1200+"px"){
		$(".prev").css("cursor","pointer");
		
		$(".lunbo_con").animate({marginLeft:0},1000);
	}
	else if($(".lunbo_con").css("margin-left") == -2082+"px"){
		$(".prev").css("cursor","pointer");
		$(".lunbo_con").animate({marginLeft:-1200},1000);
	}
	
})*/

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

//广告的滚动
window.onload = function(){ 
  
    /*计算一个segment的宽度*/
  
    var segmentWidth = 0; 
    $(".gundong #content li").each(function(){ 
      segmentWidth+= $(this).outerHeight(true); 
    }); 
  
    $(".gundong #content li").clone().appendTo($(".gundong #content")); 
  
    run(10000); 
  
    function run(interval){ 
      $(".gundong #content").animate({"top":-segmentWidth}, interval,"linear",function(){ 
        $(".gundong #content").css("top",0); 
        run(10000); 
      }); 
    } 
  
    $(".gundong").mouseenter(function(){ 
      $(".gundong #content").stop(); 
    }).mouseleave(function(){ 
      var passedCourse = -parseInt($(".gundong #content").css("top")); 
      var time = 6000 * (1 - passedCourse/segmentWidth); 
      run(time); 
    }); 
    
    
    
    //手机跟随条
    var oPic = document.getElementById("bg_tiao");
		var oPicTop = oPic.offsetTop;
		window.onscroll = function(){
			var sTop = document.body.scrollTop || document.documentElement.scrollTop;
//			console.log(sTop)
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
  }; 
  

//ajax数据未加载完成前的动画
/*$(document).ready(function(){
     $.ajax({
        type:"get",
        cache:false,
        url:"ajaxpage.aspx?t=getcity",
        dataType:"json",
        beforeSend:function(){
           $("#vvv").append('<img src="../../images/loading.gif"  />');
        },
        success:function(data){
           $("#city").html(data.info);//添加下拉框的option
        },
        complete: function() {$("#vvv").remove();
        }
     })
})*/