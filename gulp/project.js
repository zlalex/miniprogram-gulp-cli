
const OS = require('os')
const gulp = require('gulp')
const gulpEditor = require('gulp-json-editor')
const CONFIG = require('../src/config.js')
const filePath = require('./file-path.js')
const isBuild = require('../build/build-program.js')

// main
const { src, dest } = gulp
const getPlatform = () => OS.platform()
const getWin32Path = value => value.replace(/\//g, '\\')
const handleJSONInWin32 = json => {
  const scripts = json.scripts
  for (let k in scripts) {
    if (getPlatform() === 'win32') {
      scripts[k] = getWin32Path(scripts[k])
    }
  }
  json.appid = CONFIG.APP_ID
  json.scripts = scripts
  json.miniprogramRoot = isBuild ? 'app/' : 'dist/app'
  return json
}

// 修改project.config.json文件
module.exports = function handleProject () {
  return src(filePath.project.src, { base: '' })
    .pipe(gulpEditor(handleJSONInWin32))
    .pipe(dest(filePath.project.dest))
}
