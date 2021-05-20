export default function createSelectorQuery (view) {
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