import __requestInterceptor__ from './request-interceptor'
import combineRequestUrl from '../utils/methods/combine-request-url'
import config from '../config'

const { BASE_URL } = config
const { requestInterceptor, responseInterceptor } = __requestInterceptor__
const requestFailMessage = [
  'request:fail timeout',
  'request:fail request unknown host error',
  'request:fail request connect error'
]

async function wechatRequest(params) {
  const options = Object.assign({}, params)
  options.url = combineRequestUrl(BASE_URL, params.url)
  // TODO... insetRequestBeforeHook
  const wechatRequestOption = await requestInterceptor.checkDeviceNetwork(options)
  if (!wechatRequestOption.allowNoToken) {
    requestInterceptor.setToken(wechatRequestOption)
  }
  try {
    return (await wx.$request(wechatRequestOption))
  } catch (error) {
    const isTimeout = requestFailMessage.some(item => item === error.errMsg)
    if (isTimeout) { wx.showToast({ title: '网络请求超时，请稍后再试~', icon: 'none' }) }
    // TODO... insetRequestAfterHook
    return responseInterceptor.handleRequestError(options, error)
  }
}

export default wechatRequest
