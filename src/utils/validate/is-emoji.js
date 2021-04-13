
const EMOJI_REGEXP = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g
const replaceEmoji = value => value.replace(EMOJI_REGEXP, '')
const isEmoji = value => {
  const result = EMOJI_REGEXP.test(value)
  EMOJI_REGEXP.lastIndex = 0
  return result
}

export default isEmoji
export {
  isEmoji,
  replaceEmoji
}