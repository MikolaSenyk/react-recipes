'use strict';

var gulp = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    p = {
        jsx: 'app.jsx',
        bundle: 'app.js',
        distJs: 'dist/js'
    };


gulp.task('clean', function(cb) {
  return del(['dist'], cb);
});

gulp.task('browserify', function() {
  browserify(p.jsx)
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest(p.distJs));
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify']);
});

gulp.task('watch', function() {
  gulp.watch(['./*/*.jsx'], ['browserify']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
