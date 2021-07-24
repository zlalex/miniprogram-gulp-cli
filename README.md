# package.json

```
$ npm install --save-dev del shelljs cross-env gulp

$ npm install --save-dev gulp-newer gulp-imagemin gulp-json-editor gulp-babel gulp-uglify gulp-rename gulp-sass gulp-clean-css

$ npm install --save-dev @babel/core @babel/preset-env @babel/register
```

> node version > v11

## gulp

> gulp配置项

`index.js` gulp.file.js

`image.js` 处理图片, 压缩

`paste.js` 复制移动文件

`script.js` 处理js, es6编译、压缩

`style.js` 处理css, scss编译、压缩

`template.js` 处理jade, html转wxml

## build

> 项目编译配置

## config

> 环境变量配置

## src

> 项目源代码

### src.api

> 页面接口

### src.asset

> 图片资源

### src.component-atom

> 原子组件 `icon, popup, confirm, button, currency, image, loading, form...`

### src.component-module

> 功能组件 `sku-module, product-card, scroll-to-top, step-selector...`

### src.components

> 页面业务组件`page-component-name`

### src.custom-nav-bar

> 自定义头部

### src.custom-tab-bar

> 自定义底部TAB

### src.mappers

> 处理接口数据

### src.behaviors

> 页面、组件behavior

### src.models

> 数据模型-前端

### src.plugins

> 第三方插件

### src.request

> 请求方法封装

### src.storage

> wx.storage 管理

### src.store

> wx.wechat-store 状态管理

### src.track

> 埋点、数据上报

### src.utils

> methods-公共方法, native-wx方法, validations-数据校验

### src.wxs

## mark

1. gulp-htmlmin压缩html时，会将驼峰属性转义成小写。替换插件gulp-pretty-data

2. wechat.getUnlimited 获取小程序码注意事项。

> 必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面.

> scene=最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 url encode 处理，请使用其他编码方式）

## RULE

1. 变量名 __name__ 两边下划线表示闭包缓存数据对象，一般只读，条件下可删除。

2. 变量名 __name 左边下划线表示 局部作用域下同名变量的变体。

3. 变量名 CALLBACK_NAME 下划线连接大写变量表示常量，常量常声明在作用域顶部。

4. 布尔类型变量 isFalse hasFalse 以is、has等作为变量名前缀。

5. 接口函数 getRequestAsync 以 get/post作为前缀，Async作为结尾。

6. 事件函数 handleEventName 以 handle作为前缀，具体事件名或事件描述收尾。

## DONE...

1. page-view

2. nav-bar

3. tab-bar

4. sync-view

5. sync-image

6. confirm

7. popup

8. input

## TODO...

1. swipe

2. collapse

3. loading

4. icon

5. scroll-to-top

6. authorization

7. radio

8. checkbox

9. textarea

10. picker

11. button

12. slider

13. canvas

14. step

15. image

16. toast

## 小程序CI/CD