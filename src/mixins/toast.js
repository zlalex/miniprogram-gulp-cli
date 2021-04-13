import errorMessage from '../constant/error-message'
import { isString, isObject } from '../utils/index'

const showToast = options => {
  const params = {
    title: '',
    image: '',
    icon: 'none',
    duration: 2000,
    mask: false
  }

  if (errorMessage[options]) {
    params.title = errorMessage[options]
  } else if (isString(options)) {
    params.title = options
  } else if (isObject(options)) {
    Object.assign(params, options)
  }

  wx.showToast && wx.showToast(params)
}

const hideToast = () => {
  wx.hideToast && wx.hideToast()
}

export default {
  show: showToast,
  hide: hideToast
}