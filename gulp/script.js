const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpBabel = require('gulp-babel')
const gulpUglify = require('gulp-uglify')
const filePath = require('./file-path.js')
const { src, dest } = gulp

// 编译JavaScript ??未编译未压缩
// gulp-uglify 将ES6转成ES5后, 代码体积更大, 小程序上传后会压缩混淆ES代码, 所以需不需要通过gulp重复操作这一步
module.exports = function handleScript () {
  return src(filePath.scripts.src, { base: 'src' })
    .pipe(gulpNewer(filePath.scripts.dest))
    .pipe(gulpBabel())
    .pipe(gulpUglify())
    .pipe(dest(filePath.scripts.dest))
}