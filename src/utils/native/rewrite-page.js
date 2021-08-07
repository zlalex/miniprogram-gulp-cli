import pageMixins from '../../mixins/page'
import validates from '../../validates/index'

const { isObject, isFunction } = validates
const _Page = Page

Page = function (options) {
  const _options = Object.assign({ mixins: [] }, options)
  !_options.mixins.includes(pageMixins) && _options.mixins.unshift(pageMixins)
  _options.mixins.forEach(mixin => {
    if (!isObject(mixin)) { return }
    if (mixin.data && isObject(mixin.data)) {
      _options.data = Object.assign({}, mixin.data, _options.data)
    }
    Object.keys(mixin).forEach(key => {
      if (key === 'data') { return }
      const originHook = _options[key] || function () { }
      _options[key] = async function () {
        if (!isFunction(originHook) || !isFunction(mixin[key])) {
          console.log([key, 'should be a function'].join(''))
          return
        }
        originHook.apply(this, arguments)
        mixin[key].apply(this, arguments)
      }
    })
  })
  delete _options.mixins
  return _Page(_options)
}