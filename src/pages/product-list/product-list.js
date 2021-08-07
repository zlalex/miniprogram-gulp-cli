Page({
  $route: 'pages/product-list/product-list',
  data: {
    title: '商品列表',
    visibleBanner: false,
    visiblePopup: false,
    submitCategories: []
  },
  onShow() {
    console.log(1)
  },
  handleFilterCategory(event) {
    this.setData({ submitCategories: event.detail })
    this.visibleFilterPopup()
  },
  visibleFilterPopup() {
    this.setData({ visiblePopup: !this.data.visiblePopup })
  }
})
