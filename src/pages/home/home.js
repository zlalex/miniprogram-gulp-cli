Page({
  data: {
    visiblePopup: false,
    submitCategories: []
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
