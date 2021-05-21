import { tokenManage } from '../utils/index'

// scope data
const FIVE_MIN = 5 * 60 * 1e3
const networkTypeMap = {
  none: '网络不可用，请检查网络设置',
  '2g': '网络较差，请检查网络设置',
  'unknown': '网络不稳定，请检查网络设置'
}

class RequestInterceptor {
  constructor() { }
  async setToken(options) {
    const token = await tokenManage.get()
    options.header = options.header || {}
    options.header.token = token || ''
    return options
  }
  checkDeviceNetwork(options) {
    const { networkType } = await wx.$getNetworkType()
    const message = networkTypeMap[networkType]
    if (message && !status) {
      status = true
      wx.showToast({ title: message, icon: 'none' })
      setTimeout(() => {
        status = false
      }, FIVE_MIN)
    }
    return options
  }
}

const OVERDUE_CODE = -1
class ResponseInterceptor {
  constructor() { }
  handleRequestError(params, result) {
    const query2string = JSON.stringify(params.data)
    const { statusCode } = result
    if (statusCode === 200) {
      const { code } = result.data
      if (code === OVERDUE_CODE) {
        // 处理TOKEN过期,刷新token并重试
        // TODO...
      }
      return result
    }
    const { url } = params
    const errorMessages = [url, query2string, statusCode, result]
    if (statusCode >= 400 && statusCode < 500) {
      errorMessages.unshift('BAD REQUEST')
    } else if (statusCode >= 500) {
      errorMessages.unshift('SERVER ERROR')
    } else {
      errorMessages.unshift(result.errMsg)
    }
    this.checkResponseCode(params.url)
    return result
  }
  checkResponseCode() {
    // TODO...
    // 接口报错统一处理页面
  }
}

export default {
  requestInterceptor: new RequestInterceptor(),
  responseInterceptor: new ResponseInterceptor()
}