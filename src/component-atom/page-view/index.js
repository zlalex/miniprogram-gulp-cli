import propClassName from '../../behaviors/prop-class-name'

Component({
  behaviors: [propClassName],
  options: { multipleSlots: true },
  properties: {
    mount: { type: Boolean, value: false },
    normal: { type: Boolean, value: false },
    slotHeader: { type: Boolean, value: false },
    fixedFooter: { type: Boolean, value: false },
    insetTabBar: { type: Boolean, value: false }
  }
})
