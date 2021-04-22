export const createSelectorQuery = function (view) {
  return new Promise(resolve => {
    if (!this) throw new Error('createSelectorQuery.call(this, view)')
    try {
      wx.createSelectorQuery().in(this)
        .select(view)
        .boundingClientRect()
        .selectViewport()
        .scrollOffset()
        .exec((response) => {
          const [rect, port] = response
          if (rect && port) {
            resolve(Object.assign({}, rect, port))
          } else {
            resolve({})
          }
        })
    } catch (e) {
      resolve({})
    }
  })
}

export const createIntersectionObserver = function (view, options = {}, callback) {
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