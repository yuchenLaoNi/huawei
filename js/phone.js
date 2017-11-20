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

//点击-排序中选项
var count = 1;
$(".n2_ul li").click(function(){
	
	$(this).children().eq(0).css("color","#e01d20")
	$(this).siblings().children().css("color","#6e6e6e")
	$(".n2_ul").children().eq(0).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -70px")
	$(".n2_ul").children().eq(1).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -28px")
	$(".n2_ul").children().eq(2).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -70px")
})
//点击-价格
$(".n2_ul").children().eq(0).click(function(){
	if(count == 1){		
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -90px")
		count++
	}
	else if(count == 2){
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -110px")
		count--
	}
})
//点击-评价数
$(".n2_ul").children().eq(1).click(function(){
	if(count == 1){		
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -51px")
		count++
	}
	else if(count == 2){
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -45px")
		count--
	}
})
//点击-上架时间
$(".n2_ul").children().eq(2).click(function(){
	if(count == 1){		
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -90px")
		count++
	}
	else if(count == 2){
		$(this).children().eq(1).css("background","url(phone_img/p.png) no-repeat 0 -110px")
		count--
	}
})
//默认 - 全部 刷新页面

//n1_ul 点击事件
$(".n1_ul>li").click(function(){
	$(this).children().css("color","#e01d20");
	$(this).siblings().children().css("color","#333333")
})
//json
window.onload = function(){
	var index = 1;
	var deff = $.ajax({
		type:"get",
		url:"json/phone.json"
	});
	deff.done(function(arr){
		total = Math.ceil(arr.length/20);//总页数
		showData(index,arr);      
        //分页查找使用
        $('.M-box').pagination({
		    coping:true,
	      	keepShowPN: true,
		    pageCount: total,
		    callback:function(api){
		        var data = {
		            page: api.getCurrent(), //返回当前页码
		            name: 'mss',
		            say: 'oh'
		        };
		       var index = data.page;//页码
		        $.getJSON('json/phone.json',function(arr){
		            showData(index,arr);
		        });
		    },

		});

	})	
}
function showData(index,arr){
	var str = "";
    for( var i = (index-1)*20 ; i < index*20 ; i++ ){
    	if( i < arr.length ){
    		str += `<li>
					<div class="list_border">
						<p class="phone_img"><a href="">
							<img src="phone_img/${arr[i].phone_img}.jpg"/>
						</a></p>
						<p class="phone_name"><a href="">${arr[i].phone_name}</a></p>
						<p class="phone_price">${arr[i].phone_price}</p>
						<p class="phone_rec">
							<a href="javascript:;" class="rec_1">${arr[i].rec_1}</a>
							<i class="rec_2">${arr[i].rec_2}</i>
						</p>
					</div>	
				</li>`;
    	}
    }
    $(".list_ul").html( str );
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