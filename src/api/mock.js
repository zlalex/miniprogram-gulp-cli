import request from '../request/index'

export default {
  indexKoaUserAsync() {
    return request.get({
      url: 'http://localhost:3000/user'
    })
  },
  indexKoaMemberAsync(){
    return request.get({
      url: 'http://localhost:3000/wechat-store'
    })
  }
}
