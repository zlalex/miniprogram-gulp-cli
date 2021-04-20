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
    if (!validate) { return }
  }
})
