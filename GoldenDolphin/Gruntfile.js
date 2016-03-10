module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-spritesmith');
//  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.initConfig({
    //cssmin  скомбинировать файлы в один 
    cssmin: {
      style: {
        files: {
          'css/style.min.css': ['css/*.css'] // все css
//          'css/style.min.css': ['css/unCssStyle.css'] //минификация UnCss
        }
      }
    },

    //css min   сделать на каждый файл свою минификацию
    //    cssmin: {
    //  style: {
    //    files: [{
    //      expand: true,
    //      cwd: 'css/',
    //      src: ['*.css', '!*.min.css'],
    //      dest: 'css/',
    //      ext: '.min.css'
    //    }]
    //  }
    //},

    less: {
      style: {
        files: {
          "css/style.css": ["less/style.less"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      style: {
        src: "css/style.css"
      }
    },

    watch: {
      style: {
        files: "**/*.less",
        tasks: ["less"]
      }
    },
    // spritesmith делает спрайт и css к нему
    sprite: {
      style: {
        src: ['img/colors/*.jpg'], //путь до картинок
        dest: 'img/colors/colors__spritesheet.jpg', // путь куда положить результат
        destCss: 'css/colors__sprites2.css' // путь куда положить css результата
      }
    },

    // browserSync синхронизирует изменения файлов с браузером
    browserSync: {
      style: {
        bsFiles: {
          src: [
                        'css/*.css',
                        '*.html'
                    ]
        },
        options: {
          //  watchTask: true,
          baseDir: "./"
        }
      }
    },
    
    // Убираем ненужное в CSS
    uncss: {
      dist: {
        files: {
          'css/unCssStyle.css': 'index.html'
        }
      }
    }
  });
};
