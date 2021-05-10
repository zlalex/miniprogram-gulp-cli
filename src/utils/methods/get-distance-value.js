// 弧度
const RAD = value => (value * Math.PI) / 180
// 地球赤道半径
const EARTH_RADIUS = 6378.137
// 两点(经纬度)之间的距离(公里)
export default function getDistanceValue(lat1, lng1, lat2, lng2) {
  if (!lat1 || !lng1 || !lat2 || !lng2) { return 0 }
  const radLat1 = RAD(lat1)
  const radLat2 = RAD(lat2)
  const a = radLat1 - radLat2
  const b = RAD(lng1) - RAD(lng2)
  let s = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) *
      Math.cos(radLat2) *
      Math.pow(Math.sin(b / 2), 2)
    )
  )
  s *= EARTH_RADIUS
  s = Math.round(s * 10000) / 10000 // 输出为公里
  return s.toFixed(2)
}