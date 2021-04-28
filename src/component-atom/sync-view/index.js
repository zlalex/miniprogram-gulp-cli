import syncViewBehavior from '../../behaviors/sync-view'

Component({
  behaviors: [syncViewBehavior],
  externalClasses: ['ext-class'],
  lifetimes: {
    created() {
      this.data.viewClassName = '.component-sync-view'
    }
  }
})