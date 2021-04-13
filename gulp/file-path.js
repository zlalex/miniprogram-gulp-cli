const path = require('path')
const buildPath = path.join(__dirname, '../dist/')
const outputPath = path.join(__dirname, '../dist/app/')

// 项目文件路径
module.exports = {
  project: {
    src: ['project.config.json'],
    dest: buildPath
  },
  template: {
    src: ['src/**/*.html'],
    dest: outputPath
  },
  jade: {
    src: ['src/**/*.jade'],
    dest: outputPath
  },
  styles: {
    src: ['src/**/*.scss'],
    dest: outputPath
  },
  images: {
    src: ['src/assets/**/*.{png,jpg,jpeg,svg,gif}'],
    dest: outputPath
  },
  scripts: {
    src: ['src/**/*.js'],
    dest: outputPath
  },
  paste: {
    src: [
      'src/**',
      '!src/**/*.html',
      '!src/**/*.jade',
      '!src/**/*.scss',
      '!src/assets/**'
    ],
    dest: outputPath
  }
}