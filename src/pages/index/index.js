Page({
  data: {
    registerFormData: {}
  },
  onLoad() { },
  handleRegisterFormSubmit(event) {
    const { detail } = event
    const { validate, formData } = detail
    this.setData({ registerFormData: formData })
    if (!validate) { return }
  }
})
