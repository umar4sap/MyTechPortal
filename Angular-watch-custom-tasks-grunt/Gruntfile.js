module.exports=function(grunt){


    grunt.initConfig({
pkg: grunt.file.readJSON("package.json"),
//configured task
        concat: {
            js: {
                src: ['vendor/js/**/*.js', 'src/js/**/*.js'],//vendor file come first
                dest: 'dev/app.js'
            },
            css: {
                src: ['vendor/css/**/*.css', 'src/css/**/*.css'],
                dest: 'dev/app.css'
            }
        },
            homepage:{
               template:'src/index.us',
                 dev:{
                   dest:'dev/index.html',
                     context:{js:'app.js',
                             css:'app.css'
                            }


                      }

            },
        //automations dynamically shange content
        watch:{
            js:{
                files:['<%= concat.js.src %>'],
                tasks:['concat:js']

            },
            css:{ files:['<%= concat.css.src %>'],
                tasks:['concat:css']

            },
            homepage:{
                files:['<%= homepage.template %>'],
                tasks:['homepage:dev']
            }
        }




    });
    // loaded a task from a npm module
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");



    //load custom tasks
    grunt.loadTasks("tasks");



   // setup a work flow

    grunt.registerTask("default",["concat", "homepage:dev","watch"]);




};