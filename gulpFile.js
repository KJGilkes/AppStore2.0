const gulp = require('gulp');
const git = require('gulp-git');
const utility = require('kj_utility_tool');
const fs = require('fs');
const argv = require('yargs').argv;

const filename = './package.json';
const pack = require(filename);

gulp.task('default', ['gulpit', 'add', 'commit', 'push'], () => {
});

gulp.task('gulpit', () => {
  const vNum = utility.versionNum(pack.version, argv.tag);
  pack.version = vNum;
  const newFile = JSON.stringify(pack, null, 2);
  fs.writeFile(filename, newFile, (err) => {
    if (err) throw (err);
  });
});

/* eslint-disable*/
// gulp-git demo
gulp.task('add', () => {
  return gulp.src('./package.json')
  .pipe(git.add());
});

gulp.task('commit', () => {
  return gulp.src('./package.json')
  .pipe(git.commit('Incremented patch number'));
});

gulp.task('push', function(){
  git.push('origin', 'gulp', function (err) {
    if (err) throw err;
  });
});
