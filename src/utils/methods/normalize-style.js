const __keys__ = Object.keys
const normalizeStyle = (styles = {}) => {
  const result = []
  if ('string' === typeof styles) {
    result.push(styles)
  }
  const attributes = __keys__(styles)
  if (!attributes.length) return ''
  attributes.forEach(key => {
    const styleValue = styles[key]
    const __style = [key, ':', styleValue, ';'].join('')
    result.push(__style)
  })

  return result.join('')
}

export default normalizeStyle