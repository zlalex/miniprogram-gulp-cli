import tokenManage from './token-manage'
import deepClone from './methods/deep-clone'
import validate from './validate/index'

export const __typeof__ = {
  ...validate
}

export {
  deepClone,
  tokenManage,
}
