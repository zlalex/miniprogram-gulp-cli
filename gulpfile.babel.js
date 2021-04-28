const gulp = require('gulp')
const watchFiles = require('./gulp/watch')
const handleCleanFile = require('./gulp/clean-file')
const handleProject = require('./gulp/project')
const handleTemplate = require('./gulp/template')
const handleJade = require('./gulp/jade')
const handleStyle = require('./gulp/style')
const handlePaste = require('./gulp/paste')
const handleImage = require('./gulp/image')
// TODO...
// const handleScript = require('./gulp/script')

//
const { series, parallel } = gulp

// gulp build
export const build = series(
  handleCleanFile,
  parallel(
    handleProject,
    handleTemplate,
    handleJade,
    handleStyle,
    handlePaste,
    handleImage
  )
)

// gulp
export default series(
  handleCleanFile,
  parallel(
    handleProject,
    handleTemplate,
    handleJade,
    handleStyle,
    handlePaste,
    handleImage
  ),
  watchFiles
)
