import propClassName from '../../behaviors/prop-class-name'
import animateView from '../../behaviors/animate-view'

const animateNameMap = {
  fade: 'fade',
  slideDown: 'slide__down',
  slideUp: 'slide__up',
  slideLeft: 'slide__left',
  slideRight: 'slide__right',
}

Component({
  behaviors: [propClassName, animateView],
  properties: {
    animate: { type: String, value: 'slideDown' }, // slideUp, slideLeft, slideRight
    position: { type: String, value: 'bottom' }, // top, left, right
    zIndex: { type: Number, value: 100 },
    visible: { type: Boolean, value: false, observe: 'handleChangeVisible' }
  },
  methods: {
    handleChangeVisible(visible) {
      const animateName = animateNameMap[this.properties.animate] || 'fade'
      let className = [`animate-${animateName}__in`, 'animate-fade__in']
      if (!visible) {
        className = [`animate-${animateName}__out`, 'animate-fade__0ut']
      }
      this.triggerViewVisible(className)
    }
  }
})
