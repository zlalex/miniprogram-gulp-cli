const fs = require('fs')
const shell = require('shelljs')
const env = require('../__env.config.js') // NODE_ENV
const programConfig = require('../config/index.js')
const isBuild = require('./build-program')

// output
const outputPath = 'src/config.js'
const outputPrefix = 'module.exports = '
const configContext = JSON.stringify(programConfig, undefined, 2)
const outputProgramConfig = outputPrefix + configContext

// command
const setNodeEnvCommand = 'NODE_ENV=' + env
const setProductionCommand = isBuild ? 'RUNTIME=production' : ''
const setGulpCommand = ['gulp', isBuild ? 'build' : ''].join(' ')
const shellCommand = ['cross-env', setNodeEnvCommand, setProductionCommand, setGulpCommand].filter(c => c).join(' ').trim()

// node build/index.js
fs.writeFile(outputPath, outputProgramConfig, function (error) {
  if (error) return console.error(error)
  console.log(`=>>${shellCommand}<<=`)
  shell.exec(shellCommand)
})
