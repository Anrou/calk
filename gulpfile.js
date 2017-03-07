//Calc


var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var gulpPugBeautify = require('gulp-pug-beautify');
var sass = require('gulp-sass');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

// Pug
gulp.task('pug', function () {
    gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulpPugBeautify({omit_empty: true, tab_size: 4}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});




//css
gulp.task('css', function () {
    gulp.src('src/scss/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 5 version', 'ie 9'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


//img
gulp.task('img', function () {
    gulp.src('src/img/**/')
        .pipe(gulp.dest('dist/img'));
});


//js
gulp.task('js', function () {
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


//fonts
gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
});


// clean
gulp.task('clean', function() {
    return del('dist');
});


// watch
gulp.task('watch', function () {
    gulp.watch('src/*.pug', ['pug', 'reload']);
    gulp.watch('src/**/*.scss', ['css', 'reload']);
    gulp.watch('src/js/**', ['js', 'reload']);
    gulp.watch('src/imgages/**', ['img', 'reload']);
    gulp.watch('src/fonts/**', ['fonts','reload']);
    browserSync.reload();
});

gulp.task('reload', function() {
    gulp.watch(['src/*.pug', 'src/*.scss', 'src/*.js'],
        {cwd: ''},
        reload);
});

//default
gulp.task('default', [ 'browser-sync', 'css','pug','img', 'js', 'fonts', 'watch','reload']);

