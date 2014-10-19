define(['libs',template('more')],function (libs,html){

	return {

		onCreate : function (){
			var headView = {};

			headView.style = 1;

			return headView;
		},
		onLoad : function (){

			$("#main").html(html);
		}
	}
});