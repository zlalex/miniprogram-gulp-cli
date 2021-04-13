![WXS](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/01wxs-module.html)

别写ES6

```js
var foo = "'hello world' from comm.wxs";
var bar = function(d) {
  return d;
}
module.exports = {
  foo: foo,
  bar: bar
};
```

```jsx
<wxs src="./../tools.wxs" module="tools" />
<view class="page component">
  <view> {{tools.msg}} </view>
  <view> {{tools.bar(tools.FOO)}} </view>
</view>
```