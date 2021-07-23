export default function isAndroid(value) {
  if(!value){
    return !!value
  }
  const value2string = value.toLocaleLowerCase()
  return value2string.includes('android')
}