import request from '../request/index'
import config from '../config'

const { WECHAT_ID } = config

export default {
  async onLoginAsync() {
    const code = await wx.$login()
    const response = await request.get({
      url: `/estore/member/onLogin/${code}/${WECHAT_ID}`,
      auth: true
    })
    return response
  }
}