const CHINESE_REGEXP = /^[\u4E00-\u9FA5A-Za-z·]+$/
const isChineseName = value => {
  const result = CHINESE_REGEXP.test(value)
  CHINESE_REGEXP.lastIndex = 0
  return result
}

export default isChineseName