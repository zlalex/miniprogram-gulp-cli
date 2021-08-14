import interfaceMap from '../utils/interface-map'
import { normalizeStyle } from '../utils/index'
import getSystemInfo from '../utils/native/get-system-info'

Component({
  properties: {
    navTitle: interfaceMap.string(''),
    hasBack: { type: Boolean },
    hasHome: { type: Boolean },
    hasServe: { type: Boolean },
    delta: { type: Number, value: 1 }
  },
  lifetimes: {
    attached() {
      const { statusBarHeight, system } = getSystemInfo()
      const isAndroid = !(/ios/i.test(system))
      const height = isAndroid ? 48 : 44
      const __navBarStyle = {
        'padding-top': [statusBarHeight, 'px'].join(''),
        height: [height, 'px'].join('')
      }
      this.visibleNavBarIcon()
      this.setData({ navBarStyle: normalizeStyle(__navBarStyle) })
      this.triggerEvent('navBarMounted', {
        navBarClientHeight: statusBarHeight + height
      })
    }
  },
  data: {
    visibleHome: false,
    visibleBack: false,
    visibleServe: false
  },
  methods: {
    visibleNavBarIcon() {
      const { hasBack, hasHome, hasServe } = this.properties
      const pages = getCurrentPages()
      const iconStatus = {
        visibleHome: hasBack,
        visibleBack: hasHome,
        visibleServe: hasServe
      }
      if (pages.length > 1) {
        iconStatus.visibleBack = true
      } else {
        iconStatus.visibleHome = true
      }

      this.setData(iconStatus)
    },
    handleRouteBack() {
      const { delta } = this.properties
      wx.navigateBack({ delta })
    },
    handleRouteToHome() {
      wx.navigateTo({ url: '/pages/home/home' })
    }
  }
})
