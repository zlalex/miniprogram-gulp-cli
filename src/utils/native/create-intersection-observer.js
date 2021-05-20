export default function createIntersectionObserver(view, options = {}, callback) {
  if (!this) throw new Error('createIntersectionObserver(view, options)')
  const isFunction = 'function' === (typeof callback)
  try {
    const observe = this.createIntersectionObserver()
    observe.relativeToViewport(options).observe(view, response => {
      isFunction && callback(response)
    })
  } catch (e) {
    isFunction && callback(response)
  }
}