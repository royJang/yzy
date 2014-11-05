define(['libs'],function (libs){

	var Loading = function (options){

		if(options && typeof options == "object"){
			this.duration = options.duration;
		}

		this.buildElement();
	};

	Loading.prototype.buildElement = function (){

		var html = "";
		html += '<div class="ui-loading" style="display: none;">'
		html += '<div class="ui-mask" style="z-index:9999;position: fixed; top:0; bottom:0; right:0; left:0; background:rgba(0,0,0,0.7);">';
		html += '</div>'
		html += '<div class="ui-pic" style=" z-index:10000; border-radius:100px; position: fixed;top:0;bottom:0;left:0;right:0; width:100px; height:100px; background: #000;margin:auto;">';
		html += '<img src="../../../images/loading.gif" style="margin:26px;">';
		html += '</div>';
		html += '</div>';

		this.loading = $(html);

		$("body").append(this.loading);
	};

	Loading.prototype.show = function (){

		this.loading.show();
	};

	Loading.prototype.hide = function (){

		this.loading.hide();
	};

	return Loading;
});