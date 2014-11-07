define(['libs', template('more')],function (libs,html){
	return {
		onCreate : function (){
			var headView = {};
			headView.style = 1;
			headView.navItem = ['broadcast'];
			return headView;
		},
		onLoad : function (){
			$("footer ul li").removeClass("active").eq(2).addClass("active");
			$("#main").html(html);
		}
	}
});