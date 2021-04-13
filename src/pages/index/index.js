Page({
  data: {
    visible: false
  },
  onLoad: function () {
    console.log('index')
  },
  handleButtonTap() {
    this.setData({
      visible: !this.data.visible
    })
    console.log('tap')
  }
})
