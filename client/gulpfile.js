var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// Compile typescript to js
gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('build'))
});

// Lint CSS
gulp.task('cssLint:home', function() {
    var path = 'styles/**.css';
    gulp.src(path)
        .pipe(csslint())
        .pipe(csslint.reporter());
});

// Concatinate Home app css
gulp.task('styles:home', function() {
    var path = "styles/**.css";
    var cssDest = "build/styles";
    var cssFileName = "home.min.css";

    gulp.src(path)
        .pipe(plumber())
        .pipe(concat(cssFileName))
        .pipe(minifyCss())
        .pipe(prefix('last 3 versions'))
        .pipe(gulp.dest(cssDest))
        .pipe(livereload());
});

// Start the server
gulp.task('start', function() {
  var src = '../server.js';
  nodemon({
    script: src,
    ext: "js html"
  }).on('restart', function() {
    gulp.src(src)
      .pipe(livereload())
  })
});

// Watch server and client files change
gulp.task('watch', function() {
  livereload.listen();

  // server
  gulp.watch('../server.js', ['scripts']);

  // client
  gulp.watch("styles/*.css", ['cssLint:home', 'styles:home']);
  gulp.watch("scripts/**.ts", ['scripts']);
  gulp.watch("scripts/directives/**.ts", ['scripts']);
  gulp.watch("templates/**", ['styles:home']);

});

// start script
gulp.task('server', function() {
  gulp.start([
    'watch',
    'cssLint:home',
    'styles:home',
    'scripts',
    'start'
  ]);
});

