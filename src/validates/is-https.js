const HTTP_REGEXP = /(http|https):\/\/([\w.]+\/?)\S*/
const isHTTP = value => {
  const result = HTTP_REGEXP.test(value)
  HTTP_REGEXP.lastIndex = 0
  return result
}

export default isHTTP