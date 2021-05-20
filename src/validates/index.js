import isChineseName from './is-chinese-name'
import isConstantCode from './is-constant-code'
import isDateString from './is-date-string'
import isEmail from './is-email'
import { isEmoji, replaceEmoji } from './is-emoji'
import isEnWordAllowSpace from './is-en-word-allow-space'
import isEnWordNotAllowSpace from './is-en-word-not-allow-space'
import isInvoiceNumber from './is-invoice-number'
import isNumber from './is-number'
import isPhoneNumber from './is-phone-number'
import { isSpace, trimSpace, replaceSpace } from './trim-space'
import typeofValue from './type-of-value'

export default {
  isChineseName,
  isConstantCode,
  isDateString,
  isEmail,
  isEmoji,
  isEnWordAllowSpace,
  isEnWordNotAllowSpace,
  isInvoiceNumber,
  isNumber,
  isPhoneNumber,
  isSpace,
  trimSpace,
  replaceSpace,
  replaceEmoji,
  ...typeofValue
}