import storage from './index'

const STORAGE_PREFIX = 'WECHAT_'
const __ = keyword = key => `${STORAGE_PREFIX}${key}`

export default {
  setToken(value) {
    storage.set(__('TOKEN'), value)
  },
  getToken() {
    return storage.get(__('TOKEN'))
  },
  cleanToken() {
    storage.clean(__('TOKEN'))
  }
}