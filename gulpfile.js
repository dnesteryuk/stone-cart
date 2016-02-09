var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('build', function() {
  return gulp.src('stone-cart.html')
  .pipe(polybuild({maximumCrush: true, suffix: false}))
  .pipe(gulp.dest('build'));
});
