define(function (){

	var headerHTML = "";
	var footerHTML = "";

	/*
	 *   header view / bottom view / channel view
	 */
	var headViewFoo = {};
	var footerViewFoo = {};

	/*
	 *
	 *   header
	 *   style [1]
	 *
	 * */

	headViewFoo.home_template = function (item){

		if($.type(item) != "array") return;

		var len = item.length;

		var itemsWidth = "20%",
			titleWidth = (100 - (20 * len)) + "%";

		var html = "",
			leftHtml = "",
			rightHtml = "";

		var filterList = "";

		//创建广播
		var cBc = '<li style="width:'+ itemsWidth +';" class="nav-item-broadcast"><i class="fa fa-pencil-square-o"></i></li>';
		//筛选列表
		var filter = '<li style="width:'+ itemsWidth +'; font-size:14px;" class="nav-item-filter">广场<i class="fa fa-caret-down" style="font-size:12px;margin-left:5px;"></i></li>';
		//查询
		var search = '<li style="width:'+ itemsWidth +';" class="nav-item-search"><i class="fa fa-search"></i></li>';

		for(var i= 0;i<len;i++){
			if(item[i] == "search"){
				rightHtml += search;
			}else if(item[i] == "filter"){
				leftHtml += filter
				filterList += '<div class="filter-list" style="display: none;">';
				filterList += '<ul>';
				filterList += '<li>广场</li>';
				filterList += '<li>周边</li>';
				filterList += '<li>朋友们</li>';
				filterList += '</ul>';
				filterList += '</div>';
			}else if(item[i] == "broadcast"){
				rightHtml += cBc;
			}
		}

		html += '<ul class="headView-style-1">';
		html += leftHtml;
		html += '<li style="width:'+ titleWidth +';">&nbsp;</li>';
		html += rightHtml;
		html += '</ul>';
		html += filterList;

		return html;
	};

	headViewFoo.home_func = function (){

		var cBroadcast = function (){
			window.location.href = "/webApp/broadcast/index.html";
		};

		var search = function (){
			console.log('search');
		};
		var filterIndex = 0;
		var filter = function (e){
			e.stopPropagation();
			filterIndex++;
			if(filterIndex % 2 == 0) return;
			$(".filter-list").toggle();
		};

		$(document).on("tap",function(){ $(".filter-list").hide() })

		$(".nav-item-broadcast").on("tap",cBroadcast);
		$(".nav-item-filter").on("tap",filter);
		$(".nav-item-search").on("tap",search);

		$("body").on("tap",function (){

			$(".filter-list").removeClass("show");
		});
	};

	headViewFoo.home = function (item){

		var html = headViewFoo.home_template(item);
		$("header").html(html);

		headViewFoo.home_func();
	};

	/*
	 *   header [2]
	 *
	 *    //leftBtn 默认执行返回
		 headView.setHeader = {
			 title : '发现',
			 leftBtn : {
				 'text' : '返回',
				 'fn' : back
		    }
	    };
	 *
	 * */

	headViewFoo.detail_template = function (title,left,right){

		var html = '';
		html += '<ul class="headView-style-2">';
		html += '<li class="headView-btn-left">'+ left +'</li>';
		html += '<li class="headView-title">'+ title +'</li>';
		html += '<li class="headView-btn-right">'+ right +'</li>';
		html += '</ul>';

		return html;
	};

	headViewFoo.leftBtnFn = function (){
		history.back();
	};

	headViewFoo.rightBtnFn = function (){

	};

	headViewFoo.detail = function (options){

		var title = options.title || "";
		var leftBtn = options.leftBtn;
		var rightBtn = options.rightBtn;

		//左键 text , events
		var headViewLeftBtnText = "返回",
			headViewLeftBtnFn = headViewFoo.leftBtnFn;

		var headViewRightBtnText = "",
			headViewRightBtnFn = function (){};

		if(typeof leftBtn == "object"){

			if(typeof leftBtn.text == "string"){
				headViewLeftBtnText = leftBtn.text;
			}
			if(leftBtn.fn && typeof leftBtn.fn == "function"){
				headViewLeftBtnFn = leftBtn.fn;
			}
		}

		if(typeof rightBtn == "object"){
			if(typeof rightBtn.text == "string"){
				headViewLeftBtnText = rightBtn.text;
			}
			if(rightBtn.fn && typeof rightBtn.fn == "function"){
				headViewLeftBtnFn = rightBtn.fn;
			}
		}

		var html = headViewFoo.detail_template(title,headViewLeftBtnText,headViewRightBtnText);

		$("header").html(html);

		var headViewLeftBtn = $(".headView-btn-left"),
			headViewRightBtn = $(".headView-btn-right");

		headViewLeftBtn.on('tap',headViewLeftBtnFn);
		headViewRightBtn.on('tap',headViewRightBtnFn);
	};

	/*
	*
	*   header [3]
	*
	* */
	headViewFoo.onlyHeaderWithTitle = function (){
		$("header").html('<div class="headView-style-3"><h2>悦自游</h2></div>');
	};


	/*
	 *
	 *   footer [1]
	 *
	 * */

	footerViewFoo.home_template = function (){

		var html = "";

		html += '<ul>';
		html += '<li><a href="#list"><i class="fa fa-comment"></i>消息</a></li>';
		html +=	'<li><a href="javascript:void(0);"><i class="fa fa-map-marker"></i>地图</a></li>';
		html +=	'<li><a href="#more"><i class="fa fa-bell"></i>发现</a></li>';
		html +=	'<li><a href="#my"><i class="fa fa-user"></i>我</a></li>';
		html += '</ul>';

		return html;
	};

	footerViewFoo.home_func = function (){


	};

	footerViewFoo.home = function (){

		var html = footerViewFoo.home_template();
		$("footer").html(html);

		footerViewFoo.home_func();
	};

	/*
	 *
	 *   app init
	 *
	 * */

	var app = function (config){

		//参数判断
		if(!config || typeof config != "object"){
			console.error("App router muest be requires  2 parameters!");
			return;
		}

		if(!config.baseUrl || typeof config.baseUrl != "string"){

			console.error("baseUrl must be a String!");
			return;
		}

		if(!config.application || typeof config.application != "object"){

			console.error("application must be a Object");
			return;
		}

		this.options = {};
		this.options.baseUrl = config.baseUrl;
		this.options.application = config.application;

		this.init();
	};

	app.prototype.init = function (options){

		var requireModule = [],
			paths = [];

		for(var i in this.options.application){

			requireModule.push(this.options.baseUrl + this.options.application[i]);
			paths.push(i);
		}

		this.setRouters(requireModule,paths);
	};

	app.prototype.setRouters = function (requireModule,paths){

		var setViews = function (){

			//先把之前的元素kill掉
			$("section").remove();

			var channel = location.hash.slice(1),
				now;

			//如果没有hash值,就走第一条路径
			if(channel == ""){

				now = 0;

			}else{

				label:for(var i= 0,len=paths.length;i<len;i++){

					if(channel == paths[i].slice(1)){

						now = i;
						break label;
					}
				}
			}

			//view 初始化
			var cViews = arguments[0][now];

			//views onCreate
			if(cViews.onCreate && typeof cViews.onCreate == "function"){
				//创建头部和尾部
				var headView = cViews.onCreate();
				if(headView){
					var style = headView.style;
					var navItems = headView.navItem || ["filter","search","broadcast"];
					var options = headView.setHeader || {};

					//主页
					if(style == 1){
						headViewFoo.home(navItems);
						footerViewFoo.home();
						//底部的4个频道
					}else if(style == 2){
						headViewFoo.detail(options);
						footerViewFoo.home();
					}else if(style == 3){
						headViewFoo.onlyHeaderWithTitle(options);
					}
				}
			}
		};

		require(requireModule,function mod(){

			var router = {};
			var now = 0;

			var args = arguments;

			//无hash执行执行第一个函数
			if(!location.hash) {
				setViews(arguments)
				arguments[0].onLoad();
			}

			//将函数赋值给hash
			for(var i= 0,len=requireModule.length;i<len;i++){
				var arg = arguments[i];
				router[paths[i]] = {
					"on" : arg.onLoad,
					"after" : arg.after || function (){},
					//先执行每个channel自己的before,然后执行setViews
					"before" : ((arg.before && arg.before()) ? 1 : 1) && function (){
						setViews(args);
					}
				}
			}

			//创建路由
			var r = new Router(router).configure({
				notfound : function (){
					$("section").remove();
					$("#main").html("<h1>404 NOT FOUND</h1>");
				}
			}).init();
		});
	};

	return app;
});