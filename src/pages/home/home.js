import getLocationSync from '../../utils/native/get-location-sync'
Page({
  onLoad() {
  },
  async getLocation(){
    const location = await getLocationSync()
    console.log(location, 'home location')
  }
})
