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
]

Component({
  data: {
    tabBarConfig: __tabBarConfig__,
    activePath: ''
  },
  methods: {
    handleTabItemActive(e) {
      const { item } = e.currentTarget.dataset
      const { path } = item
      const url = ['/', path].join('')
      wx.switchTab({ url })
    }
  }
})
