var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./distribuicao/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./ativos/css'));
});

gulp.task('default', ['serve', 'sass']);
