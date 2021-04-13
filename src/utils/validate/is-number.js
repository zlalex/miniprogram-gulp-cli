const NUMBER_REGEXP = /^[0-9]*$/g
const isNumber = value => {
  const result = NUMBER_REGEXP.test(value)
  NUMBER_REGEXP.lastIndex = 0
  return result
}
export default isNumber