import validation from '../../validation/index'

const { isChineseName } = validation

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
