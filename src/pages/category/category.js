Page({
  $route: 'pages/category/category',
  onShow() {
    console.log(2)
  },
  routerTo() {
    wx.navigateTo({ url: '/pages/product-list/product-list' })
  }
})
