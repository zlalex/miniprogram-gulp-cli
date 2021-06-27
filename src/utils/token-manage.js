import api from '../api/index'
import storageManage from '../storage/storage-manage'
import safeCallback from '../utils/methods/safe-call'

const TOKEN_FAIL = 'Token retrieval failed'
class TokenManage {
  constructor() {
    this.count = 0
    this.maxCount = 3
    this.limitTime = 10
    this.status = false
    this.queueCallbacks = []
  }
  set(value) {
    storageManage.setToken(value)
  }
  clear() {
    storageManage.clearToken()
  }
  async get() {
    const token = storageManage.getToken()
    if (token) { return token }
    if (this.status) {
      const result = await new Promise((resolve, reject) => {
        this.queueCallbacks.push({ resolve, reject })
      });
      return result;
    }
    this.status = true;
    return await safeCallback(async () => {
      const response = await this.refresh()
      const { data } = response
      this.complete('success', response);
      return data.token
    }, (error) => {
      this.complete('fail', error);
      error.message === TOKEN_FAIL && wx.showToast({
        title: '网络不稳定，请检查网络设置',
        icon: 'none'
      });
      return null
    })
  }
  async refresh() {
    if (this.count > this.maxCount) {
      throw new Error(TOKEN_FAIL);
    } else if (!this.count) {
      setTimeout(() => {
        this.count = 0;
      }, this.limitTime * 1e3);
    }
    // 累计次数
    this.count += 1;
    return await safeCallback(async () => {
      const { code } = await wx.$login()
      const response = await api.onLoginAsync(code)
      if (response.resultCode != 1) {
        console.error('TOKEN ERROR')
        return
      }
      const { token } = response.data
      storageManage.setUserInfo(response.data)
      this.set(token)
      return response
    }, null)
  }
  complete(type, response) {
    this.status = false;
    while (this.queueCallbacks.length) {
      const { resolve, reject } = this.queueCallbacks.shift();
      type === 'success' && resolve(response.data.token);
      type === 'fail' && reject(response);
    }
  }
}

export default new TokenManage()