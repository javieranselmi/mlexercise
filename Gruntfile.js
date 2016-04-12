module.exports = function(grunt) {
  
   // Project configuration.
  grunt.initConfig({

    buildFolder: 'build',

    pkg: grunt.file.readJSON('package.json'),
    
    //Concat options: Using to concatenate multiple files.
    concat: {
    
      options: {
        separator: ';'
      },

      build: {
        src: ['scripts/*.js'],
        dest: '<%= buildFolder %>/<%= pkg.name %>.js'
      }
    },


    //Uglify options: used to minify js files.
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }

  }); // End of grunt.initConfig

  //Grunt load tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat' , 'uglify']);
  
  };
