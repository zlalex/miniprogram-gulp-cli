export default Behavior({
  properties: {
    validation: { type: Object },
    require: { type: Boolean },
    value: {
      type: String,
      observer(value) {
        const __event = {
          detail: { value }
        }
        this.updateModel(__event)
      }
    }
  },
  data: {
    scopeValue: null
  },
  methods: {
    updateModel(event, sign) {
      const value = event.detail.value
      !sign && this.setData({ scopeValue: value })
      return value
    },
    validate(value) {
      const { validate } = this.properties.validation
      const __value = value || this.data.scopeValue
      // 有值校验值是否正确 is-error
      // 然后校验值是否必填 is-required
      const isError = __value ? !validate(__value) : false
      const isRequired = this.properties.require ? !!__value : true

      this.setData({ isError, isRequired })
      this.triggerEvent('validate', { isError, isRequired })
      return !isError && isRequired
    }
  }
})