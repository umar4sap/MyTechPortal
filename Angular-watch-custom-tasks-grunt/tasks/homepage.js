/**
 * Created by mohammad Umar on 7/30/2015.
 */


module.exports=function(grunt){

    var _ =grunt.util._;//laodsh

    grunt.registerTask("homepage","generates a homepage html file for our app",function(target){

        var context,source,targetConfig,template;

        target=target || "dist";
        this.requiresConfig("homepage.template");
        this.requiresConfig("homepage."+target);// user define msg this task require


        grunt.log.writeln("intial test");
        template=grunt.config.get("homepage.template");//grabbed config
        targetConfig=grunt.config.get("homepage."+target);// target configuration
        source=grunt.file.read(template); //grabbed the source
        context= _(grunt.config.get()).extend(targetConfig.context);
        grunt.file.write(targetConfig.dest, _(source).template(context));

        grunt.log.writeln("Homepage success "+ targetConfig.dest +"'")



    });
};