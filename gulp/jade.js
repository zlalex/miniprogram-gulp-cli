const gulp = require('gulp')
const gulpNewer = require('gulp-newer')
const gulpPlumber = require('gulp-plumber')
const gulpPug = require('gulp-pug')
const gulpHtmlmin = require('gulp-htmlmin')
const gulpIf = require('gulp-if')
const gulpRename = require('gulp-rename')

//
const htmlMinConfig = require('./html-mini-config.js')
const filePath = require('./file-path.js')
const isBuild = require('../build/build-program.js')

//
const { src, dest } = gulp
const fileRename = file => (file.extname = '.wxml')

//
module.exports = function handleJade() {
  return src(filePath.jade.src, { base: 'src' })
    .pipe(gulpNewer(filePath.jade.dest))
    .pipe(gulpPlumber())
    .pipe(gulpPug({ pretty: true }))
    .pipe(gulpRename(fileRename))
    .pipe(gulpIf(isBuild, gulpHtmlmin(htmlMinConfig)))
    .pipe(dest(filePath.jade.dest))
}
