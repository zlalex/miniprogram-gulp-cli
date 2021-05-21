import validates from '../validates/index'
import wechatRequest from './request-factory'

const { isObject, isString } = validates
const methods = ['get', 'post']
class Request {
  constructor() {
    methods.forEach(method => {
      this[method] = async function (params) {
        let options = { method }
        if(isObject(params)){
          options = Object(options,params)
        }else if(isString(params)){
          options.url = params
          if(arguments.length === 2){
            options.data = arguments[1]
          }
        }
        const response = await wechatRequest(options)
        return response.data || {}
      }
    })
  }
}

export default new Request()

