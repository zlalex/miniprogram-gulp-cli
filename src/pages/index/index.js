Page({
  data: {
    registerFormData: {},
    mount: false
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        mount: true
      })
    }, 1e3)
  },
  handleRegisterFormSubmit(event) {
    const { detail } = event
    const { validate, formData } = detail
    this.setData({ registerFormData: formData })
    console.log(validate, formData)
    if (!validate) { return }

    wx.navigateTo({
      url: '/pages/member/member'
    })
  }
})
