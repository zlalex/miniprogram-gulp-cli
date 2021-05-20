const __typeof__ = {}
const variableType = ['Array', 'Object', 'String', 'Function']
const __toString = Object.prototype.toString
const value2string = (value) => __toString.call(value).slice(8, -1)
const getValueType = (type) => (value) => value2string(value) === type

variableType.forEach(type => {
  const key = ['is', type].join('')
  __typeof__[key] = getValueType(type)
})

export default __typeof__