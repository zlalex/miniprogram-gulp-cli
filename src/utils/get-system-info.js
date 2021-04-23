const __data__ = {}
export default function () {
  try {
    console.log(__data__.app)
    if (__data__.app) { return __data__.app }
    __data__.app = wx.getSystemInfoSync()
    return __data__.app
  } catch (e) {
    return __data__.app || {}
  }
}