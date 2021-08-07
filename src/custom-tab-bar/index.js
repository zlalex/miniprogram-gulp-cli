import tabBarConfig from './config'

Component({
  data: {
    tabBarConfig,
    activePath: '',
    visible: true
  },
  methods: {
    handleTabItemActive(e) {
      const { item } = e.currentTarget.dataset
      const { path } = item
      const url = ['/', path].join('')
      wx.switchTab({ url })
    },
    triggerVisibleTabBar(){
      this.setData({
        visible: !this.data.visible
      })
    }
  }
})
