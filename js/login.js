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
	$con2 = $("#b_pass").val();
	if($con != ""){
		$(".s1").css("display","none");
	}
	if($con2 != ""){
		$(".s2").css("display","none");
	}
})
$("#b_text").blur(function(){
	$con = $("#b_text").val();
	$con2 = $("#b_pass").val();
	if($con == ""){
		$(".s1").css("display","inline");
		$(".s1").html("请输入华为账号");
	}
	else if($con.length < 5 && $con !=""){
		$(".s1").css("display","inline");
		$(".s1").html("华为账号为5-30个字符");
	}
	if($con == ""){
		$(".s1").css("display","inline");
		$(".s1").html("请输入密码");
	}
})
//点击登录    验证账号与密码
/*$("#login_button").click(function(){
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0 ; i < arr.length ; i++){
				var item = arr[i].split("=");
				if( item[0] == "userList" ){
					var json = JSON.parse( item[1] );
					if( json["email"] == $("lemail").value && json["pwd"] == $("lpwd").value ){
						location.href = "test6动态创建表格DOM操作.html";
					}else{
						alert("登陆失败");
					}
				}
			}
		})*/

