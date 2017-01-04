var gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    imageminSvgo = require('imagemin-svgo'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminOptipng = require('imagemin-optipng'),
    debug = require('gulp-debug'); // пример => .pipe(debug("title: "))






// SCSS - конвертирует стили scss => css
gulp.task('scss', function() {
    return gulp.src('./*.scss')
        .pipe(scss({
            includePaths: require('bourbon').includePaths
        }).on('error', scss.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});



// СSS - минифицирует css и cкладывает в build
gulp.task('build:css', function() {
    gulp.src('src/css/**/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))

    .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('build/css/'));
});



// SRC:SCRIPTS
gulp.task('src:scripts', function() {
    gulp.src([ // Берем все необходимые библиотеки
            // './src/js/libs/имяНужногоПлагина.js',  <=  пример
            // './src/js/libs/bootstrap.js',
            './bower_components/jquery.stellar/src/jquery.stellar.js',
            './src/js/libs/jquery.smooth-scroll.js',
            './src/js/libs/Quicksand.js',
            './src/js/libs/owl.carousel.js'

            // './src/js/libs/chosen.jquery.js'
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        // .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('./src/js')); // Выгружаем в папку app/js
});




// BUILD:SCRIPTS - минифицирует -> конкатенирует -> складывает в build JS файлы плагинов
gulp.task('build:scripts', function() {
    gulp.src([ // Берем все необходимые библиотеки
            './src/js/libs/**/*.js', // Берем все js файлы в libs
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js')); // Выгружаем в папку app/js
});



// IMG - минификация картинок
gulp.task('build:img', function() {
    gulp.src('src/img/**/*')
        // .pipe(imagemin({
        //     use: [imageminOptipng(), imageminSvgo({
        //         plugins: [{
        //             removeViewBox: false
        //         }]
        //     }), imageminJpegtran()]
        //
        // }))
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});



// DEL - удаляет папку build, чтобы не было ненужных файлов
gulp.task('build:del', function() {
    del.sync('build/**');
});



// WATCH
gulp.task('watch', ['scss'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./*.scss', ['scss']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.css").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);
});



// BUILD - таск причесывающий проект для продакшена
gulp.task('build', ['build:del', 'build:css', 'build:scripts', 'build:img'], function() {
    var buildJs = gulp.src('src/js/common.js') // Переносим скрипты в продакшен./
        .pipe(gulp.dest('build/js'));

    var buildHtml = gulp.src('src/**/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('build'));

    var buildFont = gulp.src('src/fonts/**/*') // Переносим HTML в продакшен
        .pipe(gulp.dest('build'));
});



// TODO: доработать минификацию картинок: протестировать разнве варианты
