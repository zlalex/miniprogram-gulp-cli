import Loading from '../component-packages/loading/index'

const showLoading = () => {
  Loading().then(loading => {
    loading.show()
  })
}

const hideLoading = () => {
  Loading().then(loading => {
    loading.hide()
  })
}

export default {
  show: showLoading,
  hide: hideLoading
}