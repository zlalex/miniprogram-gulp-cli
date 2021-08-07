import tabBarConfig from '../custom-tab-bar/config'
import safeCall from '../utils/methods/safe-call'

export default {
  data: {
    $loading: false
  },
  onShow() {
    safeCall(() => {
      const path = this.$route
      const tabItem = tabBarConfig.find(tab => tab.path === path)
      !!tabItem && this.getTabBar && this.getTabBar().setData({ activePath: path })
    })
  }
}
