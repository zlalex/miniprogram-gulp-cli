import {tokenManage} from '../utils/index'

class RequestInterceptor {
  constructor() { }
  async setToken(options) {
    const token = await tokenManage.get()
    options.header = options.header || {}
    options.header.token = token || ''
    return options
  }
  checkNetwork() {

  }

}
class ResponseInterceptor {
  constructor() { }
  handleError() {

  }
  checkCode() {

  }
}

export default {
  requestInterceptor: new RequestInterceptor(),
  responseInterceptor: new ResponseInterceptor()
}