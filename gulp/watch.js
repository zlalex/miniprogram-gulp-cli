const gulp = require('gulp')
const handleTemplate = require('./template')
const handleJade = require('./jade')
const handleStyle = require('./style')
const handleImage = require('./image')
const handlePaste = require('./paste')
const filePath = require('./file-path.js')
const { watch } = gulp

// 监听所有
module.exports = function handleWatch() {
  watch(filePath.template.src, handleTemplate)
  watch(filePath.jade.src, handleJade)
  watch(filePath.styles.src, handleStyle)
  watch(filePath.images.src, handleImage)
  watch(filePath.paste.src, handlePaste)
}