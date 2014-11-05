require.config({
	"baseUrl" : '../../',
	"paths" : {
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
		baseUrl : y.devUrl + "views/",
		application : {
			"/list" : "list",
			"/my" : "my",
			"/more" : "more"
		}
	});
});
