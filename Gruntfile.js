module.exports = function(grunt) {
  
   // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
  
  
    //Start jshint configuration
    jshint: {
        all: [
                'Gruntfile.js',
                'src/js/*.js',
                '!src/vendor/*'
              ]
    },//End jshint configuration

    //Start sass configuration
    sass: {

      options: {                       // Target options
        sourcemap: 'none'
      },

      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['src/css/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },//End sass configuration

    
    //Start postcss configuration (autoprefixer,minifier)
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 1 version']}),
          require('cssnano')()
        ]
      },
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['dist/css/*.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },//End postcss configuration (autoprefixer,minifier)


    //Start htmlmin configuration (minifies html files)
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['src/*.html'],
          dest: 'dist',
          }]
      }
    },//End htmlmin configuration (minifies html files)
    
        
    copy: { //Copy all vendor files into dist folder
      dist: {
        files: [
          // includes files within path
          {
           expand: true, 
           flatten: true,
           src: ['src/js/vendor/**'],
           dest: 'dist/js/vendor',
           filter: 'isFile'
          },

          {
           expand: true, 
           flatten: true,
           src: ['src/css/vendor/**'],
           dest: 'dist/css/vendor',
           filter: 'isFile'
          },

          {
           expand: true, 
           flatten: true,
           src: ['src/js/*.js'],
           dest: 'dist/js',
           filter: 'isFile'
          }
            
        ],
      },
    },


    //Start uglify configuration (minifies js file)
    uglify: {
      dist: {
                files: [{
                  expand: true,
                  flatten: true,
                  src: ['dist/js/*.js'],
                  dest: 'dist/js',
                  ext: '.min.js'
                }]
      }
    },//End uglify configuration (minifies js file)


/* MUST FIX CONCAT
    //Start concat configuration (concatenates all js files into one)
    concat: {
      options: {
        separator: ';'
      },

      dest: {

        files: [{
                  expand: true,
                  flatten: true,
                  src: ['src/js/vendor/jquery*.js', //jquery has to go before bootstrap
                        'src/js/vendor/bootstrap*.js',//bootstrap goes next
                        'src/js/vendor/*.js', //rest of vendors
                        'src/js/*.js' //rest of custom js files
                       ],
                  dest: 'dist/js/fullapp.min.js',
                  },
                {
                  expand: true,
                  flatten: true,
                  src: ['src/css/vendor/*.css', //css vendors
                        'src/css/*.css' //rest of custom css files
                       ],
                  dest: 'dist/css/fullapp.min.css',
                  }

                ]
        
      }
    } //End concat configuration (concatenates all js files into one)

*/
    
  }); // End of grunt.initConfig

  //Grunt load tasks

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');

  // Register our own custom task alias.
  //grunt.registerTask('dist', ['jshint', 'sass','postcss', 'htmlmin', 'copy:dist']);
  grunt.registerTask('dist', ['jshint', 'sass','postcss','htmlmin','copy:dist','uglify','concat']);
  
  };
