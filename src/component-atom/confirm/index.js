import interfaceMap from '../../utils/interface-map'

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    visible: interfaceMap.boolean(false, 'handleConfirmVisible'),
    insetFooter: interfaceMap.boolean(false), // 是否自定义弹窗底部
    cancelText: interfaceMap.string('取消'),
    confirmText: interfaceMap.string('确认')
  },
  data: {
    scopeVisible: false
  },
  methods: {
    handleConfirmVisible(visible) {
      this.setData({ scopeVisible: visible })
    },
    handleConfirmEvent(event) {
      const eventName = event?.currentTarget?.dataset?.type
      eventName && this.triggerConfirmEvent(eventName)
    },
    triggerConfirmEvent(eventName) {
      if (!this.properties.visible) { return }
      this.properties.visible = false
      this.setData({ scopeVisible: false })
      this.triggerEvent(eventName)
    }
  }
})
