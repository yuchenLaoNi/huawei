window.onload = function(){
	$(".aline").click(function(){
		$(".b-account").css({"display":"none"});
		$(".b-account2").css({"display":"block"});
		$(".aline").css("color","#B60600");
		$(".acount").css("color","#333");
	})
	$(".acount").click(function(){
		$(".b-account").css({"display":"block"});
		$(".b-account2").css({"display":"none"});
		$(".aline").css("color","#333");
		$(".acount").css("color","#B60600");
	})
}
	
//表单验证