define(['libs',template('pub')],function (libs,html){

	return {

		onLoad : function (){

			$("section").remove();
			$("#main").html(html);
			console.log("pub");
		}
	}
});