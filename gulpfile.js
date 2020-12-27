const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');
const htmlPartial = require('gulp-html-partial');
const cssbeautify = require('gulp-cssbeautify');
const htmlbeautify = require('gulp-html-beautify');
const isProd = process.env.NODE_ENV === 'prod';

var options = { };

const htmlFile = [
    'src/**/*.html'
]

function html() {
    return gulp.src(htmlFile)
        .pipe(htmlPartial({
            basePath: 'src/assets/partials/'
        }))
        .pipe(htmlbeautify())
        .pipe(gulp.dest('public'));
}

function css() {
    return gulp.src('src/assets/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(gulp.dest('public/assets/css/'));
}

function js() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'node_modules/rellax/rellax.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'src/assets/scripts/script.js'])
        .pipe(sourcemaps.init())
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/js'));
}

function img() {
    return gulp.src('src/assets/img/*')
        //.pipe(imagemin())
        .pipe(gulp.dest('public/assets/img/'));
}


function fonts() {
}

function serve() {
    browserSync.init({
        open: true,
        notify: false,
        server: './public'
    });
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch('src/**/*.html', gulp.series(html, browserSyncReload));
    gulp.watch('src/assets/**/*.scss', gulp.series(css, browserSyncReload));
    gulp.watch('src/assets/**/*.js', gulp.series(js, browserSyncReload));
    gulp.watch('src/assets/img/**/*.*', gulp.series(img));

    return;
}

function del() {
    return gulp.src('public/*', {read: false})
        .pipe(clean());
}

exports.css = css;
exports.html = html;
exports.js = js;
exports.del = del;

// this is the serve 
exports.default = gulp.parallel(html, css, js, img, watchFiles, serve);

// this is the build task
exports.build = gulp.series(del, html, css, js, img);