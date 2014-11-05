define(["libs"],function (libs){

	/*
	*   var collect = new Collect({
	*       before : function (){},
	*       after : function (){}
	*   });
	*
	*   collect.show();
	*   collect.hide();
	* */

	var Collect = function (options){
		this.options = (options && typeof options == "object") ? options : {};
		this.init();
	};

	Collect.prototype.init = function (){
		//初始化,添加样式
		var html = '<div class="myCollectBox" style="display: none">';
		html += '<div class="myCollectBox-header">';
		html += '<div class="myCollectBox-closeBtn">X</div>';
		html += '<div class="myCollectBox-team"><ul><li>下次旅行</li></ul></div>';
		html += '<button>+新分组</button>';
		html += '</div>';

		this.el = $(html);

		$("body").html(this.el);

		var self = this;

		$(".myCollectBox-closeBtn").on("tap click",function (){
			self.fnHide.call(self);
		});
	};

	Collect.prototype.show = function (){
		//展示组件之前的回调
		this.options.before && this.options.before();
		//打开组件
		this.el.show();
	};

	Collect.prototype.fnHide = function (){
		//关闭组件
		this.el.hide();
		//关闭后的回调
		this.options.after && this.options.after();
	};

	Collect.prototype.getTeamInfo = function (){
		//发送ajax请求，回调加入DOM
	};

	Collect.prototype.createNewTeam = function (){
		//添加element进DOM
		//发送ajax请求
	};

	Collect.prototype.collectIt = function (){
		//点击任意TEAM，发送ajax请求，成功关闭组件，失败提示
	};

	return Collect;
});