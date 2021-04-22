const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpRename = require('gulp-rename')
const gulpPrettyData = require('gulp-pretty-data')
const gulpIf = require('gulp-if')

//
const htmlMinConfig = require('./html-mini-config.js')
const filePath = require('./file-path.js')
const isBuild = require('../build/build-program.js')

//
const { src, dest } = gulp
const fileRename = file => (file.extname = '.wxml')

//
module.exports = function handleTemplate() {
  return src(filePath.template.src, { base: 'src' })
    .pipe(gulpNewer(filePath.template.dest))
    .pipe(gulpRename(fileRename))
    .pipe(gulpIf(isBuild, gulpPrettyData(htmlMinConfig)))
    .pipe(dest(filePath.template.dest))
}
