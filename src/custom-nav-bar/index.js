import { normalizeStyle } from '../utils/index';

Component({
  lifetimes: {
    attached() {
      const { statusBarHeight, system } = wx.getSystemInfoSync()
      const isApplePhone = !(/ios/i.test(system))
      const height = isApplePhone ? 48 : 44
      const __navBarStyle = {
        'padding-top': [statusBarHeight, 'px'].join(''),
        height: [height, 'px'].join('')
      }

      this.setData({
        navBarStyle: normalizeStyle(__navBarStyle)
      })
      this.triggerEvent('navBarMounted', {
        navBarClientHeight: statusBarHeight + height
      })
    }
  }
})
