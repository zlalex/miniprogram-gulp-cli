const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpImagemin = require('gulp-imagemin')
const filePath = require('./file-path.js')
const { src, dest } = gulp

module.exports = function handleImage () {
  return src(filePath.images.src, { base: 'src' })
    .pipe(gulpNewer(filePath.images.dest))
    .pipe(gulpImagemin())
    .pipe(dest(filePath.images.dest))
}