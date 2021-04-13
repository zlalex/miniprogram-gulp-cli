
const env = require('../__env.config.js') // NODE_ENV
const runtime = require('../__runtime.config.js') // RUNTIME
const isBuild = env === 'prod' && runtime === 'production'

module.exports = isBuild
