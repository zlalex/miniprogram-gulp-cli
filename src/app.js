import './utils/entry'
import safeCallback from './utils/methods/safe-call'
import tokenManage from './utils/token-manage'
import api from './api/index'
import storageManage from './storage/storage-manage'

App({
  syncOnLaunch: null,
  async onLaunch() {
    this.syncOnLaunch = new Promise(async (resolve) => {
      safeCallback(async () => {
        // await this.getUserInfoAndMemberInfo()
        resolve()
      })
    })
  },
  async getUserInfoAndMemberInfo(){
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
  appData: {
    userInfo: null
  }
})