define(['libs',template('pub')],function (libs,html){

	var pub = function (){};

	pub.prototype.onLoad = function (){

		$("section").remove();
		$("#main").html(html);
	};

	return pub;
});