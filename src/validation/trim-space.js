const trimSpace = value => value.replace(/(^\s*)|(\s*$)/g, '')
const replaceSpace = value => value.replace(/\s+/g, '')
const isSpace = value => {
  if (value == '') {
    return true
  }
  return /^[ ]*$/.test(value)
}

export default trimSpace
export {
  trimSpace,
  replaceSpace,
  isSpace
}