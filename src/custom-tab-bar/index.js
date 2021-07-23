const __tabBarConfig__ = [
  {
    name: 'category',
    text: '分类',
    path: 'pages/category/category',
    defaultIconPath: '',
    activeIconPath: ''
  },
  {
    name: 'home',
    text: '首页',
    path: 'pages/home/home',
    defaultIconPath: '',
    activeIconPath: ''
  },
  {
    name: 'index',
    text: '我的',
    path: 'pages/index/index',
    defaultIconPath: '',
    activeIconPath: ''
  },
  {
    name: 'member',
    text: '我的',
    path: 'pages/member/member',
    defaultIconPath: '',
    activeIconPath: ''
  }
]

Component({
  data: {
    tabBarConfig: __tabBarConfig__,
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
