import { __typeof__ } from '../utils/index'
import __request__ from './request-factory'

const methods = ['get', 'post']
class Request {
  constructor() {
    methods.forEach(methodName => {
      this[methodName] = async function (options) {
        let __options = {
          method: methodName
        }
        if (__typeof__.isObject(options)) {
          // request.get({url: '', data: {}})
          __options = {
            ...__options,
            ...options
          }
        } else if (__typeof__.isString(options)) {
          // request.get('url', params = {})
          __options.url = options
          if (arguments.length === 2) {
            __options.data = arguments[1]
          }
        }
        const response = await __request__.send(__options)
        return response.data || {}
      }
    })
  }
}

export default new Request()

