import storage from './index'

const STORAGE_PREFIX = 'WECHAT_'
const storageKeyword = key => `${STORAGE_PREFIX}${key}`
const __ = storageKeyword

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