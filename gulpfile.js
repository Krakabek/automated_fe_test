const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const clean_css = require('gulp-clean-css');

 
gulp.task('less', function () {
  return gulp.src('./styles/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(clean_css({level: 1}))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
    gulp.watch('./styles/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less', 'watch']); // Default will run the 'entry' watch task