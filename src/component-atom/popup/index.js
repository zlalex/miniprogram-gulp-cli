import interfaceMap from '../../utils/interface-map'
import propClassName from '../../behaviors/prop-class-name'
import animateView from '../../behaviors/animate-view'

const __animateNameMap__ = {
  fade: 'fade',
  slideDown: 'slide__down',
  slideUp: 'slide__up',
  slideLeft: 'slide__left',
  slideRight: 'slide__right',
}

Component({
  behaviors: [propClassName, animateView],
  externalClasses: ['ext-class'],
  properties: {
    animate: interfaceMap.string('slideDown'), // [弹出方向, slideUp, slideLeft, slideRight]
    position: interfaceMap.string('bottom'), // [弹窗内容位置, top, left, right]
    zIndex: interfaceMap.number(100), // 覆盖层级
    defer: interfaceMap.number(500),  // 延迟隐藏
    maskEvent: interfaceMap.boolean(true), // 模态层点击隐藏
    beforeClose: interfaceMap.function(), // 鸡肋属性
    visible: interfaceMap.boolean(false, 'handleChangeVisible')
  },
  methods: {
    noop() { },
    handleChangeVisible(visible) {
      const animateName = __animateNameMap__[this.properties.animate] || 'fade'
      const animateContent = visible ? `animate-${animateName}-in` : `animate-${animateName}-out`
      const animateMask = visible ? `animate-fade__in` : `animate-fade__out`
      const animateClassNames = [animateContent, animateMask]
      !visible && 'function' === typeof this.properties.beforeClose && this.properties.beforeClose()
      this.triggerViewVisible(animateClassNames, this.properties.defer)
    },
    handleCloseMaskByMask() {
      if (!this.properties.maskEvent) { return }
      this.handleChangeVisible(false, this.properties.defer)
    }
  }
})
