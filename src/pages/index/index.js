import validation from '../../validation/index'

const { isChineseName, isEmail } = validation

Page({
  data: {
    isChineseName,
    isEmail,
    formData: {
      userName: 'alex',
      email: 'zhouliang106@qq.com'
    }
  },
  __scopeData__: {
    formNames: ['#user-name', '#email'],
    formComponents: [],
  },
  onLoad() {
    this.getFormComponents()
  },
  handleButtonTap() {
    if (this.formComponentsValidate()) {
      console.log('success', this.data)
      return
    }
    console.log('fail', this.data)
  },
  handleFormChange(e) {
    const value = e.detail
    const { name } = e.currentTarget.dataset
    const { formData } = this.data
    formData[name] = value
    // console.log()
    this.setData({ formData })
  },
  getFormComponents() {
    const { formNames, formComponents } = this.__scopeData__
    formNames.forEach(id => {
      formComponents.push(this.selectComponent(id))
    })
  },
  formComponentsValidate() {
    const { formComponents } = this.__scopeData__
    return formComponents.every(form => form.validate && form.validate())
  }
})
