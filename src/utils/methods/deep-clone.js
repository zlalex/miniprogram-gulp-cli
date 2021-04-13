import typeofDatum from '../../validation/typeof-datum'

const { isArray, isObject } = typeofDatum

export default function deepClone(target) {
  var result
  if (!isObject(target) && !isArray(target)) {
    return target
  }

  if (isObject(target)) {
    result = {}
    for (let key in target) {
      result[key] = deepClone(target[key])
    }
    return result
  }

  if (isArray(target)) {
    result = []
    target.forEach((item, i) => {
      result[i] = deepClone(item)
    })
    return result
  }
}
