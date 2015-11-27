'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  gulp.src('demo/js/src/*.js')
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('demo/js'));
});