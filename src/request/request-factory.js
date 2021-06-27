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
  let requestOption = await requestInterceptor.checkDeviceNetwork(options)
  requestOption.url = combineRequestUrl(BASE_URL, params.url)
  if (!requestOption.allowNoToken) {
    requestOption = await requestInterceptor.setToken(requestOption)
  }
  try {
    return (await wx.$request(requestOption))
  } catch (error) {
    const isTimeout = requestFailMessage.some(item => item === error.errMsg)
    if (isTimeout) { wx.showToast({ title: '网络请求超时，请稍后再试~', icon: 'none' }) }
    // TODO... insetRequestAfterHook
    return responseInterceptor.handleRequestError(options, error)
  }
}

export default wechatRequest
