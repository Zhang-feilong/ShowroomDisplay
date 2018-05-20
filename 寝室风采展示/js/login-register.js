$(document).ready(function(){
	$('#btn').click(function(){
		var number = $('#number').val();
		var password = $('#password').val();
		var email = $('.email').val();
		if(number == ''){
			alert("账号不能为空！");
		}
		if(password == ''){
			alert("密码不能为空！");
		}
		if(email == ''){
			alert("邮箱不能为空！");
		}
	});
});


