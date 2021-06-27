const __data__ = {}
export default function () {
  try {
    if (!__data__.app) {
      __data__.app = wx.getSystemInfoSync()
    }
    return __data__.app
  } catch (e) {
    return __data__.app || {}
  }
}