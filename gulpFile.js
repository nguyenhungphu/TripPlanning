const { src, dest, series, parallel } = require("gulp");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const moment = require('moment');

function htmlTask() {
  return src("src/*.html").pipe(dest("dist"));
}

function scriptTask() {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest("dist/js"));
}

function styleTask() {
  return src("src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css"));
}

exports.default = series(htmlTask, parallel(styleTask, scriptTask));