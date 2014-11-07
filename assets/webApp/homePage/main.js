var devUrl = isDev() ? "webApp/homePage/" : "" ;

function isDev(){
	if(location.hostname == "test.com" || location.port == "3300"){
		return false;
	}
	return location.pathname.indexOf("dist") <= 0;
}

function template (path){
	return "text!" + (isDev() ? "webApp/homePage/" : "") + "views/" + path + ".html";
}

require.config({
	baseUrl : '../../',
	paths : {
		"libs" : "lib.min",
		"app" : "app",
		"text" : "require.text",
		"query" : "plugin/query",
		"loading" : "plugin/ui_loading",
		"collect" : "plugin/ui_collect"
	}
});
require(['libs','app'],function (libs,app){
	new app({
		baseUrl : devUrl + "views/",
		application : {
			"/list" : "list",
			"/my" : "my",
			"/more" : "more"
		}
	});
});
