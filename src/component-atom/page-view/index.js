import { normalizeStyle } from '../../utils/index';
import propClassName from '../../behaviors/prop-class-name'

Component({
  behaviors: [propClassName],
  options: { multipleSlots: true },
  properties: {
    mount: { type: Boolean, value: false },
    normal: { type: Boolean, value: false },
    slotHeader: { type: Boolean, value: false },
    fixedFooter: { type: Boolean, value: false },
    insetNavBar: { type: Boolean, value: false },
    insetTabBar: { type: Boolean, value: false, observe: 'handleTabPageVisible' }
  },
  data: {
    insetNavBarStyle: ''
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
      const __insetNavBarStyle = {
        'padding-top': [navBarClientHeight, 'px'].join('')
      }
      this.setData({
        insetNavBarStyle: normalizeStyle(__insetNavBarStyle)
      })
    }
  }
})
