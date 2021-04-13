const path = require('path')
const del = require('del')
const outputPath = path.join(__dirname, '../dist/app/')
const cacheFilePath = path.join(__dirname, '../dist/app/mini_program_npm')

// 删除文件
module.exports = function handleCleanFile () {
  return del([
    outputPath,
    '!' + cacheFilePath
  ])
}
