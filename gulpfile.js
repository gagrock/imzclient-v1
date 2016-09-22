'use strict';

var gulp = require('gulp'),
    minify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');

    livereload({start: true});

//#1
gulp.task('move_libs', function() {
  
  return gulp.src([
  	'bower_components/*.min.js',
  	'bower_components/*.min.js.map',
  	'bower_components/**/*.min.js',
  	'bower_components/**/*.min.js.map',
  	'bower_components/**/**/*.min.js',
  	'bower_components/**/**/*.min.js.map',
  	'bower_components/requirejs/*.js'
  	])
  .pipe(gulp.dest('public/js/lib/'));
  
 });

//#2
 gulp.task('move_customs', function() {
  return gulp.src([
  	'app/js/**/*.js',
  	'app/js/*.js'
  	])
   .pipe(minify())
 //  .pipe(livereload())
  .pipe(gulp.dest('public/js/'));

});

//#3 
 gulp.task('move_html', function() {
   
   return gulp.src([
  	'app/*.html',
  	'app/**/*.html'
  	])
  .pipe(gulp.dest('public/'));

});

gulp.task('watch', function() {
 // livereload.listen();
    var watcher = gulp.watch(['app/js/**/*.js','app/js/*.js'], ['move_customs']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});

gulp.task("default",['move_libs','move_customs','move_html','watch']);