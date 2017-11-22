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
/*//加和减（shop）
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
})*/

//购物车数量----------------------------------------------




	var arr = getCookie("prolist");
window.onload = function(){
	var brr=[];
	var shopsum2 = 0;
	
	brr.length=0;

	for(var i = 0; i < arr.length ; i++){
		shopinfo = arr[i];
		brr.push(shopinfo.count)
		shopsum2 = shopinfo.count;
	}
	shopsum2=brr.reduce(function(a,b){
		return a+b;
	})
	$(".shop_count").html(shopsum2)
	$(".shop_count").css("color","red")
}
//-----------------------------------------------------------
var str = "";
	for( var i = 0; i < arr.length ; i++ ){
		shopinfo = arr[i];
		str += '<div class="list_2">'+
					'<label class="fl"><input class="ck" type="checkbox"/></label>'+
					'<div class="list_con"><div class="con_t"><a href="details.html"><img src="phone_img/'+shopinfo.src+'.jpg"/></a>'+
					'<ul><li class="li1"><a href="details.html">'+shopinfo.name+'</a></li>'+
					'<li>'+shopinfo.price+'</li>'+
					'<li '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
						'><div class="stock"><input type="text" id="shop_num" value="'+shopinfo.count+'"/><p class="stock_btn"><a href="javascript:;" class="jia"  data-number="1">+</a><a href="javascript:;" class="jian jia" data-number="-1">−</a></p></div></li>'+
						'<li><em class="sumPrice">￥'+(shopinfo.count * shopinfo.price.substr(1))+'</em></li>'+
					'<li><i class="delBtn">删除</i></li></ul>'+
				'</div>'+'<div class="con_b"><p class="fuwu1">服务：</p><p>延保&emsp;&emsp;华为延长服务宝（一年期）￥158&emsp;&emsp;华为延长服务宝（半年期）￥88 </p><p>碎屏保&emsp;华为碎屏服务宝（一年期）￥129</p></div></div></div>';
	}
	
	$(".add_json").html( str );
	
//点击左侧复选框   结算商品数量和个数
	$(".ck").click(function(){
		jiesuan();
	})
	if(str == ""){
		$(".shop_main_1").css("display","block")
	}else{
		$(".shop_main_1").css("display","none")
	}
	
	
	//全选和结算
	$("#selectAll").click(function(){
		$(".ck").prop( "checked" , $(this).prop("checked") );
		jiesuan();
	})
	
	//结算功能
	function jiesuan(){
		var proCount = 0;
		var proMoney = 0;
		$(".ck:checked").each(function(){
			proCount += Number($(this).parent().next().children().eq(0).children().eq(1).children().eq(2).children().find("#shop_num").val());

			proMoney += parseInt( $(this).parent().next().children().eq(0).children().eq(1).children().eq(3).find(".sumPrice").html().substr(1) );
//			console.log(proMoney)
		})
		$(".ZX").html( proCount );
		$(".money2").html( proMoney );
	}
	
	//加减操作
	$(".jia").click(function(){
		//确定操作的商品编号
		var id = $(this).parent().parent().parent().data("id");
		
		var pname = $(this).parent().parent().parent().data("name");

		//获取操作符
		var sign = $(this).html();
//		console.log(sign)
		var shopnum = $(this).parent().parent().parent().find("#shop_num").val();
		console.log(shopnum)
		if( shopnum == 1 && sign == "-" ){ //如果商品数量为1  并且是 - 不在执行后面代码 
			return;
		}
//		console.log(arr[1].price)
		for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id && pname == arr[i].name ){
				sign == "+" ? arr[i].count++ : arr[i].count--;
				//重新改写cookie数据
				setCookie("prolist",JSON.stringify(arr));
				//操作页面
				$(this).parent().parent().parent().find("#shop_num").val( arr[i].count );
				$(this).parent().parent().parent().next().children().eq(0).html( arr[i].count*arr[i].price.substr(1) );
//				console.log(arr[i].price.substr(1) )
				//结算
				jiesuan();
				break;
			}
		}
		
	})
	
	//删除
	$(".delBtn").click(function(){
		//获取当前要删除的商品编号 和 名字
		var id = $(this).parent().prev().prev().data("id");
//		console.log(id)
		var pname = $(this).parent().prev().prev().data("name");
		for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id && pname == arr[i].name ){
				if( confirm("确定要删除么？") ){
					//将数组中位置i处的数据删除  splic(2,1)
					arr.splice(i,1);
					//操作数组改变后  重新存储cookie  
					setCookie("prolist",JSON.stringify(arr));
					
					//修改页面
					$(this).parent().parent().parent().parent().parent().remove();
				}
				break;
			}
		}
		
	})