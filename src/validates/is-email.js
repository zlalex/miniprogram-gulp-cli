const EMAIL_REGEXP = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
const isEmail = value => {
  const result = EMAIL_REGEXP.test(value)
  EMAIL_REGEXP.lastIndex = 0
  return result
}

export default isEmail