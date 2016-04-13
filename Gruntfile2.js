Concat options: Using to concatenate multiple files.
    concat: {
      options: {
        separator: ';'
      },

      build: {
        src: ['src/js/*.js','src/js/**/*.js'],
        dest: 'dist/js/app.js'
      }
    },

    //Uglify options: used to minify js files.
    uglify: {
      dist: {
        src: 'dist/js/app.js',
        dest:'dist/app.min.js'
      }
    }