export default function $createIntersectionObserver(
  dom,
  options = {},
  callback
) {
  const observe = this.createIntersectionObserver()
  observe.relativeToViewport(options).observe(dom, res => {
    callback && callback(res)
  })
}