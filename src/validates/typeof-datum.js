const __typeof__ = {}
const __toString = Object.prototype.toString
const variableType = ['Array', 'Object', 'String', 'Function']
const handleDataType = (type) => (value) => (__toString.call(value).slice(8, -1) === type)

variableType.forEach(type => {
  __typeof__[`is${type}`] = handleDataType(type)
})

export default __typeof__