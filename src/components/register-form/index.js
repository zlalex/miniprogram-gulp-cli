import validates from '../../validates/index'
import Validation from '../../models/Validation'

const { isChineseName, isEmail, isNumber } = validates
const userNameRule = new Validation({
  validate: isChineseName,
  fail: '请输入正确的姓名！',
  empty: '请输入姓名！'
})

const userNameCantNumber = new Validation({
  validate: (value) => !isNumber(value),
  fail: '姓名不能是数字！',
  empty: '请输入姓名！'
})

const emailRule = new Validation({
  validate: isEmail,
  fail: '请输入正确的邮箱！',
  empty: '请输入邮箱！'
})

Component({
  data: {
    userNameRule: [userNameCantNumber, userNameRule],
    emailRule: [emailRule],
    formData: {
      userName: 'Alex',
      email: 'zhouliang106@qq.com'
    },
    formNames: ['#user-name', '#email'],
    formComponents: [],
    formGroup: [
      {
        id: 'user-name',
        rules: userNameRule,
        require: true,
        label: '',
        handle: ''
      },
      {
        id: 'user-name',
        rules: userNameRule,
        require: true,
        label: '',
        handle: ''
      },
    ]
  },
  lifetimes: {
    attached() {
      this.getFormComponents()
    }
  },
  methods: {
    handleFormSubmit() {
      const validate = this.formComponentsValidate()
      const { formData } = this.data
      this.triggerEvent('submit', { validate, formData })
    },
    handleFormChange(e) {
      const value = e.detail
      const { name } = e.currentTarget.dataset
      const { formData } = this.data
      formData[name] = value
      this.setData({ formData })
    },
    getFormComponents() {
      const { formNames, formComponents } = this.data
      formNames.forEach(id => {
        formComponents.push(this.selectComponent(id))
      })
    },
    formComponentsValidate() {
      const { formComponents } = this.data
      return formComponents.every(form => form.validate && form.validate())
    },
  }
})