import validate from '../../utils/validate/index'
const { isChineseName } = validate
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
