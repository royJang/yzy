define(function(){var a="",b={};b.home_template=function(){var a="";return a+='<ul class="headView-home">',a+='<li><a href="javascript:void(0)">广场</a></li>',a+='<li><a href="javascript:void(0)">周边</a></li>',a+='<li><a href="javascript:void(0)">朋友们</a></li>',a+="</ul>"},b.home_func=function(){},b.home=function(){var c=b.home_template();a+=c,b.home_func()};var c=function(a){return a&&"object"==typeof a?a.baseUrl&&"string"==typeof a.baseUrl?a.application&&"object"==typeof a.application?(this.options={},this.options.baseUrl=a.baseUrl,this.options.application=a.application,void this.init()):void console.error("application must be a Object"):void console.error("baseUrl must be a String!"):void console.error("App router muest be requires  2 parameters!")};return c.prototype.init=function(){var a=[],b=[];for(var c in this.options.application)a.push(this.options.baseUrl+this.options.application[c]),b.push(c);this.setRouters(a,b)},c.prototype.setRouters=function(c,d){var e=function(){$("section").remove();var c,e=location.hash.slice(1);a:for(var f=0,g=d.length;g>f;f++)if(e==d[f].slice(1)){c=f;break a}var h=arguments[0][c];if(h.onCreate&&"function"==typeof h.onCreate){var i=h.onCreate(),j=i.style;1==j&&b.home()}$("header").html(a),sectionHTML=""};require(c,function(){var a={};e(arguments),arguments[0].onLoad();for(var b=0,f=c.length;f>b;b++)a[d[b]]=arguments[b].onLoad;new Router(a).configure({notfound:function(){$("section").remove(),$("#main").html("<h1>404 NOT FOUND</h1>")}}).init()})},c});