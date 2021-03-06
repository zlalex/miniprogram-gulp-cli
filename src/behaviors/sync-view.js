import createIntersectionObserver from '../utils/native/create-intersection-observer'
import createSelectorQuery  from '../utils/native/create-selector-query'
import getSystemInfo from '../utils/native/get-system-info'
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
      __data__.app = getSystemInfo()
      __data__.deviceHeight = __data__.app.windowHeight
    },
    async handleViewBeforeMounted() {
      this.getDeviceInfo()
      const { deviceHeight } = __data__
      const { viewClassName } = this.data
      if (this.data.isMounted) { return }
      const rect = await createSelectorQuery.call(this, viewClassName)
      const { top, height } = rect
      const isInDeviceView = top < deviceHeight && (top + height) > 0 || top < 0
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