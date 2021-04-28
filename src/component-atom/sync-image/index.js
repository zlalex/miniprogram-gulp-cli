import interfaceMap from '../../utils/interface-map'
import syncViewBehavior from '../../behaviors/sync-view'

Component({
  properties: {
    url: interfaceMap.string(''),
    miniHeight: interfaceMap.boolean(false)
  },
  behaviors: [syncViewBehavior],
  externalClasses: ['ext-class'],
  lifetimes: {
    created() {
      this.data.viewClassName = '.component-sync-image'
    }
  }
})