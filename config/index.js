const ENV = `${process.env.NODE_ENV || 'dev'}`
const CONFIG = require(`./${ENV}.env.js`)
const WECHAT_ID = 106

module.exports = {
  ...CONFIG,
  ENV,
  WECHAT_ID,
}
