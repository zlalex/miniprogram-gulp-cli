Page({
  $route: 'pages/product-list/product-list',
  data: {
    title: 'ๅๅๅ่กจ',
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
