const __types__ = [Object, String, Number, Boolean, Array, Function, Date, RegExp]
const __interfaceMap__ = {}
const generatorInterface = (type) => (value, observer = () => { }) => ({ type, value, observer })
__types__.forEach(type => {
  const __typeName = type.name.toLocaleLowerCase()
  const typeName = __typeName === 'a' ? 'function' : __typeName
  __interfaceMap__[typeName] = generatorInterface(type)
})

export default __interfaceMap__