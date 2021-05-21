const formatNumber = (value) => {
  const str = value.toString()
  return str[1] ? str : `0${str}`
}

export default formatNumber