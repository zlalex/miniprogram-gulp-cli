const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpBabel = require('gulp-babel')
const gulpUglify = require('gulp-uglify')
const filePath = require('./file-path.js')
const { src, dest } = gulp

// 编译JavaScript ??未编译未压缩
module.exports = function handleScript () {
  return src(filePath.scripts.src, { base: 'src' })
    .pipe(gulpNewer(filePath.scripts.dest))
    .pipe(gulpBabel())
    .pipe(gulpUglify())
    .pipe(dest(filePath.scripts.dest))
}