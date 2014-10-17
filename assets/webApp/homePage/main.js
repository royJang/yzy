function template (path){
	return "text!views/" + path + ".html";
}

require.config({
	"baseUrl" : '../../',
	"paths" : {
		"libs" : "lib.min",
		"app" : "app",
		"text" : "require.text"
	}
});

require(['libs','app'],function (libs,app){

	var fn_list = function (){
		var List = new list();
		List.onLoad();
	};

	function fn_pub (){
		var Pub = new pub();
		Pub.onLoad();
	}

	var r = new Router({
		"/list" : fn_list,
		"/pub" : fn_pub
	})
	.configure({
		notfound : function (){
			$("section").remove();
			$("#main").html(notFound);
		}
	})
	.init();
});
