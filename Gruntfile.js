module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {//合并任务
            domop : {//目标
                src: ['example/js/*.js'],
                dest: 'tmp/production.js'
            },
            css : {//目标

                src: ['example/css/*.css'],
                dest: 'tmp/all.css'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'tmp/production.js',
                dest : 'dest/js/production.min.js'
            }
        },
        cssmin: { //压缩css
            css: {
                src: 'tmp/all.css',
                dest: 'dest/css/all.min.css'
            }
        },
        //清除创建的临时文件
        clean: {
            test: ['tmp']
        },
        targethtml: {
          dist: {
            options: {
              curlyTags: {
                  rlsdate: '<%= grunt.template.today("yyyymmdd") %>'
              }
            },
            files: {
              'view/index.cshtml': 'view/dest.html'
            }
          }/*,
          dev:{
              files:{
                 'view/index.html': 'view/dest.html'
              }
          }*/
        }

    });
    // 载入concat和uglify和css插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-css');
    //clear
    grunt.loadNpmTasks('grunt-contrib-clean');
    //dev、production
    grunt.loadNpmTasks('grunt-targethtml')
	
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify','cssmin','clean','targethtml']);

    grunt.registerTask('targetHTML',['targethtml'])

}; 