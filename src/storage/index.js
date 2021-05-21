import safeCall from '../utils/methods/safe-call'
const TIME = 60 * 60 * 1000
class Storage {
  set(key, value, date = 24) {
    safeCall(() => {
      const payload = {
        value,
        offsetDate: date * TIME,
        createDate: Date.now()
      }
      wx.setStorageSync(key, payload)
    })
  }
  get(key) {
    return safeCall(() => {
      const data = wx.getStorageSync(key)
      if (data && data.createDate && data.offsetDate) {
        const current = Date.now()
        const __offset = data.createDate + data.offsetDate
        const isOffset = __offset <= current
        if (!isOffset) { return data.value }
        wx.removeStorageSync(key)
        return null
      }
      return null
    })
  }
  remove(key) {
    safeCall(() => {
      wx.removeStorageSync(key)
    })
  }
  clear(key) {
    safeCall(() => {
      wx.clearStorageSync(key)
    })
  }
}

export default new Storage()
