var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var imagemin = require('gulp-imagemin');

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
});
gulp.task('images', function() {
    return gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/images'));
})

gulp.task('default',['css','images']);