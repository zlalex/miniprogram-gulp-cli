const queryStringRegexp = /([\w-]+)=(.*?)(?:&|\?|$)/
const getUrlParams = (url = '') => {
  const result = {}
  const searchIndex = url.indexOf('?')
  const __queryString = url.slice(searchIndex)
  const queryString = decodeURIComponent(__queryString)
  const queryString2array = queryString.split('&')

  queryString2array.forEach(item => {
    const match = item.match(queryStringRegexp)
    match && (result[match[1]] = match[2])
  })
  return result
}

export default getUrlParams