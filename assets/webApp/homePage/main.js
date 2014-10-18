var devUrl = isDev() ? "webApp/homePage/" : "" ;

function isDev(){

	return location.pathname.indexOf("dist") == -1;
};

function template (path){
	return "text!" + (isDev() ? "webApp/homePage/" : "") + "views/" + path + ".html";
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

	new app({
		baseUrl : devUrl + "views/",
		application : {
			"/list" : "list",
			"/pub" : "pub"
		}
	});
});
