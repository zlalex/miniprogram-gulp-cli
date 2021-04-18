import validates from '../../validates/index'

const { isChineseName } = validates

Page({
  data: {
    visible: false,
    isChineseName,
    name: ''
  },
  onLoad: function () {
    console.log('home')
  },
  handleButtonTap() {
    this.setData({
      visible: !this.data.visible
    })
    console.log('tap')
  }
})
