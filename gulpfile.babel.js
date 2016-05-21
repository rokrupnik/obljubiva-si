'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () => {
  return gulp.src('js/es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', () => {
    gulp.watch('js/es6/*.js', ['default']);
});