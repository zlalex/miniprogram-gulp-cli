const __data__ = { timer: null }

export default Behavior({
  data: {
    scopeVisible: false,
    animateClassName: []
  },
  methods: {
    clearAnimateTimer() {
      if (__data__._timer) {
        clearTimeout(__data__.timer)
        __data__.timer = null
      };
    },

    triggerViewVisible(className, timer = 500) {
      const isHidden = this.data.scopeVisible
      className = isHidden ? ['animate-fade__in'] : ['animate-fade__out']
      const params = { animateClassName: className }
      this.clearAnimateTimer()
      if (isHidden) {
        params.scopeVisible = !isHidden
      } else {
        __data__.timer = setTimeout(() => {
          this.setData({ scopeVisible: false });
        }, timer);
      }
      this.setData(params)
    }
  }
})