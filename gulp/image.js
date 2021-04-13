const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpImagemin = require('gulp-imagemin')
const filePath = require('./file-path.js')
const { src, dest } = gulp

// TODO: gulpImagemin options ? 如果图片路径包含http，忽略转义base64
module.exports = function handleImage () {
  return src(filePath.images.src, { base: 'src' })
    .pipe(gulpNewer(filePath.images.dest))
    .pipe(gulpImagemin())
    .pipe(dest(filePath.images.dest))
}