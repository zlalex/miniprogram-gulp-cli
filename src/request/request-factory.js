import requestInterceptor from './request-interceptor'
import combineRequestUrl from '../utils/methods/combine-request-url'
import config from '../config'

const { BASE_URL } = config
const request = {
  beforeHooks: [],
  afterHooks: [],
  async send(params) {
    const options = Object.assign({}, params)
    options.url = combineRequestUrl(BASE_URL, params.url)
    const wechatRequestOption = await this.insetBeforeHook(options)
    try {
      const result = await wx.$request(wechatRequestOption)
      return result
    } catch (error) {
      const isTimeout = error.errMsg == 'request:fail timeout' ||
        error.errMsg == 'request:fail request unknown host error' ||
        error.errMsg == 'request:fail request connect error'
      if (isTimeout) { wx.showToast({ title: '网络请求超时，请稍后再试~', icon: 'none' }) }
      const result = await this.insetAfterHook(options, error)
      return result
    }
  },
  insetBeforeHook(options) {

  },
  insetAfterHook(options) {

  }
}

export default request
