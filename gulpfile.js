var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var sassdoc = require('sassdoc');
var sassLint = require('gulp-sass-lint');

var path = {
  sass: {
    src: './stylesheets',
    dest: './build/sass',
  },
  doc: {
    src: './stylesheets',
    dest: './docs'
  },
  test: {
    src: './test',
    dest: './build/test',
  }
}

gulp.task('sass', gulp.series(function () {
  return gulp.src('build.scss')
    .pipe(sass().on('error', sass.logError));
}));

gulp.task('lint', gulp.series(function () {
  return gulp.src(path.doc.src + '/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
}));

gulp.task('test', gulp.series(function () {
  return gulp.src(path.test.src + '/test.js', { read: false })
    .pipe(mocha());
}));

gulp.task('doc', gulp.series(function () {
  return gulp.src(path.doc.src + '/**/*.scss')
    .pipe(sassdoc({
      dest: path.doc.dest,
      theme: 'markdown',
      display: {
        access: ['public'],
      },
      groups: {
        core: 'Core',
        unit: 'Unit',
        utilities: 'Utilities'
      }
    }));
}));

gulp.task('default', gulp.series(function () {
  var tasks = ['sass', 'lint'];
  gulp.watch(path.sass.src + '/**/*.scss', gulp.series(tasks));
}));

gulp.task('build', gulp.series(['sass', 'lint', 'test', 'doc']));
