const { src, dest, series, parallel, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync");
const reload = browserSync.reload;

//搬家語法
function move() {
  return src("src/index.html").pipe(dest("dist"));
}
exports.m = move;

// 清除舊檔案
function clear() {
  return src("dist", { read: false, allowEmpty: true }) //不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
    .pipe(clean({ force: true })); //強制刪除檔案
}

exports.c = clear;

//  css minify
function cssminify() {
  return src("src/css/style.css").pipe(cleanCSS()).pipe(dest("dist/css"));
}

exports.cssm = cssminify;

// js minify
function jsmini() {
  return src("src/js/*.js").pipe(uglify()).pipe(dest("dist/js"));
}

// js es6 -> es5
function babel5() {
  return src("src/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

exports.es5 = babel5;
exports.js = jsmini;

// sass complier
// 沒壓縮css
function sassStyle() {
  return src("src/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError)) // sass ->css
    .pipe(sourcemaps.write())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("dist/css"));
}

// 有壓縮
function sassStyleMini() {
  return src("src/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError)) // sass ->css
    .pipe(sourcemaps.write())
    .pipe(cleanCSS()) // minify css
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest("dist/css"));
}

exports.style = sassStyle;
exports.styleMini = sassStyleMini;

// html template
function html() {
  return src("src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dist/"));
}

exports.template = html;

// layout template
function layout() {
  return src("src/layout/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dist/layout"));
}

// 打包圖片
function img() {
  return src("src/img/**/*.*").pipe(dest("dist/img"));
}

//圖片壓縮
function imgmini() {
  return src(["src/img/**/**/*.*", "src/img/*.*"])
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }), // 壓縮品質      quality越低 -> 壓縮越大 -> 品質越差
      ])
    )
    .pipe(dest("dist/img/mini/"));
}

exports.minifyimg = imgmini;

// 監看所有變動
function watchfile() {
  watch(["src/*.html", "src/layout/*.html"], html);
  watch(
    ["src/sass/*.scss", "src/sass/**/*.scss", "src/sass/**/**/*.scss"],
    sassStyle
  );
  watch("src/js/*.js", jsmini);
  watch(["src/img/*.*", "src/img/**/*.*"], img);
}

//瀏覽器同步
function browser(done) {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "index.html",
    },
    port: 3000,
  });
  watch(["src/*.html", "src/layout/*.html"], html).on("change", reload);
  watch(
    ["src/sass/*.scss", "src/sass/**/*.scss", "src/sass/**/**/*.scss"],
    sassStyle
  ).on("change", reload);
  watch("src/js/*.js", jsmini).on("change", reload);
  watch(["src/img/*.*", "src/img/**/*.*"], img).on("change", reload);
  done();
}

//開發用
exports.default = series(
  parallel(html, layout, sassStyle, jsmini, img),
  browser
);

// 打包上線用
exports.package = series(clear, parallel(html, sassStyleMini, babel5, imgmini));
