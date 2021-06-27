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
  clearToken() {
    storage.clear(__('TOKEN'))
  },
  setUserInfo(value) {
    storage.set(__('USER_INFO'), value)
  },
  getUserInfo() {
    return storage.get(__('USER_INFO'))
  },
  clearUserInfo() {
    storage.clear(__('USER_INFO'))
  },
  setMemberInfo(value) {
    storage.set(__('MEMBER_INFO'), value)
  },
  getMemberInfo() {
    return storage.get(__('MEMBER_INFO'))
  },
  clearMemberInfo() {
    storage.clear(__('MEMBER_INFO'))
  },
}