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
        await tokenManage.get()
        const { unionid } = storageManage.getUserInfo()
        const response = await api.getMemberAsync(unionid)
        if (response.resultCode == 1) {
          const memberInfo = response.data
          storageManage.setMemberInfo(memberInfo)
        }
        resolve()
      })
    })
  },
  appData: {
    userInfo: null
  }
})