Page({
  $route: 'pages/home/home',
  data: {
    visiblePopup: false,
    submitCategories: []
  },
  onShow(){
    console.log(1)
  },
  handleFilterCategory(event) {
    this.setData({ submitCategories: event.detail })
    this.visibleFilterPopup()
  },
  visibleFilterPopup() {
    this.setData({ visiblePopup: !this.data.visiblePopup }, () => {
      this.getTabBar().triggerVisibleTabBar()
    })
  },
})
