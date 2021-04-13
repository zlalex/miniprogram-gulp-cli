const PHONE_NUMBER_REGEXP = /^((\\+852)|(852))?([6|9])\d{7}$|^((\\+886)|(886))?[0][9]\d{8}$|^((\\+853)|(853))?[6]([8|6])\d{6}$|^((\\+86)|(86))?((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/
const isPhoneNumber = value => {
  const result = value.length == 11 && PHONE_NUMBER_REGEXP.test(value)
  PHONE_NUMBER_REGEXP.lastIndex = 0
  return result
}

export default isPhoneNumber