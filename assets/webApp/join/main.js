var devUrl = isDev() ? "webApp/join/" : "" ;

function isDev(){
	if(location.hostname == "test.com" || location.port == "3300"){
		return false;
	}
	return location.pathname.indexOf("dist") <= 0;
}

function template (path){
	return "text!" + (isDev() ? "webApp/join/" : "") + "views/" + path + ".html";
}

require.config({
	"baseUrl" : "../../",
	"paths" : {
		"libs" : "lib.min",
		"app" : "app",
		"text" : "require.text",
		"query" : "plugin/query",
		"loading" : "plugin/ui_loading"
	}
});

require(['libs','app'],function (libs,app){
	new app({
		baseUrl : devUrl + "views/",
		application : {
			"/login" : "login",
			"/register" : "register"
		}
	});
});
