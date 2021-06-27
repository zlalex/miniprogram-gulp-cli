import request from '../request/index'
import config from '../config'

const { WECHAT_ID } = config

export default {
  async onLoginAsync(code) {
    const result = await request.get({
      url: `/estore/member/onLogin/${code}/${WECHAT_ID}`,
      allowNoToken: true
    });
    return result
  },
  async getMemberAsync(param) {
    const params = { param, type: 2 }
    const result =  await request.get({
      data: params,
      url: `${config.DOMAIN}/vans/vans-clm/member/query?wechatId=${WECHAT_ID}`
    })
    return result
  }
}