import { isFunction } from '../../validates/index'

for (const key in wx) {
  const wechatMethod = wx[key]
  const isSyncMethod = key.toLocaleLowerCase().includes('sync')
  if (!isSyncMethod && isFunction(wechatMethod)) {
    const __key = ['$', key].join('')
    wx[__key] = (options, ...params) => new Promise((resolve, reject) => {
      wechatMethod(Object.assign({}, options, {
        success: resolve,
        fail: reject
      }), ...params)
    })
  }
}
