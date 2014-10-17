'use strict';

var fs = require("fs");
var _ = require("underscore");

/*
*   yzy hybrid app && h5
*   Gruntfile.js 2014-9-15
*/

module.exports = function (grunt){

	require('time-grunt');

	require('load-grunt-tasks')(grunt);

	var config = {};

	config.srcDir = "assets/webApp";
	config.distDir = "dist/";

	/*
	*   根据webApp下的目录生成Grunt配置文件
	*/
	var getFolderDir = function (){

		return fs.readdirSync(config.srcDir);
	};

	var setGruntConfig = function (){

		//获取webApp下的所有文件夹名称
		var dir = getFolderDir();

		for(var i= 0,len=dir.length;i<len;i++){

			//当前处理的文件
			var currentDir = dir[i];

			//注册grunt任务
			grunt.registerTask('puckForWeb_'+currentDir,'puckForWeb_Taks',function (){
				puckForWeb(currentDir);
				puckForApp(currentDir);
			});

			//注册watch任务
			var el = {};

			/*
			*   生成配置如下:
			*   el["homePage"] = {
			*       files : "assets/webApp/homePage/views/xx.{html,js}",
			*       tasks : ['puckForWeb_homePage]
			*   }
			*/
			el[currentDir] = {
				files : config.srcDir + "/" + currentDir + "/views/{,*/}*.{html,js}",
				tasks : ['puckForWeb_' + currentDir]
			};

			el[currentDir + "_2"] = {

				files : config.srcDir + "/" + currentDir + "/main.js",
				tasks : ['puckForWeb_' + currentDir]
			};

			//获取之前的watch配置
			var beforeWatchConfig = grunt.config.get('watch');

			//与当前配置合并，生成新的配置
			var newWatchConfig = _.extend(beforeWatchConfig,el);

			//设置watch任务配置
			grunt.config.set('watch',newWatchConfig);
		}
	};

	//初始化配置文件
	grunt.initConfig({
		config : config,
		connect : {
			options : {
				port : 3000,
				open : true,
				livereload : 35729,
				hostname : 'localhost'
			},
			livereload : {
				options : {
					middleware : function (connect){
						return [
							connect.static(config.srcDir)
						]
					}
				}
			},
			dist : {
				options : {
					base : '<%= config.distDir %>',
					livereload : false
				}
			}
		},
		copy : {
			//将assets下所有静态资源移入dist下
			//图片文件需要压缩
			resource : {
				flatten: true,
				//只复制文件，不复制文件夹
				//expand : true,
				src : 'assets/{,*/}*.{js,css}',
				dest : '<%= config.distDir %>'
			},
			html : {
				flatten : true,
				src : '<%= config.srcDir %>/**/index.html',
				dest : '<%= config.distDir %>'
			}
		},
		watch : {
			resource : {
				files : "<%= copy.resource.src %>",
				tasks : ['copy:resource']
			},
			html : {
				files : "<%= copy.html.src %>",
				tasks : ["copy:html"]
			}
		}
	});

	//设置Grunt配置
	setGruntConfig();

	//开发模式
	grunt.registerTask('dev','development',function (){
		grunt.tasks.run([
			'connect:livereload',
			'watch'
		]);
	});

	//h5 打包
	function puckForWeb (app){

		var path = config.srcDir + "/" + app + "/gruntCfg.json";

		var cfg = grunt.file.readJSON(path);

		var webCfg = cfg.requirejs.main.options["web"];
		var include = webCfg["include"];

		var src = config.srcDir + "/" + app + "/";
		var out = config.distDir + "assets/webApp/" + app + "/main.js";
		var exclude = ["libs","text","app"];

		var taskCfg = {};
		taskCfg.options = {
			"baseUrl" : src,
			"replace" : true,
			"paths" : {
				"libs" : "../../lib.min",
				"text" : "../../require.text",
				"app" : "../../app"
			},
			"include" : include,
			"out" : out,
			"exclude" : exclude
		};

		grunt.config.set('requirejs', { main: taskCfg });
		grunt.task.run(['requirejs']);
	}

	//hybrid 打包
	function puckForApp (app){

		//console.log('puckForApp');
	}
};
