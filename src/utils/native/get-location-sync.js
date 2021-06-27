const __data__ = {}
export default function (refresh = false) {
  return new Promise(resolve => {
    try {
      if (refresh || !data.location) {
        wx.getLocation({
          success(data) {
            __data__.location = data
            resolve(data)
          }
        })
        return
      }
      if (__data__.location) {
        resolve(__data__.location)
        return
      }
    } catch (e) {
      resolve(__data__.location || __data__)
    }
  })
}