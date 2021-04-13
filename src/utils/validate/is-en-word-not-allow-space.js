
const EN_WORD_SPACE_REGEXP = /[`~!@#$^&*()=|{}':',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？+\s]/g
const isEnWordNotAllowSpace = value => {
  const result = EN_WORD_SPACE_REGEXP.test(value)
  EN_WORD_SPACE_REGEXP.lastIndex = 0
  return result
}

export default isEnWordNotAllowSpace