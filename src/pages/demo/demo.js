const app = getApp()
Page({
  data: {
    registerFormData: {},
    mount: false,
    popupVisible: false
  },
  onLoad() {
    this.syncOnLoad()
  },
  syncOnLoad() {
    app.syncOnLaunch.then(async () => {
      this.setData({ mount: true })
    })
  },
  handleRegisterFormSubmit(event) {
    const { detail } = event
    const { validate, formData } = detail
    this.setData({ registerFormData: formData })
    this.setData({ popupVisible: true })

    if (!validate) { return }
    // api
  },
  async handleClosePopup() {
    this.setData({ popupVisible: false })
  },
  handleConfirmCancel() { },
  handleConfirm() { },
  handleConfirmTap() {
    this.handleClosePopup()
  }
})
