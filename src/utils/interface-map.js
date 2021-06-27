const __types__ = [Object, String, Number, Boolean, Array, Function, Date, RegExp]
const __typeMap__ = { object: true, string: true, number: true, boolean: true, array: true, date: true, regexp: true }
const __interfaceMap__ = {}
const generatorInterface = (type) => (value, observer = () => { }) => ({ type, value, observer })
__types__.forEach(type => {
  const __typeName = type.name.toLocaleLowerCase()
  const typeName = !__typeMap__[__typeName] ? 'function' : __typeName
  __interfaceMap__[typeName] = generatorInterface(type)
})

export default __interfaceMap__