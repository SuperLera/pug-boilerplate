const { series } = require('gulp');
const gulp = require('gulp');
const pug = require('gulp-pug');


gulp.task ('pug', () => {
  gulp.src('src/pages/**/*.pug')
    .pipe(pug({
      pretty: '\t'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch('src/pages/**/*.pug', gulp.series('pug'))
})
