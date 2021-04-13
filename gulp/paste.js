const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const filePath = require('./file-path.js')
const { src, dest } = gulp

// 复制移动文件
module.exports = function handleFilePaste () {
  return src(filePath.paste.src, { base: 'src' })
    .pipe(gulpNewer(filePath.paste.dest))
    .pipe(dest(filePath.paste.dest))
}
