// variables
var gulp      = require('gulp');
var gutil     = require('gulp-util');
var sitespeedio = require('gulp-sitespeedio');

gulp.task('sitespeedio', sitespeedio({
    urls: ['http://localhost:8000'],
    deepth: 1,
    connection: 'cable',
    resultBaseDir: 'sitespeed.out',
    verbose: true,
    html: true
  }
));
