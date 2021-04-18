export default class Validation {
  constructor({ validate, fail, empty }) {
    this.validate = 'function' === (typeof validate) ? validate : () => true
    this.fail = fail
    this.empty = empty
  }
}