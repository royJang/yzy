define(['libs', template('register')],function (libs,html){

	return {

		onCreate : function (){
			var headView = {};

			headView.style = 2;

			return headView;
		},
		onLoad : function (){

			$("#main").html(html);
		}
	}
});