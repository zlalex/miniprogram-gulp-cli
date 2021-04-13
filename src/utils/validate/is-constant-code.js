
const CONSTANT_CODE_REGEXP = /^[0-9A-Za-z]+$/g
const isConstantCode = value => {
  const result = CONSTANT_CODE_REGEXP.test(value)
  CONSTANT_CODE_REGEXP.lastIndex = 0
  return result
}

export default isConstantCode