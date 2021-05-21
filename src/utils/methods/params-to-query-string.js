import typeofValue from '../../validates/type-of-value'

const { isObject } = typeofValue
const params2queryString = (value = {}) => {
  if (!isObject(value)) { return value }
  const result = []
  Object.keys(value).forEach(key => {
    result.push([key, value[key]].join('='))
  })
  return (result.join('&'))
}

export default params2queryString