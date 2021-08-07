import validates from '../../validates/index'

const { isFunction } = validates

export default async function (handler, failOrDefault) {
  if (!isFunction(handler)) {
    throw new TypeError('callback must be a function')
  }

  if (!failOrDefault || (failOrDefault && !isFunction(failOrDefault))) {
    failOrDefault = () => { }
  }

  try {
    return await handler()
  } catch (e) {
    console.error(e)
    return failOrDefault()
  }
}
