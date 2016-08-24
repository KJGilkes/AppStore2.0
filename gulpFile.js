const gulp = require('gulp');
const git = require('gulp-git');

gulp.task('default', ['server', 'minifi'], () => {
  console.log('I gulp stuff');
});

gulp.task('server', () => {
  console.log('Start the server.');
});

gulp.task('minifi', () => {
  console.log('Minify the js file.');
});

// gulp-git demo
// git.task('addAll', () => {
//   return gulp.src('./*')
//   .pipe(git.add());
// });
//
// git.task('commit', () => {
//   return gulp.src('./*')
//   .pipe(git.commit('auto commit message...'));
// });
//
// git.task('everything', ['addAll', 'commit'], () => {
//   return gulp.src('./*')
//   .pipe(git.commit('auto commit message...'));
// });
