var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./sass/style.scss')
        .pipe(sass({
            style: 'compressed'
        })) // Using gulp-sass
        .pipe(gulp.dest('./css'))
});