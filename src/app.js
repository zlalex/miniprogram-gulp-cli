import './utils/entry'
import safeCallback from './utils/methods/safe-call'
import tokenManage from './utils/token-manage'
import api from './api/index'
import storageManage from './storage/storage-manage'

App({
  syncOnLaunch: null,
  onLaunch() {
    this.syncOnLaunch = new Promise((resolve) => {
      safeCallback(async () => {
        // await this.getUserInfoAndMemberInfo()
        // MOCK
        this.getMockLoginAsync()
        resolve()
      })
    })
  },
  async getUserInfoAndMemberInfo() {
    await tokenManage.get()
    const { unionid } = storageManage.getUserInfo()
    const response = await api.getMemberAsync(unionid)
    const __response = await api.getMemberPointAsync(unionid)
    if (response.resultCode == 1 && __response.resultCode == 1) {
      const memberInfo = response.data
      const memberPoint = __response.data
      storageManage.setMemberInfo({ memberInfo, memberPoint })
    }
  },
  async getMockLoginAsync() {
    // MOCK
    const user = await api.indexKoaUserAsync()
    const [response, __response] = await api.indexKoaMemberAsync()
    console.log({ response, __response, user })
  },
  appData: {
    userInfo: null
  }
})