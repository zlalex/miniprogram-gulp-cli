import config from './config'

Component({
  properties: {
    visible: { type: Boolean, observer: 'mapToCategoryActive' },
    selectedCategories: Array
  },
  data: {
    activeCategories: [],
    filterCategoryData: config.categories,
  },
  lifetimes: {
    attached() {
      this.mapToCategoryActive()
    }
  },
  methods: {
    mapToCategoryActive(visible) {
      if (!visible) return
      if (!this.properties.selectedCategories.length) {
        this.data.activeCategories.length && this.clearSelectedCategory()
        return
      }
      const { selectedCategories } = this.properties
      const { filterCategoryData } = this.data
      const activeCategories = [...selectedCategories]
      const __map = {}
      activeCategories.forEach(item => {
        __map[item.value] = item
      })
      filterCategoryData.forEach(item => {
        item.categories.forEach(elem => {
          elem.active = !!__map[elem.value]
        })
      })
      this.setData({ filterCategoryData, activeCategories })
    },
    triggerCategoryItem(event) {
      const { item, parentIndex, targetIndex } = event.target.dataset
      const { activeCategories } = this.data
      const target = { i: parentIndex, j: targetIndex }

      item.active = !item.active
      if (item.active) {
        const __item = Object.assign({ parentIndex, targetIndex }, item)
        activeCategories.push(__item)
      } else {
        const index = activeCategories.findIndex(__elem => item.name === __elem.name && item.value === __elem.value)
        activeCategories.splice(index, 1)
      }

      this.setData({
        [`filterCategoryData[${target.i}].categories[${target.j}]`]: item,
        activeCategories
      })
    },
    clearSelectedCategory() {
      const { filterCategoryData } = this.data
      filterCategoryData.forEach(item => {
        item.categories.forEach(elem => {
          elem.active = false
        })
      })
      this.setData({ filterCategoryData, activeCategories: [] })
    },
    handleFilterCategory() {
      this.triggerEvent('confirm', this.data.activeCategories)
    },
    handleCancelPopup() {
      this.triggerEvent('cancel')
    }
  }
})