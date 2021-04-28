const __data__ = { timer: null }

export default Behavior({
  data: {
    scopeVisible: false,
    animateClassNames: []
  },
  methods: {
    clearAnimateTimer() {
      if (!__data__._timer) { return }
      clearTimeout(__data__.timer)
      __data__.timer = null
    },
    triggerViewVisible(classNames, defer = 500) {
      const isHidden = !this.data.scopeVisible
      const params = { animateClassNames: classNames }
      this.clearAnimateTimer()
      if (isHidden) {
        params.scopeVisible = true
      } else {
        // 因为 this.setData({visible:true}) 会触发 visibleObserver 事情
        // 所以通过 this.data.visible = true 阻止重复的值监听事件
        this.data.visible = false
        this.setData({ visible: false })
        __data__.timer = setTimeout(() => {
          this.setData({ scopeVisible: false })
        }, defer);
      }
      this.setData(params)
      !isHidden && this.triggerEvent('close')
    }
  }
})