import { normalizeStyle } from '../utils/index'
import getSystemInfo from '../utils/get-system-info'

Component({
  properties: {
    navTitle: { type: String }
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

      this.setData({ navBarStyle: normalizeStyle(__navBarStyle) })
      this.triggerEvent('navBarMounted', {
        navBarClientHeight: statusBarHeight + height
      })
    }
  }
})
