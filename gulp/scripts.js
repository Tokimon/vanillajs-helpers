'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  gulp.src('demo/js/src/*.js')
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('demo/js'));
});