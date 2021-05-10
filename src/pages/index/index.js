import getLocationSync from '../../utils/native/get-location-sync'

Page({
  data: {
    registerFormData: {},
    mount: false,
    popupVisible: false
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
    this.setData({ popupVisible: true })

    if (!validate) { return }
    // wx.navigateTo({
    //   url: '/pages/member/member'
    // })
  },
  async handleClosePopup() {
    const location = await getLocationSync()
    console.log(location, 'location')
    this.setData({ popupVisible: false })
  },
  handleConfirmCancel() { console.log('cancel') },
  handleConfirm() { console.log('confirm') },
  handleConfirmTap() {
    this.handleClosePopup()
  }
})
