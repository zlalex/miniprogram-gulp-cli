const TIME = 60 * 60 * 1000
class Storage {
  constructor() { }
  set(key, value, date = 24) {
    const payload = {
      value,
      offsetDate: date * TIME,
      createDate: Date.now()
    }
    wx.setStorageSync(key, payload)
  }
  get(key) {
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
  }
  remove(key) {
    wx.removeStorageSync(key)
  }
  clean(key) {
    wx.clearStorageSync(key)
  }
}

export default new Storage()
