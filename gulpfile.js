var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var imagemin = require('gulp-imagemin');

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/assets/css'));
});
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/images'));
});
gulp.task('js', function(){
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('build/assets/js'));
});
gulp.task('default',['css','images','js']);