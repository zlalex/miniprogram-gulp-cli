
import {
  createIntersectionObserver,
  createSelectorQuery
} from '../utils/native/wechat-native-method'
import propClassName from './prop-class-name'

const __data__ = {
  app: null,
  deviceHeight: ''
}

export default Behavior({
  behaviors: [propClassName],

  data: {
    isMounted: false,
    viewClassName: ''
  },

  attached() {
    this.handleViewBeforeMounted()
  },

  detached() {
    this.handleViewDestroyed()
  },

  methods: {
    getDeviceInfo() {
      if (__data__.app) { return }
      __data__.app = wx.getSystemInfoSync()
      __data__.deviceHeight = __data__.app.windowHeight
    },

    async handleViewBeforeMounted() {
      this.getDeviceInfo()
      const { deviceHeight } = __data__
      const { viewClassName } = this.data
      if (this.data.isMounted) { return }
      const rect = await createSelectorQuery.call(this, viewClassName)
      const { top, height } = rect
      const isInDeviceView = top < deviceHeight && (top + height) > 0
      if (isInDeviceView) { return this.handleViewMount() }
      createIntersectionObserver.call(this, viewClassName, { top: top - deviceHeight }, data => {
        !this.data.isMounted && this.handleViewMount()
      })
    },

    handleViewMount() {
      this.setData({ isMounted: true })
    },

    handleViewDestroyed() { }
  }
})