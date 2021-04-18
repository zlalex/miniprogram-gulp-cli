import atomForm from '../../behaviors/atom-form'
import propClassName from '../../behaviors/prop-class-name'

// prop-class 作为父级传入样式，修改子组件root元素样式
// exp-class 作为父级传入样式，修改子组件target元素样式
Component({
  behaviors: [atomForm, propClassName],
  externalClasses: ['ext-class'],
  properties: {
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    label: { type: String },
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