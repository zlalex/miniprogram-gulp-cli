const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpRename = require('gulp-rename')
const gulpSass = require('gulp-sass')
const gulpCleanCSS = require('gulp-clean-css')
const gulpIf = require('gulp-if')
const filePath = require('./file-path.js')
const isBuild = require('../build/build-program.js')

// main
const { src, dest } = gulp
const fileRename = file => (file.extname = '.wxss')

// 编译压缩CSS
module.exports = function handleStyle() {
  return src(filePath.styles.src, { base: 'src' })
    .pipe(gulpNewer(filePath.styles.dest))
    .pipe(gulpSass())
    .pipe(gulpIf(isBuild, gulpCleanCSS()))
    .pipe(gulpRename(fileRename))
    .pipe(dest(filePath.styles.dest))
}