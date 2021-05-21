import isHTTPS from '../../validates/is-https'

const combineRequestUrl = (baseUrl, requestUrl) => {
  if (isHTTPS(requestUrl)) { return requestUrl }
  const last = baseUrl.slice(-1)
  const first = requestUrl.charAt(0)
  const splitChar = (last !== '/' && first !== '/') ? '/' : ''
  if (last === '/' && first === '/') {
    requestUrl = requestUrl.slice(1)
  }
  const result = [baseUrl, requestUrl].join(splitChar)
  return result
}

export default combineRequestUrl