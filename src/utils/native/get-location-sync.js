const __data__ = {}
export default function () {
  return new Promise(resolve => {
    try {
      if (__data__.location) {
        resolve(__data__.location)
        return
      }
      wx.getLocation({
        success(data) {
          __data__.location = data
          resolve(data)
        }
      })
    } catch (e) {
      resolve(__data__.location || {})
    }
  })
}