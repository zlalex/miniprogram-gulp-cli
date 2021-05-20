import { onLoginAsync } from '../api/index'
import storageManage from '../storage/storage-manage'

class TokenManage {
  constructor() {
    this.count = 0
    this.maxCount = 3
    this.limitTime = 10
    this.status = false
    this.queueCallbacks = []
  }
  async get() {
    const token = storageManage.getToken()
    if (token) { return token }
    if (this.status) {
      // TODO..
      const result = await new Promise((resolve, reject) => {
        this.queueCallbacks.push({
          resolve,
          reject
        })
      })
      return result
    }

    try {
      this.status = true
      const response = await this.refresh()
      const { data } = response
      data && this.complete('success', response)
      return data.token
    } catch (e) {
      this.complete('fail', error)
      return null
    }
  }
  set(value) {
    storageManage.setToken(value)
  }
  clean() {
    storageManage.cleanToken()
  }
  async refresh() {
    if (this.count > this.maxCount) { return }
    if (!this.count) {
      setTimeout(() => {
        this.count = 0
      }, this.limitTime * 1e3)
    }
    this.count += 1
    const response = await onLoginAsync()
    if (response.resultCode != 1) {
      console.error('TOKEN ERROR')
      return
    }
    const { token } = response.data
    this.set(token)
    return response
  }
  complete(type, payload) {
    this.status = false
    while (this.queueCallbacks.length) {
      const { resolve, reject } = this.queueCallbacks.shift()
      type === 'success' ? resolve(payload.data.token) : reject(payload)
    }
  }
}

export default new TokenManage()