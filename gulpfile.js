var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('angularauth/js/**/*');
});

gulp.task('html', function() {
  gulp.src('angularauth/*.html');
});

gulp.task('css', function() {
  gulp.src('angularauth/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('angularauth/js/**/*', ['js']);
  gulp.watch('angularauth/css/*.css', ['css']);
  gulp.watch(['angularauth/*.html',
    'angularauth/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('angularauth/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
