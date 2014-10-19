var devUrl = isDev() ? "webApp/homePage/" : "" ;

//isDev 为 true 是开发状态
//false 为线上状态
function isDev(){

	if(location.hostname == "test.com" || location.hostname == "10.10.12.104"){
		return false;
	}
	if(location.pathname.indexOf("dist") > 0){
		return false;
	}

	return true;
};

function template (path){
	return "text!" + (isDev() ? "webApp/homePage/" : "") + "views/" + path + ".html";
}

require.config({
	"baseUrl" : '../../',
	"paths" : {
		"libs" : "lib.min",
		"app" : "app",
		"text" : "require.text",
		"query" : "plugin/query"
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
