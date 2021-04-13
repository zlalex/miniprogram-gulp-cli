import atomForm from '../../behaviors/atom-form'
import propClassName from '../../behaviors/prop-class-name'

Component({
  options: {
    multipleSlots: true
  },
  behaviors: [atomForm, propClassName],
  properties: {
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    placeholder: { type: String },
    maxlength: { type: String, value: '250' }
  },
  data: {
    isError: false,
    isRequired: true
  },
  methods: {
    handleChange(e) {
      const value = this.updateModel(e, true)
      this.triggerEvent('change', value)
    },
    handleInput(e) {
      const value = this.updateModel(e)
      this.validate(value)
      this.triggerEvent('input', value)
    },
    handleBlur(e) {
      const value = this.updateModel(e)
      this.validate(value)
      this.triggerEvent('blur', value)
    },
  }
})