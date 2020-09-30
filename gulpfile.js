const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp');
const imageMin = require('gulp-imagemin');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// Sources
const htmlSrc = 'src/html/*.html';
const imgSrc = 'src/img/*';
const jsSrc = 'src/js/*.js';
const cssSrc = 'src/scss/**/*.scss';


// Copy All HTML Files
function copyHtml() {
    return src(htmlSrc)
        .pipe(gulp.dest('dist/html'));
}


// Optimize Images
function imgOptimize() {
    return src(imgSrc)
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'));
}


// Compile & Minify JS
function jsCompile() {
    return src(jsSrc)
        .pipe(sourceMaps.init())
        .pipe(concat('min.js'))
        .pipe(terser())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/js'));
}

// Compile & Minify SCSS
function scssCompile() {
    return src(cssSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('.'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
}

// Watch Compiler 
function watchTasks() {
    watch(
        [htmlSrc, imgSrc, jsSrc, cssSrc],
        { interval: 1000 },
        parallel(copyHtml, imgOptimize, jsCompile, scssCompile));
}

// Finalize Above Operations 
exports.default = series(parallel(copyHtml, imgOptimize, jsCompile, scssCompile), watchTasks);
