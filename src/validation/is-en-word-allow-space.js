const EN_WORD_REGEXP = /[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？+]/g
const isEnWordAllowSpace = value =>{
  const result = EN_WORD_REGEXP.test(value)
  EN_WORD_REGEXP.lastIndex = 0
  return result
}

export default isEnWordAllowSpace