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

gulp.task('default', function () {
  var tasks = ['sass', 'lint'];
  gulp.watch(path.sass.src + '/**/*.scss', tasks);
});

gulp.task('build', ['sass', 'lint', 'test', 'doc']);

gulp.task('sass', function () {
  return gulp.src('build.scss')
    .pipe(sass().on('error', sass.logError));
});

gulp.task('lint', function () {
  return gulp.src(path.doc.src + '/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('test', function () {
  return gulp.src(path.test.src + '/test.js', { read: false })
    .pipe(mocha());
});

gulp.task('doc', function () {
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
});
