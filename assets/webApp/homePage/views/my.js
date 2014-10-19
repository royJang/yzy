define(['libs',template('my')],function (libs,html){

	return {

		onCreate : function (){
			var headView = {};

			//详细页为2
			headView.style = 1;

			return headView;
		},
		onLoad : function (){

			$("#main").html(html);
		}
	}
});