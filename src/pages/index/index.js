import tokenManage from '../../utils/token-manage'
import getLocationSync from '../../utils/native/get-location-sync'
import api from '../../api/index'

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
      const token = await tokenManage.get()
      this.setData({ mount: true })
    })
    console.log(api.indexKoaAsync)
    api.indexKoaAsync()
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
    this.setData({ popupVisible: false })
  },
  handleConfirmCancel() { },
  handleConfirm() { },
  handleConfirmTap() {
    this.handleClosePopup()
  }
})
