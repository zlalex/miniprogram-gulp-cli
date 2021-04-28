import { normalizeStyle } from '../../utils/index'
import propClassName from '../../behaviors/prop-class-name'

Component({
  behaviors: [propClassName],
  options: { multipleSlots: true },
  properties: {
    title: { type: String },
    mount: { type: Boolean, value: true }, // 页面挂载显示
    normal: { type: Boolean, value: false }, // 标准页面(移除 padding 值)
    fixedHeader: { type: Boolean, value: false }, // 固定头部(作为固定头部,常作为BANNER展示)
    fixedFooter: { type: Boolean, value: false }, // 固定底部
    insetNavBar: { type: Boolean, value: false }, // 插入自定义顶部导航
    insetTabBar: { type: Boolean, value: false, observe: 'handleTabPageVisible' } // 插入TabBar
  },
  data: {
    insetNavBarStyle: '',
    fixedHeaderStyle: ''
  },
  pageLifetimes: {
    show() {
      this.properties.insetTabBar && this.handleTabPageVisible()
    }
  },
  methods: {
    handleTabPageVisible() {
      const path = getCurrentPages()
      const current = path[path.length - 1]
      current && this.getTabBar().setData({ activePath: current.route })
    },
    handleNavBarMounted(e) {
      const { navBarClientHeight } = e.detail
      const heightToPixel = [navBarClientHeight, 'px'].join('')
      const __insetNavBarStyle = { 'padding-top': heightToPixel }
      const __fixedHeaderStyle = { top: heightToPixel }
      this.setData({
        insetNavBarStyle: normalizeStyle(__insetNavBarStyle),
        fixedHeaderStyle: normalizeStyle(__fixedHeaderStyle)
      })
      this.triggerEvent('pageOnReady', Object.assign({ navBarClientHeight }, this.data))
    }
  }
})
