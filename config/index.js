const ENV = `${process.env.NODE_ENV || 'dev'}`
const CONFIG = require(`./${ENV}.env.js`)
const WECHAT_ID = 208

module.exports = {
  ...CONFIG,
  ENV,
  WECHAT_ID,
}
