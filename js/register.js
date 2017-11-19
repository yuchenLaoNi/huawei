/*$(function() {
	$("#Register").click(function() {
		$("#ajaxForm").ajaxSubmit(function() {
			alert('在没有成功验证前你是看不到我滴...');
		});
	});
});*/
//全部验证通过
var verify = [false,false,false,false,false];
//手机号验证
$("#tel_num").blur(function(){
	$con = $("#tel_num").val();
	$che = $(".phone1").prop("checked");
	console.log($che)
	var reg = /^\d{11}$/;
	var reg2 = /^\d{4}-\d{8}$/;
	if($che){
		if($con == ""){
			$(".s2").css("display","block");
			$(".number").css("border","1px solid red");
			$(".s2").html("请输入手机号");
		}	
		else if(reg.test($con)){
			$(".s2").css("display","none");
			$(".number").css("border","1px solid green");
			verify[0] = true;
		}else{
			$(".s2").css("display","block");
			$(".number").css("border","1px solid red");
			$(".s2").html("手机号必须是11位的");
		}
	}else{
		if($con == ""){
			$(".s2").css("display","block");
			$(".number").css("border","1px solid red");
			$(".s2").html("请输入电话号");
		}	
		else if(reg2.test($con)){
			$(".s2").css("display","none");
			$(".number").css("border","1px solid green");
			verify[0] = true;
		}else{
			$(".s2").css("display","block");
			$(".number").css("border","1px solid red");
			$(".s2").html("电话号必须是4位区号加8位数字,如0000-88888888");
		}
	}

})

//图形验证码
 function getfun(){
	 		var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	 		var sum = "";
	 		for( var i = 0 ; i < 5 ; i ++ ){
				var index = getRand( 0,61 );
				sum += str.charAt(index);
			}
			return sum;//Math.rand().toString(36).substring(2,4);
	}
var pzm = $(".yzm4").html(getfun()).html().toLowerCase();

$(".yzm4").click(function(){
	pzm = $(".yzm4").html(getfun()).html().toLowerCase();
	$(".yzm4").css("background","url(login_img/"+getRand(1,7)+".JPG) no-repeat center")
//	console.log(pzm)
})
$("#p_yzm").blur(function(){
	$con = $("#p_yzm").val().toLocaleLowerCase();
	if($con == pzm){
		$(".p_yzm").css("border","1px solid green");
		$(".s3").css("display","none");
		verify[1] = true;
	}else{
		$(".s3").html("验证码有误！");
		$(".s3").css("display","block");
		$(".p_yzm").css("border","1px solid red");
	}
})
//短信验证60s
function invokeSettime(obj){
    var countdown=60;
    settime(obj);
    function settime(obj) {
        if (countdown == 0) {
            $(obj).attr("disabled",false);
            $(obj).text("获取验证码");
            countdown = 60;
            return;
        } else {
        	$(".getyzm").css("cursor","not-allowed")
            $(obj).attr("disabled",true);
            $(obj).text("(" + countdown + ")s重发");
            countdown--;
        }
        $timer = setTimeout(function() {
                    settime(obj) }
                ,1000)
    }
}
$(".getyzm").click(function(){
	 new invokeSettime(".getyzm");
})
$("#m_yzm").blur(function(){
	$con = $("#m_yzm").val();
	if($con.length == 6){
		$(".m_yzm").css("border","1px solid green");
		$(".s4").css("display","none")
		verify[2] = true;
	}else{
		$(".s4").html("请输入验证码")
		$(".s4").css("display","block")
		$(".m_yzm").css("border","1px solid red");
	}
})
//密码不做验证了好吧，就是判断一下2遍是不是一样，算了还是做了
$("#pwd").blur(function(){
	$con = $("#pwd").val();
	var reg = /^\w{6,18}$/;
	if($con == ""){
		$(".s5").css("display","block");
		$(".s5").html("请输入密码！");
		$(".pwd").css("border","1px solid red");
	}
	else if(reg.test($con)){
		$(".s5").css("display","none");
		$(".pwd").css("border","1px solid green");
		verify[3] = true;
	}else{
		$(".s5").css("display","block");
		$(".s5").html("密码必须是6-18字符，只能是字母数字下划线！");
		$(".pwd").css("border","1px solid red");
	}
})
$("#q_pwd").blur(function(){
	$con = $("#pwd").val();
	$con2 = $("#q_pwd").val();
	if($con == $con2 && $con != ""){
		$(".s6").css("display","none");
		$(".q_pwd").css("border","1px solid green");
		verify[4] = true;
	}else{
		$(".s6").css("display","block");
		$(".s6").html("两次密码不一致！");
		$(".q_pwd").css("border","1px solid red");
	}
})
$("#Register").click(function(){
		var verify2 = [true,true,true,true,true];
//		console.log(verify)
		
		var json = {"tel":$("#tel_num").val(),"pwd":$("#pwd").val()};
		document.cookie = `userList=${JSON.stringify( json )}`;
		if(JSON.stringify(verify) == JSON.stringify(verify2)){
			location.href = "loading.html";
			$(".s7").css("display","none");
		}else{
			$(".s7").html("注册内容有错误！");
			$(".s7").css("display","block");
		}
	
	
})
