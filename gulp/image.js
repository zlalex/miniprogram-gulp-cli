const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpImagemin = require('gulp-imagemin')
const gulpIf = require('gulp-if')
const filePath = require('./file-path.js')
const isBuild = require('../build/build-program.js')
const { src, dest } = gulp

module.exports = function handleImage() {
  return src(filePath.images.src, { base: 'src' })
    .pipe(gulpNewer(filePath.images.dest))
    .pipe(gulpIf(isBuild, gulpImagemin()))
    .pipe(dest(filePath.images.dest))
}