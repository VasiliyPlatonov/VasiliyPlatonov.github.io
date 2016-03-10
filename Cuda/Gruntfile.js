module.exports = function(grunt) {
  
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.initConfig({
  //cssmin  скомбинировать файлы в один 
    cssmin: {
      style: {
        files: {
          'css/style.min.css': ['css/*.css']
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
          "css/style.css" : ["less/style.less"]
         }
      }
    },    
    
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']        
      },
      style: {
      src : "css/style.css"
    }
    },
    
    watch: {
      style: {
        files: "**/*.less",
        tasks: ["less", "autoprefixer"]
      }
    }
  });
}; 