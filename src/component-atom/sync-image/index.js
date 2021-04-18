import syncViewBehavior from '../../behaviors/sync-view'

Component({
  properties: {
    url: { type: String },
    miniHeight: { type: Boolean }
  },

  behaviors: [syncViewBehavior],

  externalClasses: ['ext-class'],

  lifetimes: {
    created() {
      this.data.viewClassName = '.component-sync-image'
    }
  }
})