define(['libs', template('login')],function (libs,html){
	var checkLogin = function (user,pwd,callback){
		if(!user.val() || !pwd.val()){
			return callback({errorMsg : "用户名或密码错误!"});
		}
		return callback(null);
	};
	var userLogin = function (){
		location.href = "/webApp/homePage/index.html#list";
	};
	return {
		onCreate : function (){
			var headView = {};
			headView.style = 3;
			return headView;
		},
		onLoad : function (){

			var wrapper = $("#article_LOGIN");
			wrapper.html(html);

			var loginBtn = wrapper.find(".login"),
				user = wrapper.find(".username"),
				pwd = wrapper.find(".pwd");

			loginBtn.on("tap",function (){
				checkLogin(user,pwd,function (err){
					console.log(err);
					if(!err){
						userLogin();
						return;
					}
					alert(err.errorMsg);
				});
			});
		}
	}
});