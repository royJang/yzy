define(function(){var a={},b={};a.home_template=function(){var a="";return a+='<ul class="headView-style-1">',a+='<li class="percent20"><i class="fa fa-list"></i></li>',a+='<li class="percent60">&nbsp;</li>',a+='<li class="percent20"><i class="fa fa-pencil-square-o"></i></li>',a+="</ul>"},a.home_func=function(){},a.home=function(){var b=a.home_template();$("header").html(b),a.home_func()},a.detail_template=function(a,b,c){var d="";return d+="<ul>",d+='<li class="headView-btn-left">'+b+"</li>",d+='<li class="headView-title">'+a+"</li>",d+='<li class="headView-btn-right">'+c+"</li>",d+="</ul>"},a.leftBtnFn=function(){history.back()},a.rightBtnFn=function(){},a.detail=function(b){var c=b.title||"",d=b.leftBtn,e=b.rightBtn,f="返回",g=a.leftBtnFn,h="",i=function(){};"object"==typeof d&&("string"==typeof d.text&&(f=d.text),d.fn&&"function"==typeof d.fn&&(g=d.fn)),"object"==typeof e&&("string"==typeof e.text&&(f=e.text),e.fn&&"function"==typeof e.fn&&(g=e.fn));var j=a.detail_template(c,f,h);$("header").html(j);var k=$(".headView-btn-left"),l=$(".headView-btn-right");k.on("tap",g),l.on("tap",i)},b.home_template=function(){var a="";return a+="<ul>",a+='<li><a href="#list"><i class="fa fa-comment"></i>消息</a></li>',a+='<li><a href="javascript:void(0);"><i class="fa fa-map-marker"></i>地图</a></li>',a+='<li><a href="#more"><i class="fa fa-bell"></i>发现</a></li>',a+='<li><a href="#my"><i class="fa fa-user"></i>我</a></li>',a+="</ul>"},b.home_func=function(){},b.home=function(){var a=b.home_template();$("footer").html(a),b.home_func()};var c=function(a){return a&&"object"==typeof a?a.baseUrl&&"string"==typeof a.baseUrl?a.application&&"object"==typeof a.application?(this.options={},this.options.baseUrl=a.baseUrl,this.options.application=a.application,void this.init()):void console.error("application must be a Object"):void console.error("baseUrl must be a String!"):void console.error("App router muest be requires  2 parameters!")};return c.prototype.init=function(){var a=[],b=[];for(var c in this.options.application)a.push(this.options.baseUrl+this.options.application[c]),b.push(c);this.setRouters(a,b)},c.prototype.setRouters=function(c,d){var e=function(){$("section").remove();var c,e=location.hash.slice(1);if(""==e)c=0;else a:for(var f=0,g=d.length;g>f;f++)if(e==d[f].slice(1)){c=f;break a}var h=arguments[0][c];if(h.onCreate&&"function"==typeof h.onCreate){var i=h.onCreate(),j=i.style,k=i.setHeader||{};1==j?(a.home(),b.home()):2==j&&(a.detail(k),b.home())}};require(c,function(){var a={};e(arguments),arguments[0].onLoad();for(var b=0,f=c.length;f>b;b++)a[d[b]]={on:arguments[b].onLoad,before:function(){},after:function(){}};new Router(a).configure({notfound:function(){$("section").remove(),$("#main").html("<h1>404 NOT FOUND</h1>")}}).init()})},c});