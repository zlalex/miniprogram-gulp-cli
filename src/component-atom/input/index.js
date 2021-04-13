import atomForm from '../../behaviors/atom-form'

Component({
  options: {
    multipleSlots: true
  },
  behaviors: [atomForm],
  properties: {
    placeholder: { type: String },
    maxlength: { type: String, value: '250' }
  },
  methods: {
    handleChange(event) { },
    handleInput(event) {
      const value= event.detail.value
      this.triggerEvent('input', value)
      console.log(this.data.validate)
    },
    handleBlur(event) { }
  }
})