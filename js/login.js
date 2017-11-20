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
	
//表单验证+  思路 聚焦事件、点击记住checked+cookie保存7天

//账号
$("#b_text").keyup(function(){
	$con = $("#b_text").val();
	if($con != ""){
		$(".s1").css("display","none");
	}
})
$("#b_pass").keyup(function(){
//	$con = $("#b_text").val();
	$con2 = $("#b_pass").val();
	if($con2 != ""){
		$(".s2").css("display","none");
	}
})
$("#b_text").blur(function(){
	$con = $("#b_text").val();
	if($con == ""){
		$(".s1").css("display","block");
		$(".s1").html("请输入华为账号");
	}
	else if($con.length < 5 && $con !=""){
		$(".s1").css("display","block");
		$(".s1").html("华为账号为5-30个字符");
	}
	
})
$("#b_pass").blur(function(){
	$con = $("#b_pass").val();
	if($con == ""){
		$(".s2").css("display","block");
		$(".s2").html("请输入密码");
	}
	else if($con.length < 6 && $con !="" && $con.length>18){
		$(".s2").css("display","block");
		$(".s2").html("华为密码为6-18个字符,只能字母下划线数字！");
	}
})
//点击登录    验证账号与密码
$("#login_button").click(function(){
	if($("#checkRem").prop("checked")){
		setCookie("tel",$("#b_text").val(),7);
		
	}
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0 ; i < arr.length ; i++){
				var item = arr[i].split("=");
				if( item[0] == "userList" ){
					var json = JSON.parse( item[1] );
					if( json["tel"] == $("#b_text").val() && json["pwd"] == $("#b_pass").val() && json["tel"] != ""){
						location.href = "index.html";
						$(".s3").css("display","none");
					}else{
						$(".s3").css("display","block");
						$(".s3").html("输入的账号或密码有误!");
					}
				}
			}
		})
var b = getCookie("tel");
$("#b_text").val(b);
