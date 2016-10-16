var gulp = require('gulp');
var eslint = require('gulp-eslint');
var watch = require('gulp-watch');
var htmlhint = require("gulp-htmlhint");
var runSequence = require('run-sequence');

var config = {
    allSource: 'src/**/*',
    appSource: 'src/app/**/*.js',
    allAppHtml: 'src/app/**/*.html'
};

gulp.task('app-html-hint', function () {
    return gulp.src(config.allAppHtml)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .pipe(htmlhint.failReporter());
});

gulp.task('app-js-lint', function () {
    return gulp.src([config.appSource])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('app-lint', function (done) {
    runSequence('app-js-lint', 'app-html-hint', done);
});

gulp.task('watch', function () {
    gulp.watch(config.appSource, ['app-lint']);
});

gulp.task('default', function () {
    runSequence('app-lint');
});
