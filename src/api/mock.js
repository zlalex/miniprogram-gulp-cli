import request from '../request/index'

export default {
  indexKoaAsync() {
    return request.get({
      url: 'http://localhost:3000'
    })
  }
}