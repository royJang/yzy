define(['libs',template('my')],function (libs,html){

	return {

		onCreate : function (){
			var headView = {};

			//详细页为2
			headView.style = 1;

			return headView;
		},
		onLoad : function (){

			$("footer ul li").removeClass("active").eq(3).addClass("active");

			$("#main").html(html);
		}
	}
});