export default Behavior({
  properties: {
    validations: { type: Array },
    require: { type: Boolean },
    value: {
      type: String,
      observer(value) {
        const __event = { detail: { value } }
        this.updateModel(__event)
      }
    }
  },
  data: {
    scopeValue: null,
    targetValid: null
  },
  methods: {
    updateModel(event, sign) {
      const value = event.detail.value
      // sign = true 不更新 scopeValue
      !sign && this.setData({ scopeValue: value })
      return value
    },
    validate(value) {
      const { validations, require } = this.properties
      const __value = value || this.data.scopeValue
      // 有值校验值是否正确 is-error
      // 然后校验值是否必填 is-required
      const targetValid = { fail: '', empty: '', isError: false, isRequired: require }
      const valid = validations.some(item => {
        const { validate } = item
        const isError = __value ? !validate(__value) : false
        const isRequired = this.properties.require ? !!__value : true
        const __valid = (!isError && isRequired)
        if (!__valid) {
          targetValid.fail = item.fail
          targetValid.empty = item.empty
          targetValid.isError = isError
          targetValid.isRequired = isRequired
          this.setData({ targetValid })
        }
        return !__valid
      })

      !valid && this.setData({ targetValid: null })
      this.triggerEvent('validate', targetValid)
      return !valid
    }
  }
})